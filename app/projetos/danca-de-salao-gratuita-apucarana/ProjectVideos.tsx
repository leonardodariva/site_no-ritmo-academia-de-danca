"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const videos = [
  { id: "DfznOyqpoyC", url: "https://www.instagram.com/p/DfznOyqpoyC/" },
  { id: "DSglvxgDoBR", url: "https://www.instagram.com/p/DSglvxgDoBR/" },
  { id: "DSgnWltDual", url: "https://www.instagram.com/p/DSgnWltDual/" },
] as const;

export default function ProjectVideos() {
  const [selected, setSelected] = useState<number | null>(null);
  const video = selected === null ? null : videos[selected];

  return (
    <div className="project-videos">
      <p>Veja momentos do projeto. Escolha um vídeo para carregá-lo aqui, ou abra a publicação no Instagram.</p>
      <div className="project-video-choices" aria-label="Vídeos do projeto">
        {videos.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={selected === index ? "project-video-choice is-selected" : "project-video-choice"}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>0{index + 1}</span>
            <strong>Vídeo {index + 1}</strong>
            <Play size={20} fill="currentColor" aria-hidden="true" />
          </button>
        ))}
      </div>
      {video && (
        <div className="project-video-viewer">
          <iframe
            key={video.id}
            title={`Vídeo ${selected! + 1} do projeto no Instagram`}
            src={`https://www.instagram.com/p/${video.id}/embed/`}
            loading="lazy"
            allowFullScreen
          />
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            Abrir vídeo no Instagram <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
