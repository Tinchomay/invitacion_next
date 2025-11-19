"use client"; // Necesario para Framer Motion

import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // 1. Importar 'Variants'

// Variantes para la animación de entrada
const containerVariants: Variants = { // 2. Añadir el tipo 'Variants'
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Aplica un retraso entre cada elemento hijo
    },
  },
};

const itemVariants: Variants = { // 3. Añadir el tipo 'Variants'
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
    // Usamos motion.main para animar el contenedor
    <motion.main
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden p-4 bg-brand-bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* --- Elementos Decorativos (Imágenes) --- */}
      
      <motion.div
        className="absolute left-4 top-4 w-24 md:left-10 md:top-10 md:w-40"
        variants={itemVariants}
      >
        <Image
          src="/disco-ball1.png" // Desde la carpeta /public
          alt="Bola Disco"
          width={160}
          height={160}
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute right-4 top-4 w-20 md:right-10 md:top-10 md:w-32"
        variants={itemVariants}
      >
        <Image
          src="/cherries1.png" // Desde la carpeta /public
          alt="Cerezas"
          width={140}
          height={140}
          className="object-contain"
          priority
        />
      </motion.div>

      {/* --- Texto Principal (Centrado y Superpuesto) --- */}
      
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center h-[320px] w-[320px] md:h-[550px] md:w-[550px]"
        variants={itemVariants}
      >
        
        <span className="absolute top-[10%] left-[8%] font-script text-5xl text-brand-gold md:top-[12%] md:left-[10%] md:text-7xl">
          Mis
        </span>

        <div className="relative">
          <h1 className="font-serif text-[11rem] font-bold leading-[0.8] text-brand-pink md:text-[18rem]">
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
        <span className="absolute bottom-[2%] right-[8%] font-script text-6xl text-brand-gold md:bottom-[12%] md:right-[10%] md:text-8xl">
          ARY
        </span>

      </motion.div>

      {/* --- Fecha --- */}
      <motion.div
        className="absolute bottom-12 z-10 font-serif text-sm tracking-[0.2em] text-brand-gold md:bottom-16 md:text-xl"
        variants={itemVariants}
      >
        03 DE ENERO DE 2026
      </motion.div>

    </motion.main>
  );
}