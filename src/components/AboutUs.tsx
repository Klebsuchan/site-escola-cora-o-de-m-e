import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <motion.section 
      id="quem-somos" 
      className="py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 border border-brand-100 font-heading px-5 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider mb-6 transform -rotate-2"
          >
            <span className="text-xl">❤️</span> Quem Somos
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight mb-6"
          >
            O Coração da Nossa Escola
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A Escola Coração de Mãe foi idealizada para ser um ambiente familiar, seguro e acolhedor. Nossa missão é continuar sendo uma extensão do seu lar, aliando excelência pedagógica, autonomia e o carinho que cada criança merece.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed mt-4"
          >
            Nossa estrutura é composta por 2 pavimentos com uma área projetada também para embarque e desembarque na Coronel Chicuta. Nos fundos, contamos com um espaço maior para salas de aula, além de uma ampla área externa para o lazer e desenvolvimento das crianças.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 mx-auto max-w-4xl border-8 border-white shadow-xl rounded-3xl overflow-hidden bg-gray-100"
          >
            <video 
               src="/patio-quadra.mov" 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-auto max-h-[600px] object-cover contrast-[1.05] saturate-[1.10]"
             />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch justify-center max-w-4xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group bg-brand-50/30 p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-brand-50"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-brand-400 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform scale-110"></div>
              <img 
                src="/2542e32b-5f68-4e84-ab57-40a96eecdd5f.jpeg" 
                alt="Proprietária / Diretora" 
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full border-[8px] border-white shadow-lg relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">Idimara Kleber</h3>
            <p className="text-brand-600 font-bold uppercase tracking-wider text-xs mb-4 bg-brand-100 px-4 py-1.5 rounded-full inline-block">Proprietária & Diretora</p>
            <p className="text-gray-600 px-4 leading-relaxed font-medium">
              Com o compromisso de garantir que cada criança se sinta amada. É o coração que inspira toda a equipe a proporcionar o melhor ambiente.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center group bg-blue-50/30 p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-blue-50"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-110"></div>
              <img 
                src="/coordenadora.jpeg" 
                alt="Coordenadora Pedagógica" 
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full border-[8px] border-white shadow-lg relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">Sabrina Mello</h3>
            <p className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-4 bg-blue-100 px-4 py-1.5 rounded-full inline-block">Coordenadora Pedagógica</p>
            <p className="text-gray-600 px-4 leading-relaxed font-medium">
              Responsável por planejar e orientar nosso ensino de excelência, zelando pelo desenvolvimento cognitivo, motor e social diariamente.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
