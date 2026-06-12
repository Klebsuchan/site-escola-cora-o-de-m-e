import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-play-green/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-play-green rounded-full mix-blend-multiply opacity-20 blur-[80px] transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[3rem] p-6 sm:p-8 md:p-12 border-[6px] border-white shadow-xl relative overflow-hidden">
          {/* Subtle playful shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-play-yellow rounded-full mix-blend-multiply opacity-30 blur-xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4 inline-flex items-center bg-white text-black px-6 py-2 rounded-full text-sm font-heading font-black uppercase tracking-widest shadow-sm transform -rotate-2 border-2 border-play-green/30">
                 <span className="text-xl mr-2">🎈</span> Venha Brincar!
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-gray-900 mb-4 sm:mb-6 mt-2 sm:mt-4 leading-tight">
                Visite a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Nossa Escola</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 sm:mb-10 font-medium leading-relaxed">
                Estamos de portas abertas para receber você e seu pequeno com muito amor. Venha tomar um café com a gente ou mande uma mensagem e agende a sua visita guiada!
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center group bg-white p-3 sm:p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-100 hover:border-brand-200 transition-all cursor-default relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-50 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 z-0"></div>
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-sm">
                    <MapPin className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="ml-5 relative z-10">
                    <h4 className="text-lg font-heading font-bold text-gray-900">Endereço</h4>
                    <p className="text-gray-600 font-medium text-sm mt-1">
                      R. Uruguai, 1336 - Centro, Passo Fundo - RS, 99010-111
                    </p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center group bg-white p-3 sm:p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-100 hover:border-play-blue/50 transition-all cursor-default relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-play-blue/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 z-0"></div>
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-play-blue/20 text-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-[15deg] transition-transform shadow-sm">
                    <Phone className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="ml-5 relative z-10">
                    <h4 className="text-lg font-heading font-bold text-gray-900">Conversar com a gente</h4>
                    <p className="text-gray-600 font-medium text-sm mt-1">
                      Fixo/Whats: <a href="https://api.whatsapp.com/send/?phone=5554991163410&text&type=phone_number&app_absent=0&utm_source=ig" className="text-brand-600 hover:text-brand-500 underline font-bold" target="_blank" rel="noreferrer">(54) 99116-3410</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex items-center group bg-white p-3 sm:p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-100 hover:border-play-yellow/50 transition-all cursor-default relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-play-yellow/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500 z-0"></div>
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-play-yellow/30 text-amber-600 rounded-2xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform shadow-sm">
                    <Clock className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="ml-5 relative z-10">
                    <h4 className="text-lg font-heading font-bold text-gray-900">Nossos Horários</h4>
                    <p className="text-gray-600 font-medium text-sm mt-1 mb-1 leading-relaxed">
                      Segunda a Sexta-feira: 06h30 às 19h30
                    </p>
                    <span className="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm mt-1">Sábado e Domingo: Fechado</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] border-[8px] sm:border-[12px] border-white bg-gray-100 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 mt-6 lg:mt-0"
            >
              {/* Embedded Google Map Placeholder */}
              <iframe 
                title="Mapa de Localização Escola Coração de Mãe Passo Fundo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.719717529688!2d-52.41160372338002!3d-28.261899149472314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2bf8b3f1737e5%3A0xe5482e9d29026364!2sR.%20Uruguai%2C%201336%20-%20Centro%2C%20Passo%20Fundo%20-%20RS%2C%2099010-111!5e0!3m2!1spt-BR!2sbr!4v1716912345678!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
