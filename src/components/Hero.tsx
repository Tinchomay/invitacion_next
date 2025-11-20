"use client"; // Necesario para Framer Motion

import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; 

// Variantes para la animación de entrada
const containerVariants: Variants = { 
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Aplica un retraso entre cada elemento hijo
    },
  },
};

const itemVariants: Variants = { 
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    // Usamos h-[100vh] para asegurar que ocupe exactamente el alto de la pantalla
    <motion.main
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* --- IMAGEN DE FONDO --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/mariposas.jpg" 
          alt="Fondo Mariposas"
          fill
          className="opacity-40"
          priority
        />
      </div>

      {/* --- Fecha (Ahora Arriba) --- */}
      <motion.div
        className="absolute top-12 z-10 font-serif text-lg tracking-[0.3em] text-brand-gold md:top-20 md:text-2xl font-bold uppercase"
        // Añadimos una sombra de texto blanca usando estilos en línea
        style={{ textShadow: "2px 2px 2px  rgba(255, 255, 255, 0.9)" }}
        variants={itemVariants}
      >
        03 de Enero de 2026
      </motion.div>

      {/* --- Texto Principal (Centrado) --- */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center h-[320px] w-[320px] md:h-[550px] md:w-[550px]"
        variants={itemVariants}
      >
        
        <span className="absolute top-[10%] left-[8%] font-script text-5xl text-brand-gold md:top-[12%] md:left-[10%] md:text-7xl drop-shadow-sm">
          Mis
        </span>

        <div className="relative">
          <h1 className="font-serif text-[11rem] font-bold leading-[0.8] text-brand-pink md:text-[18rem] drop-shadow-sm">
            XV
          </h1>
          
          <div className="absolute -right-4 top-2 w-16 md:-right-10 md:top-4 md:w-28">
             <Image
              src="/pink-bow1.png"
              alt="Moño"
              width={120}
              height={120}
            />
          </div>
        </div>
        <span className="absolute bottom-[2%] right-[8%] font-script text-6xl text-brand-gold md:bottom-[12%] md:right-[10%] md:text-8xl drop-shadow-md">
          ARY
        </span>

      </motion.div>

    </motion.main>
  );
}