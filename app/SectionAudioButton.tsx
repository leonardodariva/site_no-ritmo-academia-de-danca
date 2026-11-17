"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Square, Volume2 } from "lucide-react";
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

export default function SectionAudioButton({ sectionKey, title }: { sectionKey: string; title: string }) {
  const pathname = usePathname();
  const audioKey = `${pathname}#${sectionKey}`;
  const audioSrc = sectionAudioSources[audioKey];
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
