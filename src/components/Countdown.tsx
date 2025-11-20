"use client"; // ¡Muy importante para que el contador funcione!

import { useState, useEffect } from 'react';
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

// 1. Nuevas variantes para la foto (entrada desde la izquierda)
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


// Define la fecha y hora objetivo de la fiesta
const targetDate = new Date('2026-01-03T20:00:00'); // Fecha Confirmada

export default function Countdown() {
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []); 

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <motion.section
      className="flex w-full flex-col items-center justify-center bg-brand-bg py-20 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      
      <motion.div
        className="relative w-full max-w-lg rounded-3xl border-2 border-brand-pink/50 p-4 shadow-lg"
        variants={itemVariants}
      >
        <div className="relative rounded-2xl border-2 border-brand-pink/50 p-6">
          <p className="text-center font-serif text-lg text-gray-700 md:text-xl">
            La vida está hecha de momentos inolvidables, y uno de los más especiales está por llegar. Mis XV años son un sueño que quiero compartir contigo.
          </p>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-bg px-2 font-serif text-2xl text-brand-pink">
            &#x2766;
          </span>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-bg px-2 font-serif text-2xl text-brand-pink">
            &#x2766;
          </span>
        </div>
      </motion.div>

      <motion.h2
        className="mt-16 font-script text-5xl text-brand-pink md:text-6xl"
        variants={itemVariants}
      >
        ¡Tan solo faltan!
      </motion.h2>

      <motion.div
        className="relative mt-8 flex w-full max-w-lg items-center justify-center space-x-2 md:space-x-4"
        variants={itemVariants}
      >
        
        {/* DÍAS */}
        <div className="flex flex-col items-center p-2">
          <span className="font-serif text-5xl font-bold text-brand-pink md:text-7xl">
            {timeLeft.days}
          </span>
          <span className="mt-1 font-serif text-xs text-brand-gold md:text-sm">DÍAS</span>
        </div>
        
        <span className="font-serif text-4xl text-brand-pink md:text-6xl">:</span>

        {/* HORAS */}
        <div className="flex flex-col items-center p-2">
          <span className="font-serif text-5xl font-bold text-brand-pink md:text-7xl">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="mt-1 font-serif text-xs text-brand-gold md:text-sm">HORAS</span>
        </div>

        <span className="font-serif text-4xl text-brand-pink md:text-6xl">:</span>

        {/* MINUTOS */}
        <div className="flex flex-col items-center p-2">
          <span className="font-serif text-5xl font-bold text-brand-pink md:text-7xl">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="mt-1 font-serif text-xs text-brand-gold md:text-sm">MINUTOS</span>
        </div>

        <span className="font-serif text-4xl text-brand-pink md:text-6xl">:</span>

        {/* SEGUNDOS */}
        <div className="flex flex-col items-center p-2">
          <span className="font-serif text-5xl font-bold text-brand-pink md:text-7xl">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="mt-1 font-serif text-xs text-brand-gold md:text-sm">SEGUNDOS</span>
        </div>

        {/* Adorno */}
        <div className="absolute -right-2 -top-2 w-10 md:-right-4 md:w-14">
          <Image
            src="/pink-bow1.png"
            alt="Adorno"
            width={60}
            height={60}
          />
        </div>
      </motion.div>

      <motion.p
        className="mt-12 font-serif text-xl tracking-[0.2em] text-brand-gold md:text-2xl text-center"
        variants={itemVariants}
      >
        PARA ESTE DIA TAN ESPECIAL
      </motion.p>

      {/* 2. Añadir la foto aquí */}
      <motion.div
        className="relative mt-16 w-full max-w-md overflow-hidden rounded-2xl shadow-xl"
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/foto5.jpeg" // Usamos la primera foto
          alt="Ary en verde"
          width={720}
          height={720}
          className="object-cover w-full h-auto"
        />
      </motion.div>

    </motion.section>
  );
}