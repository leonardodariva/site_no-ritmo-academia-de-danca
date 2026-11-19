"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play, Square, Volume2 } from "lucide-react";
import { sectionAudioSources } from "../content/section-audio";

const audioStartEvent = "no-ritmo-section-audio-start";

function splitSpeechText(text: string): string[] {
  const chunks: string[] = [];
  for (const line of text.split(/\n+/).map((part) => part.replace(/\s+/g, " ").trim()).filter(Boolean)) {
    let remaining = line;
    while (remaining.length > 220) {
      const breakAt = remaining.lastIndexOf(" ", 220);
      const end = breakAt > 100 ? breakAt : 220;
      chunks.push(remaining.slice(0, end));
      remaining = remaining.slice(end).trimStart();
    }
    if (remaining) chunks.push(remaining);
  }
  return chunks;
}

export default function SectionAudioButton({ sectionKey, title, audioPath }: { sectionKey: string; title: string; audioPath?: string }) {
  const pathname = usePathname();
  const sourcePath = audioPath ?? pathname;
  const normalizedPathname = sourcePath === "/" ? sourcePath : sourcePath.replace(/\/+$/, "");
  const audioKey = `${normalizedPathname}#${sectionKey}`;
  const audioSrc = sectionAudioSources[audioKey];

  if (audioSrc) {
    return <SectionAudioPlayer key={audioKey} audioKey={audioKey} audioSrc={audioSrc} title={title} />;
  }

  return <SectionAudioReadButton audioKey={audioKey} audioSrc={audioSrc} title={title} />;
}

function SectionAudioReadButton({ audioKey, audioSrc, title }: { audioKey: string; audioSrc?: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speechActive = useRef(false);
  const playbackToken = useRef(0);

  const stop = useCallback((updateState = true) => {
    playbackToken.current += 1;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (speechActive.current && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    speechActive.current = false;
    if (updateState) setPlaying(false);
  }, []);

  useEffect(() => {
    const stopForAnotherBlock = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== audioKey && (audioRef.current || speechActive.current)) stop();
    };
    window.addEventListener(audioStartEvent, stopForAnotherBlock);
    return () => {
      window.removeEventListener(audioStartEvent, stopForAnotherBlock);
      stop(false);
    };
  }, [audioKey, stop]);

  function startSpeech(text: string, token: number) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      setPlaying(false);
      return;
    }

    const synth = window.speechSynthesis;
    const chunks = splitSpeechText(text);
    if (!chunks.length) {
      setPlaying(false);
      return;
    }

    speechActive.current = true;
    synth.cancel();
    if (synth.paused) synth.resume();
    const voices = synth.getVoices();
    const voice = voices.find((item) => item.lang.toLowerCase() === "pt-br")
      ?? voices.find((item) => item.lang.toLowerCase().startsWith("pt"));

    const speakChunk = (index: number) => {
      if (token !== playbackToken.current) return;
      if (index >= chunks.length) {
        speechActive.current = false;
        setPlaying(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      utterance.lang = "pt-BR";
      if (voice) utterance.voice = voice;
      utterance.onend = () => speakChunk(index + 1);
      utterance.onerror = (event) => {
        if (token !== playbackToken.current) return;
        if (event.error === "canceled" || event.error === "interrupted") return;
        speechActive.current = false;
        setPlaying(false);
      };
      synth.speak(utterance);
    };
    speakChunk(0);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (playing) {
      stop();
      return;
    }

    const article = event.currentTarget.closest("article");
    const heading = article?.querySelector<HTMLElement>(".subpage-section-title h2")?.innerText.trim();
    const copy = article?.querySelector<HTMLElement>(".subpage-section-copy")?.innerText.trim();
    const text = [heading, copy].filter(Boolean).join("\n");
    if (!text) return;

    window.dispatchEvent(new CustomEvent(audioStartEvent, { detail: audioKey }));
    const token = ++playbackToken.current;
    setPlaying(true);

    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.preload = "none";
      audioRef.current = audio;
      audio.onended = () => {
        if (token === playbackToken.current) stop();
      };
      audio.onerror = () => {
        if (token !== playbackToken.current || audioRef.current !== audio) return;
        audioRef.current = null;
        startSpeech(text, token);
      };
      void audio.play().catch(() => {
        if (token !== playbackToken.current || audioRef.current !== audio) return;
        audioRef.current = null;
        startSpeech(text, token);
      });
    } else {
      startSpeech(text, token);
    }
  }

  return (
    <button
      type="button"
      className={`section-audio-button${playing ? " is-playing" : ""}`}
      data-audio-key={audioKey}
      data-audio-src={audioSrc}
      onClick={handleClick}
      aria-label={playing ? `Parar leitura de ${title}` : `Ouvir o bloco ${title}`}
      aria-pressed={playing}
    >
      {playing ? <Square size={14} fill="currentColor" aria-hidden="true" /> : <Volume2 size={17} aria-hidden="true" />}
      <span>{playing ? "Parar leitura" : "Ouvir este bloco"}</span>
    </button>
  );
}

function formatTime(seconds: number) {
  const wholeSeconds = Math.floor(seconds);
  return `${Math.floor(wholeSeconds / 60)}:${String(wholeSeconds % 60).padStart(2, "0")}`;
}

function SectionAudioPlayer({ audioKey, audioSrc, title }: { audioKey: string; audioSrc: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const [activated, setActivated] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [failed, setFailed] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  function cyclePlaybackRate() {
    const nextRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
    if (audioRef.current) audioRef.current.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  }

  useEffect(() => {
    const audio = audioRef.current;
    const closeForAnotherBlock = (event: Event) => {
      if ((event as CustomEvent<string>).detail === audioKey) return;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      setActivated(false);
      setPlaying(false);
      setElapsed(0);
      setFailed(false);
    };

    window.addEventListener(audioStartEvent, closeForAnotherBlock);
    return () => {
      window.removeEventListener(audioStartEvent, closeForAnotherBlock);
      audio?.pause();
    };
  }, [audioKey]);

  useEffect(() => {
    if (activated) playButtonRef.current?.focus({ preventScroll: true });
  }, [activated]);

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }

    setFailed(false);
    if (audio.error) audio.load();
    audio.playbackRate = playbackRate;
    window.dispatchEvent(new CustomEvent(audioStartEvent, { detail: audioKey }));
    void audio.play().catch((error: unknown) => {
      if (!(error instanceof DOMException && error.name === "AbortError")) setFailed(true);
    });
  }

  function seek(seconds: number) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = Math.max(0, Math.min(duration, seconds));
    setElapsed(audio.currentTime);
  }

  const position = Math.min(elapsed, duration);

  return (
    <div className="section-audio-player" role="group" aria-label={`Áudio do bloco ${title}`} data-audio-key={audioKey} data-audio-src={audioSrc}>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onDurationChange={(event) => {
          const seconds = event.currentTarget.duration;
          setDuration(Number.isFinite(seconds) ? seconds : 0);
        }}
        onTimeUpdate={(event) => setElapsed(event.currentTarget.currentTime)}
        onPlay={(event) => {
          setPlaying(true);
          setElapsed(event.currentTarget.currentTime);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onError={() => { setPlaying(false); setFailed(true); }}
      />
      {activated ? (
        <div className="section-audio-player-controls">
          <button
            ref={playButtonRef}
            type="button"
            className="section-audio-player-toggle"
            onClick={togglePlayback}
            aria-label={playing ? "Pausar narração" : "Reproduzir narração"}
          >
            {playing ? <Pause size={18} fill="currentColor" aria-hidden="true" /> : <Play size={18} fill="currentColor" aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="section-audio-player-speed"
            onClick={cyclePlaybackRate}
            aria-label={`Velocidade ${String(playbackRate).replace(".", ",")} vezes. Alterar para ${playbackRate === 1 ? "1,5" : playbackRate === 1.5 ? "2" : "1"} vezes`}
            title="Alternar velocidade: 1×, 1,5× e 2×"
          >
            {String(playbackRate).replace(".", ",")}×
          </button>
          <div className="section-audio-player-progress">
            <input
              className="section-audio-player-timeline"
              type="range"
              min={0}
              max={duration || 1}
              step={0.1}
              value={position}
              disabled={!duration || failed}
              onChange={(event) => seek(event.currentTarget.valueAsNumber)}
              aria-label="Posição da narração"
              aria-valuetext={`${formatTime(position)} de ${formatTime(duration)}`}
            />
            <div className="section-audio-player-times" aria-hidden="true">
              <span>{formatTime(position)}</span><span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="section-audio-button"
          onClick={() => {
            setActivated(true);
            togglePlayback();
          }}
        >
          <Volume2 size={17} aria-hidden="true" /> Ouvir este bloco
        </button>
      )}
      {failed && <span className="section-audio-player-error" role="status">Não foi possível tocar o áudio. Tente novamente.</span>}
    </div>
  );
}
