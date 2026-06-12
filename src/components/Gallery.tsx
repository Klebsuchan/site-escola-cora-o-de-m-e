import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  { id: 1, src: '/052679a3-01fa-4042-a8d2-8516a45dac44.jpeg', alt: 'Visita Inesperada do Homem-Aranha', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/082989e7-01fd-49d2-92ec-bdae33b6b91f.jpeg', alt: 'Sorrisos e Pipoca na Festa', span: 'col-span-1' },
  { id: 3, src: '/0f721d8b-5db2-48ad-9f62-e252695db107.jpeg', alt: 'Aventuras com a Turma', span: 'col-span-1' },
  { id: 4, src: '/2542e32b-5f68-4e84-ab57-40a96eecdd5f.jpeg', alt: 'Nossa Diretora / Proprietária', span: 'col-span-1' },
  { id: 5, src: '/33c51c74-1b43-4c11-92d8-857f88fe04bf.jpeg', alt: 'Apreciadores de Chimarrão', span: 'col-span-1 row-span-2' },
  { id: 6, src: '/36fef122-9a9c-4eb5-bade-dd540e01a634.jpeg', alt: 'Aventura na Lama', span: 'col-span-1' },
  { id: 7, src: '/3967dced-1a94-4ac2-93f1-6ad2628c6fc1.jpeg', alt: 'Nossos Mascotes Fofos', span: 'col-span-2' },
  { id: 8, src: '/41f8bda6-37b0-48d5-ae3b-74c380fb488e.jpeg', alt: 'Abraços com os Mascotes', span: 'col-span-1' },
  { id: 9, src: '/43fb7372-6b5f-4496-98d5-83b5fbb4fc38.jpeg', alt: 'União e Alegria', span: 'col-span-1' },
  { id: 10, src: '/5a7edb73-f4d9-4fd3-8c68-f553e9a2be75.jpeg', alt: 'Nosso Espaço Mágico', span: 'col-span-1' },
  { id: 11, src: '/61cec506-9c39-4bf9-a582-cdb0c88f7dd3.jpeg', alt: 'Curiosidade na Árvore', span: 'col-span-1 row-span-2' },
  { id: 12, src: '/6cc404c7-ac01-4186-959c-f84cf3f07ad7.jpeg', alt: 'Na Nossa Comunidade', span: 'col-span-1' },
  { id: 13, src: '/9693224f-53a5-4a8d-a98d-cbeb9eb03dcc.jpeg', alt: 'Homem-Aranha de Perto!', span: 'col-span-1' },
  { id: 14, src: '/ac1d72a1-c43c-4393-a063-6b4aaf1416af.jpeg', alt: 'Carinho ao Ar Livre', span: 'col-span-1' },
  { id: 15, src: '/cfc4e46b-8f10-48aa-ad14-f90529dd490f.jpeg', alt: 'Parquinho Vibrante', span: 'col-span-1' },
  { id: 16, src: '/IMG_3733.jpeg', alt: 'Turma do Berçário II', span: 'col-span-1' },
  { id: 17, src: '/IMG_3736.jpeg', alt: 'Visita da Emília', span: 'col-span-1' },
  { id: 18, src: '/coordenadora.jpeg', alt: 'Nossa Coordenadora', span: 'col-span-1' }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Array of random rotations for polaroid effect
  const rotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-4', 'rotate-4'];
  const colors = ['bg-play-yellow/20', 'bg-play-blue/20', 'bg-play-green/20', 'bg-play-purple/20', 'bg-brand-50'];

  return (
    <motion.section 
      id="galeria" 
      className="py-24 bg-repeat relative overflow-hidden bg-gradient-to-r from-gray-900 to-red-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAxIDEwIDEwQTEwIDEwIDAgMCAxIDEyIDJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] mix-blend-overlay opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-12 sm:mb-16"
        >
          <div className="mb-4 inline-block bg-white/10 text-white border-2 border-white/20 px-6 py-2 rounded-full text-sm font-heading font-black uppercase tracking-widest shadow-sm transform -rotate-1 backdrop-blur-sm">
             Nossos Momentos
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-6">
            Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Fotos</span>
          </h2>
          <p className="text-brand-100 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Um pouco da nossa estrutura, salas de aula e do carinho com que tratamos nossas crianças em suas atividades diárias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-0 auto-rows-[280px]">
          {images.map((image, index) => {
             const rot = rotations[index % rotations.length];
             const bg = colors[index % colors.length];
             
             return (
               <motion.div
                 key={image.id}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                 whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                 className={`relative p-3 pb-8 sm:pb-10 bg-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.1)] cursor-pointer group transform ${rot} transition-all duration-300 border border-gray-100 ${image.span === 'col-span-2' || image.span === 'col-span-2 row-span-2' ? 'sm:col-span-2 sm:row-span-2 auto-rows-[auto]' : ''}`}
                 onClick={() => setSelectedImage(image.src)}
               >
                 {/* Tape graphic top center */}
                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm z-20 rotate-2 opacity-80"></div>
                 
                 <div className={`w-full h-full rounded bg-gray-100 overflow-hidden relative ${bg}`}>
                   <img
                     src={image.src}
                     alt={image.alt}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-normal"
                   />
                   <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/20 transition-colors duration-300 flex items-center justify-center">
                     <span className="text-white font-bold text-lg tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-brand-600/80 px-4 py-2 rounded-full backdrop-blur-sm">Ver foto</span>
                   </div>
                 </div>
                 <div className="absolute bottom-2 sm:bottom-3 text-center w-full left-0 px-2">
                    <span className="font-heading font-bold text-gray-700 text-sm sm:text-base">{image.alt}</span>
                 </div>
               </motion.div>
             );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-900/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-white p-3 bg-brand-600 hover:bg-brand-500 rounded-full transition-colors shadow-lg"
            >
              <X size={28} />
            </button>
            <motion.div
               initial={{ scale: 0.9, y: 20, rotate: -2 }}
               animate={{ scale: 1, y: 0, rotate: 0 }}
               exit={{ scale: 0.9, y: 20, rotate: 2 }}
               className="p-4 sm:p-6 bg-white rounded-xl shadow-2xl relative"
               onClick={(e) => e.stopPropagation()}
            >
               <img
                 src={selectedImage}
                 alt="Ampliada"
                 className="max-w-full max-h-[85vh] object-contain rounded border-2 border-gray-100"
               />
               {/* Tape graphic top center */}
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm z-20 rotate-1 opacity-90"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
