import React, { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const policies = {
  terms: {
    title: 'Termos de Uso',
    content: 'Este é o site oficial da Escola de Educação Infantil Coração de Mãe. Ao acessar e utilizar este site, você concorda com os nossos Termos de Uso. O conteúdo, logotipos e marca "Coração de Mãe" são de propriedade exclusiva da escola. A utilização não autorizada do conteúdo deste site é proibida e sujeita às penalidades da lei aplicável.'
  },
  privacy: {
    title: 'Política de Privacidade',
    content: 'A sua privacidade é extremamente importante para nós. A Escola Coração de Mãe se compromete a não compartilhar suas informações pessoais com terceiros não autorizados. Os dados fornecidos através de canais de contato (como WhatsApp) são utilizados exclusivamente para o atendimento às famílias, dúvidas e agendamento de visitas.'
  },
  cookies: {
    title: 'Política de Cookies',
    content: 'Utilizamos cookies essenciais para garantir o funcionamento do site e acompanhar métricas de acesso de forma anônima, a fim de melhorar sempre a sua experiência em nossa plataforma. Não utilizamos cookies para rastreamento invasivo ou comercialização de dados.'
  }
};

export default function Footer() {
  const [selectedPolicy, setSelectedPolicy] = useState<{ title: string; content: string } | null>(null);

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
              <motion.a whileHover={{ scale: 1.05, y: -2 }} href="https://www.instagram.com/escola_coracaodemae?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-3 px-6 rounded-full text-white shadow-md hover:shadow-xl transition-all border-2 border-white/20">
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
              <li><a href="#quem-somos" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-400">🎈</span> Nossa Escola</a></li>
              <li><a href="#missao-visao-valores" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-300">🎯</span> Missão & Valores</a></li>
              <li><a href="#metodologia" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-400">📚</span> Metodologia</a></li>
              <li><a href="#servicos" className="hover:text-brand-300 hover:translate-x-2 transform transition-all duration-300 flex items-center gap-2"><span className="text-brand-300">🧩</span> Diferenciais</a></li>
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
                 <span className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">🎵</span> Inglês e Música
              </li>
            </ul>
          </motion.div>
          
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col text-sm text-brand-200 font-bold tracking-wide"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Escola Coração de Mãe. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
              <button onClick={() => setSelectedPolicy(policies.terms)} className="hover:text-brand-300 transition-colors cursor-pointer">Termos de Uso</button>
              <button onClick={() => setSelectedPolicy(policies.privacy)} className="hover:text-brand-300 transition-colors cursor-pointer">Política de Privacidade</button>
              <button onClick={() => setSelectedPolicy(policies.cookies)} className="hover:text-brand-300 transition-colors cursor-pointer">Política de Cookies</button>
            </div>
            <p className="flex items-center">
              Feito com <span className="mx-2 text-xl text-red-500 animate-pulse">❤️</span> em Passo Fundo
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedPolicy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedPolicy(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPolicy(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 pr-8">{selectedPolicy.title}</h3>
              <div className="prose prose-sm text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto">
                <p>{selectedPolicy.content}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
