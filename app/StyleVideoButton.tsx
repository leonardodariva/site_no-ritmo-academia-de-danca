"use client";

import { useRef } from "react";
import { Play, X } from "lucide-react";

const videoSrc = "/videos/" + encodeURIComponent("Firefly gere um video de um casal dançando forró 541883.mp4");

export default function StyleVideoButton({ styleName }: { styleName: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="style-video-button"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dialog.current?.showModal();
        }}
      >
        <Play size={15} fill="currentColor" aria-hidden="true" />
        <span>Ver vídeo</span>
      </button>
      <dialog
        className="style-video-dialog"
        ref={dialog}
        aria-label={`Vídeo demonstrativo de ${styleName}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="style-video-dialog-inner">
          <div className="style-video-dialog-head">
            <strong>{styleName}</strong>
            <button type="button" aria-label="Fechar vídeo" onClick={() => dialog.current?.close()}>
              <X aria-hidden="true" />
            </button>
          </div>
          <video
            className="style-video-player"
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            aria-label={`Vídeo demonstrativo de ${styleName}`}
          />
        </div>
      </dialog>
    </>
  );
}
