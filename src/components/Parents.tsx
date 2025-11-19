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

// Contenedor para los grupos de texto
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Animar cada grupo de texto
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// 2. Nuevas variantes para la foto (entrada desde la derecha)
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

export default function Parents() {
  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-brand-bg py-24 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <motion.div
        className="z-10 flex flex-col items-center"
        variants={containerVariants}
      >
        
        <motion.div variants={itemVariants}>
          <h2 className="font-script text-6xl text-brand-pink md:text-7xl">
            Quinceañera
          </h2>
          <p className="mt-4 font-serif text-xl font-bold tracking-wider text-foreground md:text-2xl">
            ARY GUADALUPE HOYOS PERALTA
          </p>
        </motion.div>

        <motion.p
          className="mt-12 font-serif text-lg text-brand-pink md:text-xl"
          variants={itemVariants}
        >
          YO JUNTO CON
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-6">
          <h3 className="font-script text-5xl text-brand-pink md:text-6xl">
            Mis Padres
          </h3>
          <div className="mt-4 font-serif text-xl text-foreground md:text-2xl">
            <p>UBALDO BALDEMAR HOYOS FUENTES</p>
            <p className="my-1 text-lg">E</p>
            <p>IVETT PERALTA PÈREZ</p>
          </div>
        </motion.div>

        {/* 3. Añadir la foto aquí */}
        <motion.div
          className="relative mt-16 w-full max-w-md overflow-hidden rounded-2xl shadow-xl"
          variants={imageRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/foto2.jpeg" // Usamos la segunda foto
            alt="Naomy en el bosque"
            width={720}
            height={720}
            className="object-cover w-full h-auto"
          />
        </motion.div>


        <motion.p
          className="mt-12 max-w-md font-serif text-lg text-brand-pink md:text-xl"
          variants={itemVariants}
        >
          ME ACOMPAÑAN EN ESTE GRAN DIA, JUNTO A
        </motion.p>

        <motion.div variants={itemVariants} className="mt-6">
          <h3 className="font-script text-5xl text-brand-pink md:text-6xl">
            Mis Padrinos
          </h3>
          <div className="mt-4 font-serif text-xl text-foreground md:text-2xl">
            <p>JUAN PABLO SORIANO GARZA</p>
            <p className="my-1 text-lg">E</p>
            <p>ISABEL MEZQUIDA ROCHA</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="font-script text-5xl text-brand-pink md:text-6xl">
            Mis Padrinos de Brindis
          </h3>
          <div className="mt-4 font-serif text-xl text-foreground md:text-2xl">
            <p>ERICK GUIOCHIN VICENCIO</p>
            <p className="my-1 text-lg">Y</p>
            <p>EVELYN HERNÁNDEZ PÉREZ</p>
          </div>
        </motion.div>

        <motion.p
          className="mt-12 max-w-md font-serif text-lg text-brand-pink md:text-xl"
          variants={itemVariants}
        >
          QUIENES HAN ACEPTADO SER PARTE DE ESTA NUEVA ETAPA EN MI VIDA
        </motion.p>

      </motion.div>
    </motion.section>
  );
}