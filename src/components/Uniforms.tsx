import { motion } from 'motion/react';
import { Shirt } from 'lucide-react';

export default function Uniforms() {
  return (
    <motion.section 
      id="uniformes" 
      className="py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 border border-rose-100 font-heading px-5 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider mb-6"
          >
            <Shirt className="w-5 h-5" /> Uniformes
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight mb-6"
          >
            Identidade e <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-400">Praticidade</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            O uso do uniforme é obrigatório para crianças e profissionais, garantindo segurança, identificação rápida, igualdade e muita praticidade para o dia a dia das famílias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-rose-100 rounded-3xl transform rotate-3 scale-105" />
            <img 
              src="/uniforme-foto.jpeg" 
              alt="Uniforme da Escola Coração de Mãe" 
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Videos side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
             {/* 3 videos in slightly different aspect ratios or sizes */}
             <div className="col-span-2 sm:col-span-1 border-4 border-white shadow-lg rounded-2xl overflow-hidden bg-gray-100 h-64">
               <video 
                 src="/uniforme-video-1.mov" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="col-span-2 sm:col-span-1 border-4 border-white shadow-lg rounded-2xl overflow-hidden bg-gray-100 h-64">
               <video 
                 src="/uniforme-video-2.mov" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="col-span-2 border-4 border-white shadow-lg rounded-2xl overflow-hidden bg-gray-100 h-64">
               <video 
                 src="/uniforme-video-3.mov" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               />
             </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
