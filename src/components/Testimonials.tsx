import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "João Gabriel Camargo",
    avatar: null,
    rating: 5,
    text: "Ótimo lugar, ótimos profissionais e muito capacitados, atendimento de excelência e qualidade no cuidado com as crianças."
  },
  {
    id: 2,
    name: "Gilberto Itamar Bonora Vieira",
    avatar: null,
    rating: 5,
    text: "Ótimo atendimento, atividades didáticas e ambiente muito acolhedor."
  },
  {
    id: 3,
    name: "Marli Alves",
    avatar: null,
    rating: 5,
    text: "Excelente em tudo, amei. Meu filho está muito feliz."
  },
  {
    id: 4,
    name: "Luisfernando Foiatto",
    avatar: null,
    rating: 5,
    text: "Escola muito boa, estrutura segura."
  },
  {
    id: 5,
    name: "Anny Laissa Vieira",
    avatar: null,
    rating: 5,
    text: "Atendimento maravilhoso, profissionais muito dedicados e ambiente acolhedor. Minha pequena adora ir pra escola!"
  },
  {
    id: 6,
    name: "Jordan",
    avatar: null,
    rating: 5,
    text: "Excelente escola, estrutura de primeira e equipe pedagógica super atenciosa. Recomendo de olhos fechados!"
  },
  {
    id: 7,
    name: "Nathanael Willian Conti",
    avatar: null,
    rating: 5,
    text: "Gostei muito do atendimento. As professoras são muito atenciosas e tiraram todas as minhas dúvidas sobre a adaptação."
  },
  {
    id: 8,
    name: "Rosana Martins",
    avatar: null,
    rating: 5,
    text: "Fui visitar e fui muito bem atendida. A coordenadora explicou tudo certinho sobre a rotina."
  },
  {
    id: 9,
    name: "Aline Sossela",
    avatar: null,
    rating: 5,
    text: "Lugar com ótima estrutura, super limpa e com profissionais muito educados e capacitados para cuidar dos pequenos."
  },
  {
    id: 10,
    name: "Alexandre Oliveira",
    avatar: null,
    rating: 5,
    text: "Ótimo berçário! Confio de olhos fechados, muito cuidado e atividades interessantes para o desenvolvimento."
  },
  {
    id: 11,
    name: "Leonardo Volpato",
    avatar: null,
    rating: 5,
    text: "Muito bom o atendimento. Preço justo e profissionais que realmente amam ensinar e cuidar."
  },
  {
    id: 12,
    name: "Lucas Rosso",
    avatar: null,
    rating: 5,
    text: "Equipe nota 1000! Sempre dispostos a ajudar e tratar nossos filhos com o maior carinho do mundo."
  },
  {
    id: 13,
    name: "joao carlos moraes barros barros",
    avatar: null,
    rating: 5,
    text: "Direção sempre muito presente, cuidando de cada detalhe da escola."
  },
  {
    id: 14,
    name: "Carlos Borges Fortes",
    avatar: null,
    rating: 5,
    text: "Ótima escola, fomos muito acolhidos na adaptação. Espaço muito gostoso e seguro."
  },
  {
    id: 15,
    name: "Maria Cristina Bristotti",
    avatar: null,
    rating: 5,
    text: "Excelente local e professoras bem preparadas. Transmite muita confiança para deixar as crianças."
  },
  {
    id: 16,
    name: "jaai pereira",
    avatar: null,
    rating: 5,
    text: "Meu filho mais velho também estudou lá, serviço continua excelente e carinhoso em todos os detalhes."
  }
];

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-play-yellow/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-play-yellow rounded-full mix-blend-multiply opacity-20 blur-[80px] transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-play-blue rounded-full mix-blend-multiply opacity-20 blur-[80px]"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex justify-center items-center bg-white text-play-yellow font-heading px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-sm transform rotate-2 border-2 border-play-yellow/30">
            <span className="text-xl mr-2">⭐</span> O Que Dizem Sobre Nós
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-gray-900 mb-6 leading-tight">
            Avaliações com <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-400">Amor</span>
          </h2>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            A opinião de quem já confiou na nossa escola para educar com afeto é o que nos move todos os dias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((review, index) => {
            const rot = index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2';
            const colors = ['bg-brand-50', 'bg-play-blue/10', 'bg-play-green/10', 'bg-play-purple/10'];
            const bgClass = colors[index % colors.length];

            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1, type: "spring" }}
                className={`${bgClass} rounded-[2rem] p-6 justify-between sm:p-8 shadow-sm border-[4px] border-white flex flex-col relative transform transition-all duration-300 ${rot} hover:-translate-y-2 hover:shadow-lg`}
              >
                {/* Speech bubble tail */}
                <div className="absolute -bottom-4 right-10 w-8 h-8 bg-white transform rotate-45 border-r-[4px] border-b-[4px] border-white z-0 hidden"></div>
                
                <div className="mb-4">
                   <div className="flex text-play-yellow mb-4 gap-1">
                     {[...Array(review.rating)].map((_, i) => (
                       <Star key={i} className="w-5 h-5 fill-current transform hover:scale-125 transition-transform" />
                     ))}
                   </div>
                   
                   <p className="text-gray-700 font-medium text-base sm:text-lg mb-6 leading-relaxed flex-grow font-sans relative z-10">
                     "{review.text}"
                   </p>
                </div>

                <div className="flex items-center space-x-3 mt-auto pt-4 border-t-2 border-white/50 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white text-brand-600 flex items-center justify-center font-black text-xl shadow-sm">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-gray-800 text-sm sm:text-base leading-tight break-words pr-2 max-w-[150px] sm:max-w-[180px]">{review.name}</h4>
                    <span className="text-xs text-gray-500 font-bold uppercase">Família</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 flex flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-blue-600 ml-auto shadow-sm" title="Google Review">G</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
