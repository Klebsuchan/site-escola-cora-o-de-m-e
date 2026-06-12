/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Values from './components/Values';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Uniforms from './components/Uniforms';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        <AboutUs />
        <Values />
        <Methodology />

        {/* Playful About Section */}
        <section id="sobre" className="py-24 relative overflow-hidden bg-gradient-to-r from-gray-900 to-red-900 rounded-[3rem] my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
            {/* Soft decorative shapes */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-red-400 rounded-full mix-blend-multiply opacity-20 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-600 rounded-full mix-blend-multiply opacity-20 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-200 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="text-center lg:text-left">
                  <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-heading px-5 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transform -rotate-3 hover:rotate-0 transition-transform">
                    <span className="text-xl">🎈</span> O Propósito
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
                     Extensão do <br className="hidden sm:block" />
                     <span className="text-brand-300 relative inline-block">
                       seu lar.
                       <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-400/60 object-none" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 25 20, 50 10 T 100 10" stroke="currentColor" strokeWidth="8" fill="transparent"/></svg>
                     </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-100 leading-relaxed font-semibold mb-4 sm:mb-6">
                    A Escola Coração de Mãe funciona como uma extensão do seu lar, unindo carinho e desenvolvimento cognitivo para a primeira infância.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8 mb-6 sm:mb-8 text-white">
                    <div className="flex flex-col gap-2 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                      <span className="text-3xl">🏡</span>
                      <span className="font-bold">Ambiente<br/>Aconchegante</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                      <span className="text-3xl">🛡️</span>
                      <span className="font-bold">Segurança<br/>Total</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                      <span className="text-3xl">🌟</span>
                      <span className="font-bold">Foco na<br/>Autonomia</span>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                      <span className="text-3xl">👩‍🏫</span>
                      <span className="font-bold">Professores<br/>Especializados</span>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center mt-10 lg:mt-0">
                  <div className="absolute inset-0 bg-brand-400 rounded-full transform rotate-3 scale-90 opacity-20 blur-2xl z-0"></div>
                  
                  {/* Playful Image Frame */}
                  <div className="relative z-10 w-[280px] h-[340px] sm:w-[380px] sm:h-[460px] md:w-[420px] md:h-[500px] border-[12px] border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] rounded-tl-[80px] rounded-br-[80px] rounded-tr-[30px] rounded-bl-[30px] overflow-hidden group transform hover:rotate-2 transition-all duration-500">
                    <img 
                      src="/IMG_3735.jpeg" 
                      alt="Crianças aprendendo e se divertindo" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="bg-white/10 backdrop-blur-md border-[3px] border-white/20 p-3 sm:p-4 rounded-3xl text-center text-white shadow-xl transform group-hover:-translate-y-2 transition-all">
                        <div className="text-3xl sm:text-4xl font-heading font-black mb-1">+500</div>
                        <div className="text-gray-300 font-bold text-xs uppercase tracking-wider">Famílias Satisfeitas</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 text-6xl transform rotate-12 drop-shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>🌟</div>
                  <div className="absolute -bottom-10 -left-6 text-6xl transform -rotate-12 drop-shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>🪁</div>
                </div>
              </div>
            </motion.div>
        </section>

        <Services />
        <Uniforms />
        <Gallery />
        <Testimonials />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}
