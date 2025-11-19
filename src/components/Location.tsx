"use client"; // Necesario para Framer Motion

import React from 'react';
import Image from 'next/image'; // 1. Importar Image
import { motion, Variants } from 'framer-motion';

// --- Variantes de Animación ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Animar Misa y luego Evento
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 2. Nuevas variantes para la foto (entrada desde la izquierda)
const imageLeftVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
// -----------------------------


// Icono 1: Iglesia (SVG)
const ChurchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4L4 8v12h16V8l-8-4z" />
    <path d="M12 22V12" />
    <path d="M16 12v10" />
    <path d="M8 12v10" />
    <path d="M12 12H8" />
    <path d="M12 12h4" />
    <path d="M10 6h4" />
    <path d="M12 4V2" />
  </svg>
);

// Icono 2: Bola Disco (SVG)
const DiscoIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M22 12h-4" />
    <path d="M6 12H2" />
    <path d="M19.07 4.93l-2.83 2.83" />
    <path d="M7.76 16.24l-2.83 2.83" />
    <path d="M19.07 19.07l-2.83-2.83" />
    <path d="M7.76 7.76l-2.83-2.83" />
    <path d="M12 12l-4 4" />
    <path d="M12 12l4 4" />
    <path d="M12 12l-4-4" />
    <path d="M12 12l4-4" />
  </svg>
);

export default function Location() {
  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-brand-bg py-24 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <h2 className="font-script text-6xl text-brand-pink md:text-7xl">
        Recepción
      </h2>

      <p className="mt-8 font-serif text-xl font-bold tracking-wider text-foreground md:text-2xl">
        SÁBADO 03 DE ENERO DE 2026
      </p>

      <motion.div
        className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-16 md:grid-cols-2"
        variants={gridVariants}
      >
        
        {/* --- Bloque 1: Misa --- */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <ChurchIcon className="size-15 text-brand-pink" />
          <h3 className="mt-6 font-serif text-3xl font-bold text-brand-gold">
            CEREMONIA
          </h3>
          <p className="mt-4 font-serif text-xl text-foreground">
            Parroquia "San Marcos"
          </p>
          <p className="mt-4 font-serif text-3xl font-bold text-brand-pink">
            7:00 P.M.
          </p>
          <a
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 rounded-full bg-brand-pink px-10 py-3 font-serif text-lg text-white shadow-lg transition-transform hover:scale-105"
          >
            VER UBICACIÓN
          </a>
        </motion.div>

        {/* --- Bloque 2: Evento --- */}
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <DiscoIcon className="size-15 text-brand-pink" />
          <h3 className="mt-6 font-serif text-3xl font-bold text-brand-gold">
            RECEPCIÓN
          </h3>
          <p className="mt-4 font-serif text-xl text-foreground">
            Guarida del Zorro
          </p>
          <p className="mt-4 font-serif text-3xl font-bold text-brand-pink">
            8:00 P.M.
          </p>
          <a
            href="https://maps.google.com" // <-- Pon el link de Google Maps aquí
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 rounded-full bg-brand-pink px-10 py-3 font-serif text-lg text-white shadow-lg transition-transform hover:scale-105"
          >
            VER UBICACIÓN
          </a>
        </motion.div>
      </motion.div>

      {/* 3. Añadir la foto aquí */}
      <motion.div
        className="relative mt-16 w-full max-w-md overflow-hidden rounded-2xl shadow-xl"
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/foto3.jpeg" // Usamos la tercera foto
          alt="Naomy en verde"
          width={720}
          height={720}
          className="object-cover w-full h-auto"
        />
      </motion.div>

    </motion.section>
  );
}