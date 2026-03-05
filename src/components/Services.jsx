
import React from 'react';

const listServices = [
  {
    title: "Construção do zero",
    description: "Execução completa da sua obra, do alicerce ao telhado, com foco em segurança.",
    img: "servico1.png"
  },
  {
    title: "Pintura",
    description: "Acabamento profissional com técnicas modernas de pintura interna e externa.",
    img: "servico2.png"
  },
  {
    title: "Aplicação de Gesso",
    description: "Forros, sancas e paredes em drywall com o padrão de sofisticação Prémol.",
    img: "servico3.png"
  }, 
  {
    title: "Entrega de materiais",
    description: "Fornecimento de materiais de construção de alta qualidade, entregues diretamente no seu canteiro de obras.",
    img: "servico4.png"
  }
];

export default function Services() {
  return (
    <section id='servicos' className="bg-white py-24 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-[0.3em] mb-16">
        Nossos Serviços
      </h2>

      <div className="
        flex 
        overflow-x-auto 
        snap-x 
        snap-mandatory 
        scrollbar-hide 
        gap-8 
        pb-8
        lg:flex-wrap 
        lg:justify-center 
        lg:gap-24 
        lg:overflow-visible
      ">
        {listServices.map((service, index) => (
          <div 
            key={index} 
            className="
              min-w-[80vw] 
              snap-center 
              flex 
              flex-col 
              items-center 
              group
              md:min-w-[280px] 
              md:max-w-[280px]
            "
          >
          
            <div className="w-64 h-64 rounded-full border border-gray-300 overflow-hidden mb-8 transition-transform duration-500 group-hover:scale-105 shadow-sm bg-gray-100">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed italic px-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {listServices.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
        ))}
      </div>
    </section>
  );
}