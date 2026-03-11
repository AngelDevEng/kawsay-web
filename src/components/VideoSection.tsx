'use client';

import { useState, useRef } from 'react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[var(--gold-light)]/10 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--botanical)]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-[var(--botanical)]/10 text-[var(--botanical)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            CONOCE NUESTRA HISTORIA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--cacao)] mb-4">
            Descubre el Poder de los{' '}
            <span className="text-[var(--botanical)]">Andes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una mirada a nuestra tradición y el proceso de creación de KAWSAY, 
            el snack que conecta la sabiduría ancestral con la nutrición moderna.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--botanical)]/20 via-[var(--gold)]/20 to-[var(--cacao)]/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/kawsay-logo.png"
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video-kawsay.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
              
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group cursor-pointer" onClick={togglePlay}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[var(--botanical)]/50 rounded-full blur-xl animate-pulse"></div>
                    <button
                      className="relative w-24 h-24 bg-[var(--botanical)] rounded-full flex items-center justify-center 
                        transform transition-all duration-300 group-hover:scale-110 shadow-lg hover:shadow-2xl"
                      aria-label="Reproducir video"
                    >
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all opacity-0 hover:opacity-100"
                  aria-label="Pausar video"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                </button>
              )}
            </div>

            <div className="bg-gradient-to-r from-[var(--cacao)] to-[var(--botanical)] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">KAWSAY - Energía Andina</p>
                  <p className="text-white/70 text-xs">Video institucional</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-white/70 text-sm">Duración: 2:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🌱', title: '100% Natural', desc: 'Ingredientes orgánicos de los Andes' },
            { icon: '⚡', title: 'Energía Natural', desc: 'Sin crash ni azúcares refinados' },
            { icon: '🏔️', title: 'Tradición Andina', desc: 'Recetas ancestrales reinventadas' }
          ].map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--cacao)] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
