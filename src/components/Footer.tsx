import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-red-900 border-t-[16px] border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500 rounded-full mix-blend-multiply opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-700 rounded-full mix-blend-multiply opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-b-2 border-white/10 pb-12 md:pb-16 mb-8 md:mb-10 text-center md:text-left">
          
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-1 flex flex-col items-center md:items-start"
          >
            <div className="flex items-center justify-center mb-6 bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10 overflow-hidden w-20 h-20 sm:w-24 sm:h-24">
              <img 
                src="/logo_coracao_site.png" 
                alt="Escola Coração de Mãe" 
                className="w-full h-full object-cover transform scale-[1.25]"
              />
            </div>
            <p className="text-brand-100 leading-relaxed font-medium mb-8 text-sm sm:text-base max-w-xs md:max-w-none">
              A educação infantil feita com amor, onde cada criança é única e especial, se desenvolvendo com afeto, respeito e muita alegria.
            </p>
            <div className="flex flex-col space-y-3 mt-4 items-center md:items-start">
              <p className="text-white font-heading font-bold text-sm md:text-base">Nos siga para mais informações!</p>
              <motion.a whileHover={{ scale: 1.05, y: -2 }} href="https://www.instagram.com/escola_coracaodemae/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 px-6 rounded-full text-white shadow-md hover:shadow-xl transition-all border-2 border-white/20">
                <Instagram className="w-6 h-6 stroke-[2.5]" />
                <span className="font-bold tracking-wide">@escola_coracaodemae</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="inline-block relative mb-6 md:mb-8">
               <h4 className="text-xl font-heading font-black text-white relative z-10">Links Rápidos</h4>
               <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-400/40 -rotate-2 z-0"></div>
            </div>
            
            <ul className="space-y-4 font-bold text-brand-100 flex flex-col items-center md:items-start">
              <li><a href="#inicio" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-400">🎈</span> Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-300">🏫</span> Nossa Escola</a></li>
              <li><a href="#servicos" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-400">🧩</span> Diferenciais</a></li>
              <li><a href="#galeria" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-300">📸</span> Fotos</a></li>
              <li><a href="#contato" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-400">📞</span> Contato</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="inline-block relative mb-6 md:mb-8">
               <h4 className="text-xl font-heading font-black text-white relative z-10">Destaques</h4>
               <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-400/40 rotate-1 z-0"></div>
            </div>
            
            <ul className="space-y-4 font-bold text-brand-100 flex flex-col items-center md:items-start">
              <li className="flex items-center group">
                 <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">🧸</span> Educação Infantil
              </li>
              <li className="flex items-center group">
                 <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">🍼</span> Berçário Seguro
              </li>
              <li className="flex items-center group">
                 <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">🌳</span> Amplo Pátio Coberto
              </li>
              <li className="flex items-center group">
                 <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">🎵</span> Musicalização
              </li>
            </ul>
          </motion.div>
          
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-brand-200 font-bold tracking-wide text-center"
        >
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Escola de Ed. Infantil Coração de Mãe.</p>
          <p className="flex items-center">
            Feito com <span className="mx-2 text-xl text-red-500 animate-pulse">❤️</span> em Passo Fundo
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
