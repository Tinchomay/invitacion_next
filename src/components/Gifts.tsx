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
      staggerChildren: 0.2,
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


// Icono de Regalo (SVG)
const GiftIcon = ({ className }: { className?: string }) => (
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
    <path d="M20 12v10H4V12" /> {/* Caja de abajo */}
    <path d="M20 7H4v5h16V7z" /> {/* Tapa */}
    <path d="M12 22V7" /> {/* Listón vertical */}
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C10 2 12 4 12 7z" /> {/* Lazo izquierdo */}
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C14 2 12 4 12 7z" /> {/* Lazo derecho */}
  </svg>
);

export default function Gifts() {
  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-brand-bg py-24 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <motion.div variants={itemVariants}>
        <GiftIcon className="h-20 w-20 text-brand-pink" />
      </motion.div>

      <motion.p
        className="mt-8 max-w-lg font-serif text-xl text-foreground md:text-2xl"
        variants={itemVariants}
      >
        Lo más importante para mí es que disfrutes este día tan especial. Si deseas hacerme un regalo, aquí tienes una opción:
      </motion.p>

      <motion.p
        className="mt-6 font-serif text-2xl font-bold tracking-wider text-brand-gold md:text-3xl"
        variants={itemVariants}
      >
        LLUVIA DE SOBRES
      </motion.p>

      {/* 3. Añadir la foto aquí */}
      {/* <motion.div
        className="relative mt-16 w-full max-w-md overflow-hidden rounded-2xl shadow-xl"
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/foto1.jpeg"
          alt="Naomy sentada"
          width={720}
          height={720}
          className="object-cover w-full h-auto"
        />
      </motion.div> */}
      
      <motion.div
         className="mt-40 flex flex-col items-center gap-2"
         variants={itemVariants}
      >
          <p className="max-w-lg font-serif text-xl text-foreground md:text-2xl italic">
            ¡Gracias por ser parte de uno de los mejores días de mi vida!
          </p>

          <p className="mt-8 font-script text-4xl text-brand-pink md:text-5xl">
            Con cariño,
          </p>
          <p className="font-script text-6xl text-brand-gold md:text-7xl">
            Ary
          </p>
      </motion.div>

    </motion.section>
  );
}