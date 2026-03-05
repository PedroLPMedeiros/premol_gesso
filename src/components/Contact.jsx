import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contatos' className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* grayscale hover:grayscale-0 transition-all duration-700 */}
            <img 
              src="./mestre-obra-contact.png" 
              alt="Profissional da Prémol Gesso em ação" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-premol-gold -z-10 rounded-lg"></div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-premol-dark uppercase tracking-widest mb-4">
            Contate-Nos
          </h2>
          <p className="text-gray-600 mb-10 italic">
            Estamos prontos para transformar seu projeto em realidade. Entre em contato!
          </p>

          <div className="border-2 border-dashed border-premol-gold p-8 rounded-2xl bg-premol-light/50">
            <ul className="space-y-8">
              
              <li className="flex items-center gap-4 justify-center lg:justify-start group">
                <div className="bg-premol-dark p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-semibold text-premol-dark">(84) 98621-3268 ou (84) 98105-1856</span>
              </li>

          
              <li className="flex items-center gap-4 justify-center lg:justify-start group">
                <a 
                  href="https://wa.me/5584981051856?text=Olá! Vim pelo site e gostaria de um orçamento." 
                  target="_blank"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-green-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <span className="text-lg font-semibold text-premol-dark">
                    Falar no WhatsApp
                  </span>
                </a>
              </li>

              
              <li className="flex items-center gap-4 justify-center lg:justify-start group">
                <a href="https://www.instagram.com/premol_gesso/" target="_blank" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="bg-gradient-to-tr from-yellow-500 to-purple-600 p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                    <Instagram size={20} />
                  </div>
                  <span className="text-lg font-semibold text-premol-dark">@premol_gesso</span>
                </a>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest text-black-400 font-bold">
                Atendemos Natal e Região Metropolitana
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}