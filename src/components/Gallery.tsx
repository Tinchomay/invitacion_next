"use client"; // Necesario para Framer Motion

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion'; // 1. Importar 'Variants'

// Variantes para la animación de la sección (Fade-in y Slide-up)
const sectionVariants: Variants = { // 2. Añadir el tipo 'Variants'
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

// Variantes para el contenedor de la cuadrícula (stagger)
const gridVariants: Variants = { // 3. Añadir el tipo 'Variants'
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Un pequeño retraso para cada foto
    },
  },
};

// Variantes para cada item de la cuadrícula
const photoVariants: Variants = { // 4. Añadir el tipo 'Variants'
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Componente PhotoFrame ahora es un 'motion.div'
const PhotoFrame = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <motion.div
    className={`relative h-full w-full transform rounded-lg bg-white p-2 shadow-lg transition-transform hover:scale-105 ${className}`}
    variants={photoVariants} // Aplicamos la animación a cada foto
  >
    <div className="relative aspect-square w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        className="object-cover rounded-md"
      />
    </div>
  </motion.div>
);

export default function Gallery() {
  return (
    <motion.section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-brand-bg py-24 px-6 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Se activa al hacer scroll
      viewport={{ once: true, amount: 0.25 }} // Se anima una vez, al ver el 25%
    >
      
      <h2 className="font-script text-6xl text-brand-pink md:text-7xl">
        Un Momento Especial
      </h2>

      <motion.div
        className="mt-12 grid w-full max-w-5xl auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4"
        variants={gridVariants} // Aplicamos el stagger al contenedor
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        
        <PhotoFrame
          src="/foto1.jpeg"
          alt="Ary Foto 1"
          className="col-span-2 row-span-2"
        />
        
        <PhotoFrame
          src="/foto2.jpeg"
          alt="Ary Foto 2"
          className="col-span-1"
        />
        
        <PhotoFrame
          src="/foto3.jpeg"
          alt="Ary Foto 3"
          className="col-span-1"
        />
        
        <PhotoFrame
          src="/foto4.jpeg"
          alt="Ary Foto 4"
          className="col-span-1"
        />
        
        <PhotoFrame
          src="/foto5.jpeg"
          alt="Ary Foto 5"
          className="col-span-1"
        />
      </motion.div>
    </motion.section>
  );
}