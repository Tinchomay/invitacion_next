"use client"; // Necesario para Framer Motion

import React from 'react';
import Image from 'next/image';
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

// 1. Nuevas variantes para la foto (entrada desde la derecha)
const imageRightVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
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

export default function DressCode() {
  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-brand-bg py-24 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <motion.h2
        className="font-script text-6xl text-brand-pink md:text-7xl"
        variants={itemVariants}
      >
        Código de vestimenta
      </motion.h2>

      <motion.p
        className="mt-8 font-serif text-3xl font-bold tracking-wider text-foreground md:text-4xl"
        variants={itemVariants}
      >
        FORMAL
      </motion.p>

      <motion.div
        className="mt-8 flex items-center justify-center space-x-8"
        variants={itemVariants}
      >
        <Image
          src="/dress-icon1.png"
          alt="Vestido formal"
          width={100}
          height={100}
          className="h-24 w-24 object-contain"
        />
        <Image
          src="/suit-icon1.png"
          alt="Traje formal"
          width={100}
          height={100}
          className="h-24 w-24 object-contain"
        />
      </motion.div>

      <motion.h3
        className="mt-16 font-serif text-xl text-brand-pink md:text-2xl"
        variants={itemVariants}
      >
        COLORES RESERVADOS PARA LA QUINCEAÑERA
      </motion.h3>

      <motion.div
        className="mt-6 flex items-center justify-center space-x-4 rounded-full bg-white/50 px-8 py-4 shadow-inner"
        variants={itemVariants}
      >
        <div
          className="h-14 w-14 rounded-full border-2 border-white bg-brand-pink shadow-md"
          title="Rosa"
        ></div>
        {/* Color Dorado (de tu marca) */}
      </motion.div>

      <motion.p
        className="mt-6 font-serif text-lg text-foreground/70 md:text-xl"
        variants={itemVariants}
      >
        FAVOR DE EVITARLOS
      </motion.p>

      {/* 2. Añadir la foto aquí */}
      <motion.div
        className="relative mt-16 w-full max-w-md overflow-hidden rounded-2xl shadow-xl"
        variants={imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/foto4.jpeg" // Usamos la cuarta foto
          alt="Naomy en la roca"
          width={720}
          height={720}
          className="object-cover w-full h-auto"
        />
      </motion.div>

    </motion.section>
  );
}