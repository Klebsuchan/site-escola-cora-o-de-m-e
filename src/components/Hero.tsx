import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 lg:pt-36 lg:pb-32 relative overflow-hidden bg-[#fafafa]">
      {/* Playful Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100 rounded-full mix-blend-multiply opacity-70 blur-[80px] z-0"></div>
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-play-yellow rounded-full mix-blend-multiply opacity-50 blur-[60px] z-0"></div>
      
      {/* Decorative SVG Shapes */}
      <svg className="absolute hidden lg:block bottom-10 left-10 w-24 h-24 text-accent-400 opacity-20 animate-spin-slow" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"/></svg>
      <svg className="absolute top-32 lg:top-40 right-10 lg:right-[45%] w-16 h-16 text-play-blue opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} viewBox="0 0 100 100" fill="currentColor"><circle cx="50" cy="50" r="30" /></svg>
      <svg className="absolute bottom-40 right-20 w-20 h-20 text-play-green opacity-30 animate-pulse" viewBox="0 0 100 100" fill="currentColor"><rect x="25" y="25" width="50" height="50" rx="10" transform="rotate(45 50 50)" /></svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left z-20"
          >
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.6 }}
               className="mb-6 inline-flex items-center bg-white text-brand-600 px-5 py-2 rounded-full text-sm font-heading font-bold shadow-[0_4px_0_0_#fecaca] border-2 border-brand-100 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <span className="text-xl mr-2 animate-wiggle">🧸</span> Aprender brincando é mais legal!
            </motion.div>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-gray-900 leading-[1.1] mb-6"
            >
              A melhor escola de<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">
                educação infantil
              </span><br/> em Passo Fundo.
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Educação de excelência com o acolhimento de um coração de mãe. Na Coração de Mãe oferecemos um espaço acolhedor, atendimento humanizado e os melhores educadores para garantir o desenvolvimento e a felicidade do seu filho.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-heading"
            >
              <a href="https://api.whatsapp.com/send/?phone=5554991163410&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-brand-500 text-white hover:bg-brand-600 px-8 py-4 rounded-full font-bold shadow-[0_6px_0_0_#b91c1c] active:shadow-none active:translate-y-[6px] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_#b91c1c] transition-all text-center text-lg flex justify-center items-center gap-2">
                Agendar uma Visita <span className="text-2xl">👩‍🏫</span>
              </a>
              <a href="#servicos" className="w-full sm:w-auto bg-white text-brand-600 hover:bg-brand-50 border-4 border-brand-100 px-8 py-3.5 rounded-full font-bold transition-all text-center text-lg hover:-translate-y-1 hover:shadow-lg">
                Nossa Escola
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:w-1/2 relative flex flex-col gap-4 sm:gap-6 mt-10 lg:mt-0 w-full"
          >
            {/* Main Video Box */}
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[380px] z-10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-xl border-[6px] sm:border-[10px] border-white bg-white hover:-translate-y-2 transition-transform duration-500">
              <video 
                src="/ae9085c2d2b6419cb0bb9a1129140b2f.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover scale-[1.02]"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
              {/* Cute Child Image */}
              <div className="w-full h-[160px] sm:h-[220px] lg:h-[240px] z-20 rounded-[2rem] overflow-hidden shadow-lg border-[6px] sm:border-[10px] border-white bg-white hover:-translate-y-2 transition-transform duration-500 group">
                <img 
                  src="/IMG_3734.jpeg" 
                  alt="Criança brincando na escola" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Bento box info */}
              <div className="w-full h-[160px] sm:h-[220px] lg:h-[240px] z-20 rounded-[2rem] overflow-hidden shadow-lg border-[6px] sm:border-[10px] border-white bg-play-yellow/20 hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-4">🎈</div>
                <h3 className="font-heading font-bold text-gray-800 text-lg sm:text-xl">Alegria e Afeto</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block mt-2">Um ambiente preparado para o desenvolvimento infantil</p>
              </div>
            </div>

            {/* Floating decoration elements */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] -left-2 lg:-left-6 z-30 bg-white p-3 rounded-full shadow-lg border-2 border-brand-100"
            >
              <span className="text-4xl block">🎨</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }} 
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 right-8 lg:right-1/4 z-30 bg-white p-3 rounded-full shadow-lg border-2 border-play-blue"
            >
              <span className="text-3xl block">🌈</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Cute Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-1">
        <svg fill="#ffffff" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 lg:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.1,188.75,99.43,234.34,87,278.43,69.57,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
