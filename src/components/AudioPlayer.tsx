"use client";

import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

// --- Iconos SVG ---
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const PrevIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-pink/50">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-pink/50">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
);

const ShuffleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-brand-pink/40">
    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </svg>
);

const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-brand-pink/40">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

// --- Animaciones ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Promesa para manejar posibles bloqueos de autoplay en navegadores
        audioRef.current.play().catch((error) => {
          console.log("Error al reproducir:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.section
      className="flex w-full flex-col items-center justify-center bg-brand-bg py-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Texto Decorativo */}
      <div className="text-center mb-8">
        <h3 className="font-script text-5xl text-brand-pink md:text-6xl">
          Dale play a mi canción
        </h3>
        <h3 className="font-script text-5xl text-brand-pink md:text-6xl mt-2">
          favorita
        </h3>
      </div>

      {/* Controles del Reproductor */}
      <div className="flex items-center justify-center gap-6 md:gap-10 w-full max-w-xs">
        
        {/* Botones Izquierda */}
        <div className="flex gap-4 items-center">
            <button className="p-2 hover:scale-110 transition-transform"><ShuffleIcon /></button>
            <button className="p-2 hover:scale-110 transition-transform"><PrevIcon /></button>
        </div>

        {/* Botón Play Central */}
        <button 
            onClick={togglePlay}
            className="relative flex items-center justify-center w-20 h-20 bg-brand-pink rounded-full shadow-xl hover:scale-105 transition-transform active:scale-95 group"
        >
            {/* Efecto de pulso sutil si está reproduciendo */}
            {isPlaying && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75 animate-ping"></span>
            )}
            <div className="relative z-10">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>
        </button>

        {/* Botones Derecha */}
        <div className="flex gap-4 items-center">
            <button className="p-2 hover:scale-110 transition-transform"><NextIcon /></button>
            <button className="p-2 hover:scale-110 transition-transform"><RepeatIcon /></button>
        </div>
      </div>

      {/* Barra de Progreso Visual */}
      <div className="w-full max-w-xs mt-8 flex items-center gap-3">
        <div className="h-1.5 w-full bg-brand-pink/10 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-brand-pink/60"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ 
                    duration: isPlaying ? 180 : 0, // Asumimos 3 min aprox o reseteamos
                    ease: "linear" 
                }} 
            />
        </div>
      </div>

      {/* Elemento Audio Oculto */}
      {/* Asegúrate de tener 'song.mp3' en tu carpeta public */}
      <audio ref={audioRef} src="/song.mp3" loop />

    </motion.section>
  );
}