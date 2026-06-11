import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona o agendamento de uma visita?",
    answer: "Você pode agendar uma visita guiada diretamente pelo nosso WhatsApp (54) 99116-3410, telefone ou presencialmente na escola. Recomendamos o agendamento para garantir que a coordenação pedagógica possa lhe apresentar toda a estrutura com calma."
  },
  {
    question: "A partir de qual idade a escola aceita crianças?",
    answer: "Trabalhamos com turmas de Berçário, recebendo bebês a partir de 4 meses de idade, até crianças de 5 anos de idade na Pré-Escola. Nossa estrutura possui espaços adequados e seguros para o desenvolvimento de cada faixa etária."
  },
  {
    question: "Como é o período de adaptação para os novos alunos?",
    answer: "A adaptação é conduzida de forma acolhedora, respeitando o tempo e o estado emocional da criança e dos familiares. Nos primeiros dias, o tempo de permanência pode ser reduzido, combinando atividades atrativas e um contato próximo com a professora titular e a coordenação."
  },
  {
    question: "O que a criança deve levar na mochila?",
    answer: "No momento da matrícula, fornecemos uma listagem completa. De forma geral, solicitamos trocas de roupa (adequadas ao clima), fraldas (no caso do berçário), leite (se aplicável), garrafinha d'água e kit de higiene. Todos os itens devem estar devidamente identificados com o nome do aluno."
  },
  {
    question: "Como funciona a alimentação da escola?",
    answer: "Oferecemos refeições nutritivas (lanches e almoço) elaboradas e acompanhadas por uma nutricionista. Caso a criança apresente restrições alimentares ou alergias, o cardápio será customizado individualmente mensalmente garantindo sua saúde e segurança mediante a entrega do atestado médico. Além disso, os pais podem acompanhar em tempo real dados da rotina das crianças, como alimentação, sono e etc, pelo aplicativo \"Agenda\" da escola."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-r from-gray-900 to-red-900 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500 rounded-full mix-blend-multiply opacity-20 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-700 rounded-full mix-blend-multiply opacity-20 blur-[70px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="mb-4 inline-flex justify-center items-center bg-white/10 text-white px-6 py-2 rounded-full text-sm font-heading font-black uppercase tracking-widest shadow-sm transform -rotate-2 border-2 border-white/20 backdrop-blur-sm">
            <span className="text-xl mr-2">❓</span> Dúvidas Frequentes
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-4 sm:mb-6 leading-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Frequentes</span>
          </h2>
          <p className="text-lg text-brand-100 font-medium px-4">
            Abaixo estão as respostas para dúvidas que a maioria dos papais e mamães têm sobre o nosso dia a dia.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            // Cycle through happy colors
            const colors = ['border-brand-200', 'border-play-blue/30', 'border-play-yellow/40', 'border-play-green/30'];
            const bgHoverColors = ['hover:bg-brand-50/50', 'hover:bg-play-blue/5', 'hover:bg-play-yellow/5', 'hover:bg-play-green/5'];
            const activeBgColors = ['bg-brand-50', 'bg-play-blue/10', 'bg-play-yellow/10', 'bg-play-green/10'];
            const iconBgColors = ['bg-brand-500 text-white', 'bg-play-blue text-white', 'bg-play-yellow text-brand-700', 'bg-play-green text-white'];
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`bg-white rounded-2xl shadow-sm border-[3px] overflow-hidden transition-colors duration-300 ${isActive ? `${colors[index % colors.length]} ${activeBgColors[index % colors.length]}` : `border-gray-100 ${bgHoverColors[index % bgHoverColors.length]}`}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-5 sm:px-6 sm:py-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className={`font-heading font-bold pr-4 text-lg sm:text-xl transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-brand-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isActive ? iconBgColors[index % iconBgColors.length] : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-brand-500'}`}>
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-gray-700 font-medium leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
