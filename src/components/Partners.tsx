import { motion } from "motion/react";
import { ExternalLink, Instagram } from "lucide-react";

const partners = [
  {
    name: "Calçados Bibi Passo Fundo",
    handle: "@bibipassofundo",
    link: "https://www.instagram.com/bibipassofundo/",
    gradient: "from-orange-400 to-red-500",
    image: "/bibi-logo.jpg"
  },
  {
    name: "Escola Cristina Zilka",
    handle: "@escolacristinazilka",
    link: "https://www.instagram.com/escolacristinazilka?igsh=dXdndzFtYXZsOHA2",
    gradient: "from-blue-400 to-indigo-500",
    image: "/zilka-logo.jpg"
  }
];

export default function Partners() {
  return (
    <section id="parceiros" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-100 font-heading px-5 py-2.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-wider mb-6 transform rotate-2"
          >
            <span className="text-xl">🤝</span> Nossos Parceiros
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 font-heading leading-tight mb-6"
          >
            Fortalecendo Laços Educacionais
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Acreditamos que grandes parcerias constroem um futuro melhor para os nossos pequenos. Conheça e acompanhe o trabalho incrível de quem caminha junto conosco.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="group block bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Soft background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center gap-6 relative z-10">
                <div className={`w-20 h-20 shrink-0 rounded-full bg-gradient-to-br ${partner.gradient} p-1 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {partner.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-2 text-gray-500 group-hover:text-pink-500 transition-colors duration-200">
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm font-semibold">{partner.handle}</span>
                  </div>
                </div>
                
                <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-200">
                  <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
