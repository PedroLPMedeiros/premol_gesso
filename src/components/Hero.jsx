import React from 'react';

export default function Hero() {
  return (
    <section id='inicio' className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/imagem-hero.png" 
          alt="Obra da Prémol Gesso" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tight border-b-4 border-white inline-block pb-4 mb-6">
          Do Alicerce ao Acabamento
        </h1>
      
        <p className="text-lg md:text-2xl font-light uppercase tracking-[0.5em]">
          Perfeição em cada etapa
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-1 h-12 border-l border-white/50 mx-auto"></div>
      </div>
    </section>
  );
}