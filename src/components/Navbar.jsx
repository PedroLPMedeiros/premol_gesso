
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-premol-dark/80 backdrop-blur-md border-b border-white/10 text-white">
      <div className="w-full px-6 md:px-10 py-5 flex justify-between items-center">
        
        <div className="text-xl md:text-2xl font-bold tracking-tighter uppercase">
        <a href="#"><span className="text-premol-gold font-extrabold">Prémol</span>Gesso</a>
        </div>

        <ul className="hidden md:flex gap-10 uppercase text-xs font-semibold tracking-[0.2em]">
          <li className="hover:text-premol-gold cursor-pointer transition-all"><a href="#">Início</a></li>
          <li className="hover:text-premol-gold cursor-pointer transition-all"><a href="#sobre">Sobre</a></li>
          <li className="hover:text-premol-gold cursor-pointer transition-all"><a href="#servicos">Serviços</a></li>
          <li className="hover:text-premol-gold cursor-pointer transition-all"><a href="#galeria">Galeria</a></li>
          <li className="hover:text-premol-gold cursor-pointer transition-all"><a href="#contatos">Contatos</a></li>
        </ul>
        
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-premol-dark border-b border-white/10`}>
        <ul className="flex flex-col p-6 gap-6 uppercase text-sm font-semibold tracking-widest">
          <li className="hover:text-premol-gold" onClick={() => setIsOpen(false)}><a href="#inicio">Início</a></li>
          <li className="hover:text-premol-gold" onClick={() => setIsOpen(false)}><a href="#sobre">Sobre</a></li>
          <li className="hover:text-premol-gold" onClick={() => setIsOpen(false)}><a href="#servicos">Serviços</a></li>
          <li className="hover:text-premol-gold" onClick={() => setIsOpen(false)}><a href="#galeria">Galeria</a></li>
          <li className="hover:text-premol-gold" onClick={() => setIsOpen(false)}><a href="#contatos">Contatos</a></li>
        </ul>
      </div>
    </nav>
  );
}