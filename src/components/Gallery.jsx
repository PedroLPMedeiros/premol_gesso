import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Instagram } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "imagem1.jpeg", alt: "Acabamento em Gesso Sala" },
  { id: 2, src: "imagem2.jpeg", alt: "Construção Residencial" },
  { id: 3, src: "imagem3.jpeg", alt: "Pintura Externa" },
];

export default function Gallery() {
  return (
    <section id='galeria' className="bg-premol-dark text-white py-24 px-6 md:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.4em] mb-4">
          Galeria
        </h2>
        <p className="text-gray-400 mb-12 italic text-sm md:text-base">
          Confira imagens de alguns de nossos serviços mais recentes!
        </p>

        <style>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
        }
      `}</style>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }} 
          autoplay={{ delay: 4000, disableOnInteraction: false }} 
          style={{
            "--swiper-theme-color": "black",
          }}
          className="rounded-xl overflow-hidden shadow-2xl border border-white/5" 
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-full h-[250px] md:h-[500px]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mt-6 text-white-500 text-xs font-bold md:hidden animate-pulse">
           ← Deslize para o lado para ver mais fotos →
        </p>

        <div className="mt-16 bg-white/5 p-8 rounded-2xl border border-white/5">
          <p className="mb-6">Quer ver mais de nossos serviços?</p>
          <a 
            href="https://instagram.com/premol_gesso" 
            target="_blank" 
            rel='noopener noreferrer'
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white transition-all duration-300 shadow-xl hover:scale-105 hover:shadow-instagram-glow bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
          >
            Siga-nos no Instagram
            <Instagram size={24} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}