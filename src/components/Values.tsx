import { motion } from "motion/react";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Nossa Missão",
    description: "A Escola Coração de Mãe tem o propósito em atender as crianças e suas famílias, levando a confiança, segurança e desenvolver os aspectos físicos, sociais, motor, habilidades e conhecimentos de cada criança, visando o crescimento para que se torne um cidadão atuante, crítico, reflexivo na sociedade em que vive, conhecendo e criando caminhos e hipóteses para a resolução de problemas.",
    icon: Target,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100"
  },
  {
    title: "Nossa Visão",
    description: "Ser referência na educação com qualidade, fundamentada em princípios éticos, morais, sociais e intelectuais em consonância com as leis que regem o ensino brasileiro. Oferecer a seus alunos e colaboradores a possibilidade de se desenvolverem, tornando-se cidadãos éticos, capazes de contribuir para a evolução da comunidade a que pertencem, preocupando-se com uma sociedade mais justa e competente.",
    icon: Eye,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100"
  }
];

const coreValuesList = [
  "Comprometimento e Qualidade",
  "Relacionamento Transparente",
  "Foco no 'Aprender a Aprender'",
  "Educar para SER e CONVIVER",
  "Sintonia com Mudanças Sociais",
  "Responsabilidade e Ética",
  "Acolhimento e Humanização",
  "Inovação e Transformação",
  "Solidariedade e Igualdade",
  "Empatia e Colaboração",
  "Afetividade, Humildade e Honestidade",
  "Respeito absoluto pela infância"
];

export default function Values() {
  return (
    <motion.section 
      id="missao-visao-valores" 
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-[2.5rem] border-2 ${principle.border} ${principle.bg} hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ${principle.color}`}>
                <principle.icon className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium text-justify">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="p-8 lg:p-12 rounded-[2.5rem] border-2 border-brand-100 bg-brand-50 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
               <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm text-brand-500">
                  <Heart className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 font-heading mb-4">
                  Nossos Valores
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium mb-6">
                  Temos em nossa prática educacional a crença de que cada ser humano é capaz de construir seu próprio conhecimento segundo princípios básicos como respeito, solidariedade e busca pela felicidade, nos inspirando em pensadores como Montessori, Piaget e Vygotsky.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Em parceria com as famílias, nossa escola atua na formação de cidadãos com valores sólidos usando o que se aprende como instrumento para transformação.
                </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
               {coreValuesList.map((valueItem, idx) => (
                 <div key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-brand-100/50">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                    <span className="text-sm sm:text-base font-bold font-heading text-gray-800">{valueItem}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
}
