"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { slides } from "@/lib/data/images";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-10 to-pink-50 text-white flex flex-col items-center justify-center px-10">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center drop-shadow-lg text-pink-600">
        Our Sweet Moments
      </h1>
      <div className="relative w-full max-w-5xl mx-auto h-[500px] sm:h-[500px]  overflow-hidden rounded-xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              className="object-cover w-full h-full"
              sizes="(max-width: 640px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent text-white p-4 sm:p-8 flex flex-col justify-end">
              <h2 className="text-2xl sm:text-4xl font-bold mb-2">
                {slides[current].title}
              </h2>
              {/* <p className="max-w-full sm:max-w-lg text-base sm:text-lg">
                {slides[current].description}
              </p> */}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ...existing code... */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            onClick={prevSlide}
            className="text-lg sm:text-xl px-3 sm:px-5 rounded-full bg-black/40 hover:bg-pink-500/80 text-white shadow"
            aria-label="Previous"
          >
            ←
          </Button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            onClick={nextSlide}
            className="text-lg sm:text-xl px-3 sm:px-5 rounded-full bg-black/40 hover:bg-pink-500/80 text-white shadow"
            aria-label="Next"
          >
            →
          </Button>
        </div>
        {/* ...existing code... */}
      </div>
    </main>
  );
}
