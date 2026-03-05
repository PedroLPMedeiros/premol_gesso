import React from 'react';

export default function About() {
  return (
    <section id='sobre' className="bg-premol-dark text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.3em] mb-16">
          A Prémol Gesso
        </h2>

        {/* <div className="mb-12">
          <img 
            src="/logo-ipsum.png" 
            alt="Logo Prémol Gesso" 
            className="h-24 md:h-18 w-auto object-contain"
          />
        </div> */}

        <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
          <p>
            Com foco na excelência da construção civil, a Prémol Gesso nasceu para garantir um serviço de alta qualidade, desde o alicerce até o acabamento. 
            Nossa missão é transformar projetos em realidade, entregando obras seguras, duráveis e esteticamente impecáveis.
          </p>
          <p>
            Acreditamos que uma obra vai além de tijolos e argamassa; trata-se de realizar projetos com segurança e acabamento que reflete a identidade de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}