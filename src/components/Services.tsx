import React from 'react';
import { BookOpen, Smile, Blocks, Music, Puzzle, Heart, ShieldPlus, Shirt } from 'lucide-react';

const services = [
  {
    title: 'Estrutura Completa',
    description: 'Quadra de esportes com piso modular, playground, área verde com árvores frutíferas e caixa de areia.',
    icon: Blocks
  },
  {
    title: 'Segurança Total',
    description: 'Monitoramento por câmeras em todos os ambientes e controle rigoroso de acesso com portaria.',
    icon: ShieldPlus
  },
  {
    title: 'Profissionais Capacitados',
    description: 'Equipe pedagógica formada e capacitada, com turmas reduzidas para um acompanhamento próximo.',
    icon: BookOpen
  },
  {
    title: 'Nutrição Completa',
    description: '4 refeições diárias nutritivas e completas já inclusas no valor da mensalidade.',
    icon: Heart
  },
  {
    title: 'Aulas Extras Inclusas',
    description: 'As crianças contam com 4 aulas extras: Língua Inglesa, Psicomotricidade, Dança e Musicalização.',
    icon: Music
  },
  {
    title: '13h de Funcionamento',
    description: 'Ampla flexibilidade com funcionamento das 06:30 às 19:30, feito sob medida para pais que trabalham.',
    icon: Smile
  },
  {
    title: 'Acompanhamento Digital',
    description: 'Registro diário das rotinas, alimentação e evolução da criança repassado através do aplicativo da escola.',
    icon: Puzzle,
    imageIcon: '/minha-escola.jpg'
  },
  {
    title: 'Uso de Uniforme',
    description: 'Uso de uniforme obrigatório para crianças e profissionais, garantindo segurança, praticidade e igualdade.',
    icon: Shirt
  }
];

import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.section 
      id="servicos" 
      className="py-24 relative overflow-hidden bg-white mt-12 sm:mt-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Playful top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -scale-y-100 mb-12 hidden sm:block">
        <svg fill="#fafafa" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 lg:h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,115.1,188.75,99.43,234.34,87,278.43,69.57,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="mb-4 inline-block bg-white text-brand-600 border-2 border-brand-100 px-6 py-2 rounded-full text-sm font-heading font-black uppercase tracking-widest shadow-sm transform -rotate-2">
             O que Oferecemos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gray-900 mb-6 leading-tight">
            Tudo para o <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 drop-shadow-sm">
               desenvolvimento
            </span> 
            <span className="block mt-2">da criança.</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium px-6 leading-relaxed max-w-2xl mx-auto">
            Unimos educação, ludicidade e cuidado com muito amor. Tudo em um só lugar, com segurança e infraestrutura para a alegria do seu filho.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            // Apply fun, bright colors to each card
            const themes = [
              { bg: 'bg-brand-50', text: 'text-brand-600', hoverBg: 'group-hover:bg-brand-500', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.4)]', border: 'border-brand-200' },
              { bg: 'bg-play-blue/20', text: 'text-blue-600', hoverBg: 'group-hover:bg-play-blue', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(125,211,252,0.4)]', border: 'border-blue-200' },
              { bg: 'bg-play-yellow/20', text: 'text-amber-600', hoverBg: 'group-hover:bg-play-yellow', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(252,211,77,0.4)]', border: 'border-amber-200' },
              { bg: 'bg-play-green/20', text: 'text-emerald-600', hoverBg: 'group-hover:bg-play-green', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(110,231,183,0.4)]', border: 'border-emerald-200' },
              { bg: 'bg-play-purple/20', text: 'text-purple-600', hoverBg: 'group-hover:bg-play-purple', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(192,132,252,0.4)]', border: 'border-purple-200' },
              { bg: 'bg-rose-50', text: 'text-rose-600', hoverBg: 'group-hover:bg-rose-400', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(251,113,133,0.4)]', border: 'border-rose-200' },
              { bg: 'bg-brand-50', text: 'text-brand-600', hoverBg: 'group-hover:bg-brand-500', shadow: 'hover:shadow-[0_20px_50px_-12px_rgba(239,68,68,0.4)]', border: 'border-brand-200' },
            ];
            
            const theme = themes[index % themes.length];
            const rotateClasses = ['hover:-rotate-2', 'hover:rotate-2', 'hover:-rotate-3', 'hover:rotate-3'];
            const rotateHover = rotateClasses[index % rotateClasses.length];

            return (
              <motion.div 
                variants={itemVariants}
                key={index} 
                className={`p-8 bg-white rounded-[2.5rem] border-[4px] border-white ${theme.shadow} transition-all duration-300 transform ${rotateHover} hover:-translate-y-2 group flex flex-col items-start shadow-md`}
              >
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] ${theme.bg} ${service.imageIcon ? '' : theme.text} ${service.imageIcon ? '' : theme.hoverBg} group-hover:text-white shadow-inner overflow-hidden`}>
                  {service.imageIcon ? (
                    <img src={service.imageIcon} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <service.icon className="w-8 h-8 stroke-[2.5]" />
                  )}
                </div>
                <h3 className={`text-xl sm:text-2xl font-heading font-bold text-gray-800 mb-4 transition-colors duration-300`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {service.description}
                </p>
                <div className={`mt-6 w-12 h-1.5 rounded-full ${theme.bg} group-hover:w-full transition-all duration-500`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
