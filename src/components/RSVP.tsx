"use client"; // Necesario para Framer Motion

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // 1. Importar 'Variants'

// --- Variantes de Animación ---
const sectionVariants: Variants = { // 2. Añadir el tipo 'Variants'
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2, // Animar hijos en cascada
    },
  },
};

const itemVariants: Variants = { // 3. Añadir el tipo 'Variants'
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
// -----------------------------


// Icono de Lista/Portapapeles (SVG)
const ClipboardIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <line x1="9" y1="8" x2="15" y2="8" />
  </svg>
);

export default function RSVP() {
  const WHATSAPP_NUMBER = "529331373202";
  const WHATSAPP_MESSAGE = "Hola, confirmo mi asistencia para los XV de Ari 🎀 Soy: ";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-brand-bg py-24 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <motion.p
        className="font-script text-4xl text-brand-pink md:text-5xl"
        variants={itemVariants}
      >
        ¡Nos encantaría contar con tu presencia!
      </motion.p>

      <motion.div
        className="relative mt-12 w-full max-w-lg p-4 py-12"
        variants={itemVariants}
      >
        <div className="absolute inset-x-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-brand-pink/30"></div>

        <div className="absolute -left-8 -top-8 w-24 -rotate-45 md:-left-12 md:-top-12 md:w-32">
          <Image src="/pink-bow1.png" alt="Moño" width={120} height={120} />
        </div>
        <div className="absolute -right-8 -bottom-8 w-24 rotate-[135deg] md:-right-12 md:-bottom-12 md:w-32">
          <Image src="/pink-bow1.png" alt="Moño" width={120} height={120} />
        </div>

        <div className="relative flex flex-col items-center justify-center">
          <ClipboardIcon className="h-20 w-20 text-brand-pink/70" />
          <p className="mt-4 font-serif text-lg text-foreground md:text-xl">
            TU PRESENCIA HARÁ ESTE DÍA AÚN MÁS ESPECIAL
          </p>
        </div>
      </motion.div>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 rounded-full bg-brand-pink px-12 py-4 font-serif text-2xl text-white shadow-lg transition-transform hover:scale-105"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Confirmar Asistencia
      </motion.a>

    </motion.section>
  );
}