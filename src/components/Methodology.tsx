import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen, Brain, Heart, Users, Target, Shield, Star, Blocks } from 'lucide-react';

const methodologyTopics = [
  {
    id: "teorias",
    title: "Fundamentamentos Teóricos",
    icon: Brain,
    content: (
       <div className="text-gray-700 leading-relaxed font-medium space-y-4">
          <p>O trabalho pedagógico da escola está fundamentado em uma <strong>proposta Sociointeracionista</strong> de educação, seguindo os pressupostos de Lev Vygotsky, que vincula o desenvolvimento humano ao contexto cultural. É através da troca de experiências que se dá a origem das funções mentais superiores, possibilitando a relação ativa com o conhecimento.</p>
          <p>Também nos embasamos na <strong>Teoria Construtivista</strong> de Jean Piaget. Entendemos que a escola deve provocar conflitos cognitivos por meio de situações didáticas desafiadoras, promovendo a construção do conhecimento, estruturação de pensamento, raciocínio lógico e argumentação. O professor atua como mediador em vez de apenas transmissor.</p>
          <p>Pela lente da <strong>Teoria da Afetividade</strong> de Henri Wallon, acreditamos que a vida psíquica integra as dimensões motora, afetiva e cognitiva. O afeto é o impulso inicial para a aprendizagem: o bebê interage primeiro pelas emoções, e nós nos utilizamos desse estímulo essencial para garantir que o desenvolvimento ocorra em um ambiente seguro e amoroso.</p>
       </div>
    )
  },
  {
    id: "reggio",
    title: "A Criança no Centro: Pedagogia da Escuta",
    icon: Star,
    content: (
        <div className="text-gray-700 leading-relaxed font-medium space-y-4">
           <p>Aplicamos os conceitos da <strong>Pedagogia da Escuta</strong> e a "teoria das cem linguagens das crianças" criada por Loris Malaguzzi (abordagem de Reggio Emilia). Acreditamos no potencial expressivo e criativo das crianças, defendendo que elas estejam sempre no centro de sua própria aprendizagem.</p>
           <p>Por meio da observação atenta, descobrimos seus interesses individuais. Atuamos em "sintonia", onde alunos se tornam co-pesquisadores. Valorizamos a imaginação, a arte como linguagem expressiva e a construção de projetos. Nosso ambiente físico escolar é todo arranjado para ser compreendido como o nosso "terceiro educador".</p>
        </div>
    )
  },
  {
    id: "bncc",
    title: "BNCC e a Importância Sistêmica do Brincar",
    icon: Blocks,
    content: (
        <div className="text-gray-700 leading-relaxed font-medium space-y-4">
            <p>Nossa organização curricular prioriza os <strong>5 campos de experiências da BNCC</strong>: <em>Eu, O Outro e O Nós; Corpo, Gestos e Movimentos; Traços, Sons, Cores e Formas; Escuta, Fala, Pensamento e Imaginação; Espaço, Tempo, Quantidades, Relações e Transformações</em>, os quais norteiam o planejamento diário de todas as faixas etárias.</p>
            <p><strong>Nossa metodologia valoriza imensamente o brincar.</strong> Como já preconizava Vygotsky, a brincadeira tem um poder formativo: por meio de situações imaginárias baseadas em regras de comportamento, a criança internaliza condutas da sociedade de forma espontânea, promovendo amadurecimento social, emocional e cognitivo.</p>
        </div>
    )
  },
  {
    id: "projetos",
    title: "Pedagogia de Projetos",
    icon: Target,
    content: (
        <div className="text-gray-700 leading-relaxed font-medium space-y-4">
            <p>Buscando formar cidadãos autônomos e integrados, utilizamos a <strong>Pedagogia de Projetos</strong> para ancorar a aquisição de novos conhecimentos através de objetivos claros e de interesse coletivo. Dialogando, problematizando e se apropriando da realidade, o saber ganha sentido.</p>
            <p>Os professores atuam para estimular e observar, criando situações de aprendizagem ativas. Nossa equipe educa com a filosofia descrita por Paulo Freire: "O trabalho do professor é um trabalho COM os alunos, e não consigo mesmo", construindo conhecimento ao invés de meramente ditá-lo.</p>
        </div>
    )
  },
  {
    id: "aee",
    title: "Inclusão e Atendimento Especializado (AEE)",
    icon: Heart,
    content: (
        <div className="text-gray-700 leading-relaxed font-medium space-y-4">
            <p>Somos uma escola de todos e para todos. O <strong>Atendimento Educacional Especializado (AEE)</strong> visa garantir que os alunos com deficiências, espectro autista (TEA), altas habilidades e outras necessidades encontrem plena acessibilidade pedagógica.</p>
            <p>Os atendimentos das crianças com limitações mantêm o alto nível de socialização, garantindo atividades em sala de aula de forma adaptada a seu tempo. Adicionalmente, contamos com uma <strong>Sala de Recursos Multifuncionais (SRM)</strong> e uma professora de educação inclusiva, realizando intervenções periódicas fundamentais para o desenvolvimento motor e comportamental de cada aluno acolhido.</p>
        </div>
    )
  },
  {
    id: "rotina",
    title: "Estrutura das Turmas e Oficinas",
    icon: BookOpen,
    content: (
        <div className="text-gray-700 leading-relaxed font-medium space-y-4">
            <p><strong>Berçário:</strong> Focado integralmente em atividades lúdicas, descobertas sensoriais com texturas, músicas, psicomotricidade inicial, acolhimento individualizado e exploração segura do ambiente (chão e brinquedos).</p>
            <p><strong>Maternais e Pré-Escola (Pré I e II):</strong> Trabalham ativamente o conteúdo cognitivo e linguístico integrado à sociedade moderna. Crianças desenvolvem habilidades da escrita, matemática, história, artes e contam com uma rica grade de <strong>Aulas Extras:</strong> Psicomotricidade, Oficinas de Educação Ambiental, Dança/Musicalização, e Culinária Infantil.</p>
        </div>
    )
  },
  {
    id: "cidadania",
    title: "Ambiente Seguro e Anti-Bullying",
    icon: Shield,
    content: (
        <div className="text-gray-700 leading-relaxed font-medium space-y-4">
            <p>Um de nossos papéis centrais é formar comunidade. Humilhações ou ataques à dignidade jamais são tratados como simples "brincadeiras". Temos políticas ativas de detecção precoce e combate rigoroso ao bullying escolar, apoiando o desenvolvimento emocional irrestrito.</p>
            <p>A exclusão não faz parte dos nossos muros. Nossos professores desenvolvem um olhar clínico e atencioso. Em parceria total com as famílias, fomentamos na infância princípios inabaláveis de diálogo, compreensão, inclusão e respeito profundo pelo próximo.</p>
        </div>
    )
  }
];

export default function Methodology() {
  const [openTopicId, setOpenTopicId] = useState<string | null>(methodologyTopics[0].id);

  const toggleTopic = (id: string) => {
    setOpenTopicId(prev => (prev === id ? null : id));
  };

  return (
    <motion.section 
      id="metodologia" 
      className="py-24 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-100 font-heading px-5 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider mb-6 transform -rotate-1"
          >
            <span className="text-xl">📚</span> Metodologia
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight mb-6"
          >
            Nossa Proposta Pedagógica
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed"
          >
            Na Coração de Mãe, consideramos cada aluno o sujeito central da nossa escola. Alinhamos grandes correntes da pedagogia moderna para construir uma infância com sentido, autonomia e muita segurança.
          </motion.p>
        </div>

        <div className="space-y-4">
          {methodologyTopics.map((topic, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={topic.id}
              className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-100"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl rounded-tl-sm shadow-sm shrink-0 transition-colors duration-300 ${openTopicId === topic.id ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                    <topic.icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className={`text-xl font-bold font-heading transition-colors duration-300 ${openTopicId === topic.id ? 'text-indigo-600' : 'text-gray-900'}`}>
                    {topic.title}
                  </h3>
                </div>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openTopicId === topic.id ? 'bg-indigo-100 text-indigo-600 rotate-180' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>
                  <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openTopicId === topic.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-gray-50">
                      {topic.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
