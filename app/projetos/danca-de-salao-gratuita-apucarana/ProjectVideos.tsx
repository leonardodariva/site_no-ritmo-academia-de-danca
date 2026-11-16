"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";

const video = { id: "DfznOyqpoyC", url: "https://www.instagram.com/p/DfznOyqpoyC/" };

export default function ProjectVideos() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="project-videos">
      <p>Veja um momento do projeto. O vídeo é carregado apenas quando você escolhe assistir.</p>
      <div className="project-video-choices">
        <button
          type="button"
          className={showVideo ? "project-video-choice is-selected" : "project-video-choice"}
          aria-pressed={showVideo}
          onClick={() => setShowVideo(true)}
        >
          <strong>Assistir vídeo</strong>
          <Play size={20} fill="currentColor" aria-hidden="true" />
        </button>
      </div>
      {showVideo && (
        <div className="project-video-viewer">
          <iframe
            title="Vídeo do projeto no Instagram"
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
