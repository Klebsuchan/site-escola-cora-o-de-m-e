import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, Calendar, Heart, Award, Eye } from 'lucide-react';

export type EventCategory = 'semana-crianca' | 'efalt' | 'todos-recentes' | 'dia-a-dia';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'semana-crianca' | 'efalt' | 'dia-a-dia';
  categoryLabel: string;
  badgeColor: string;
  dateTag?: string;
  span?: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  // --- SEMANA DA CRIANÇA (Recent Event 1 - High Emphasis) ---
  {
    id: 'sc-1',
    src: '/IMG_4477.jpeg',
    alt: 'Piquenique & Festival das Cores',
    category: 'semana-crianca',
    categoryLabel: 'Semana da Criança 🎈',
    badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    dateTag: 'Esta Semana • Em Festa!',
    description: 'Nossos pequenos celebrando a infância com muita cor, piquenique ao ar livre e gargalhadas sem fim.',
    span: 'md:col-span-2'
  },
  {
    id: 'sc-2',
    src: '/IMG_4486.jpeg',
    alt: 'Brincadeiras e Alegria no Pátio',
    category: 'semana-crianca',
    categoryLabel: 'Semana da Criança 🎈',
    badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    dateTag: 'Esta Semana • Em Festa!',
    description: 'Momentos espontâneos de integração, brincadeiras coletivas e a mais pura energia infantil.',
  },
  {
    id: 'sc-3',
    src: '/IMG_4507.jpeg',
    alt: 'Oficina de Criatividade & Pintura Livre',
    category: 'semana-crianca',
    categoryLabel: 'Semana da Criança 🎈',
    badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    dateTag: 'Esta Semana • Em Festa!',
    description: 'Explorando tintas, texturas e imaginação com o apoio carinhoso de nossas educadoras.',
  },
  {
    id: 'sc-4',
    src: '/IMG_4515.jpeg',
    alt: 'Desfile da Fantasia & Imaginação',
    category: 'semana-crianca',
    categoryLabel: 'Semana da Criança 🎈',
    badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    dateTag: 'Esta Semana • Em Festa!',
    description: 'Super-heróis, princesas e personagens cheios de encanto desfilando alegria e fofura.',
  },
  {
    id: 'sc-5',
    src: '/IMG_4519.jpeg',
    alt: 'Roda de Contos & Canções Encantadas',
    category: 'semana-crianca',
    categoryLabel: 'Semana da Criança 🎈',
    badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    dateTag: 'Esta Semana • Em Festa!',
    description: 'Olhos brilhando durante as histórias lúdicas e músicas temáticas preparadas com amor.',
  },
  {
    id: 'sc-6',
    src: '/IMG_4558.jpeg',
    alt: 'Grande Celebração & Doçuras',
    category: 'semana-crianca',
    categoryLabel: 'Semana da Criança 🎈',
    badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    dateTag: 'Esta Semana • Em Festa!',
    description: 'Sorrisos doces e momentos inesquecíveis que ficam guardados para sempre no coração da família.',
    span: 'md:col-span-2'
  },

  // --- EFALT (Recent Event 2 - Escola Coração de Mãe) ---
  {
    id: 'ef-1',
    src: '/IMG_1716.jpeg',
    alt: 'Acolhimento Especial no EFALT',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Recepção calorosa de pais, alunos e educadores na abertura do grande evento da escola.',
    span: 'md:col-span-2'
  },
  {
    id: 'ef-2',
    src: '/IMG_1764.jpeg',
    alt: 'Exposição dos Trabalhos Pedagógicos',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Mostra das descobertas, produções artísticas e marcos do desenvolvimento de cada turma.',
  },
  {
    id: 'ef-3',
    src: '/IMG_1766.jpeg',
    alt: 'Integração & Abraços em Família',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Fortalecendo o elo de confiança e cumplicidade entre os lares e a Coração de Mãe.',
  },
  {
    id: 'ef-4',
    src: '/IMG_1805.jpeg',
    alt: 'Apresentação Musical e Cultural',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Nossos alunos subindo ao palco para demonstrar coordenação, ritmo e muita desenvoltura.',
  },
  {
    id: 'ef-5',
    src: '/IMG_2267.jpeg',
    alt: 'Oficinas Interativas entre Pais e Filhos',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Mãos na massa! Pais e crianças criando memórias vivas juntos nos espaços temáticos.',
  },
  {
    id: 'ef-6',
    src: '/IMG_2281.jpeg',
    alt: 'Compartilhando Conquistas e Afeto',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Olhares de orgulho dos responsáveis ao acompanhar o crescimento dos seus maiores tesouros.',
  },
  {
    id: 'ef-7',
    src: '/IMG_2285.jpeg',
    alt: 'Encerramento com Emoção e Celebração',
    category: 'efalt',
    categoryLabel: 'EFALT 🌟',
    badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/40',
    dateTag: 'Evento EFALT',
    description: 'Gratidão a cada família que faz parte da história da Escola Coração de Mãe.',
  },

  // --- DIA A DIA & ESTRUTURA (General School Gallery) ---
  {
    id: 'dia-1',
    src: '/IMG_3733.jpeg',
    alt: 'Turma do Berçário II em Atividade',
    category: 'dia-a-dia',
    categoryLabel: 'Dia a Dia 🏫',
    badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
    dateTag: 'Rotina Escolar',
    description: 'Estímulos sensoriais e motores planejados com muito carinho e acompanhamento individualizado.'
  },
  {
    id: 'dia-2',
    src: '/IMG_3736.jpeg',
    alt: 'Visita Mágica da Emília',
    category: 'dia-a-dia',
    categoryLabel: 'Dia a Dia 🏫',
    badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
    dateTag: 'Projetos Literários',
    description: 'Incentivo à leitura e imaginação com visitas teatrais dos personagens mais amados.'
  },
  {
    id: 'dia-3',
    src: '/052679a3-01fa-4042-a8d2-8516a45dac44.jpeg',
    alt: 'Visita Inesperada do Homem-Aranha',
    category: 'dia-a-dia',
    categoryLabel: 'Dia a Dia 🏫',
    badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
    dateTag: 'Momentos Divertidos',
    description: 'Surpresas que transformam a rotina escolar em um mundo de encanto e fascínio.'
  },
  {
    id: 'dia-4',
    src: '/cfc4e46b-8f10-48aa-ad14-f90529dd490f.jpeg',
    alt: 'Parquinho Colorido e Seguro',
    category: 'dia-a-dia',
    categoryLabel: 'Dia a Dia 🏫',
    badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
    dateTag: 'Nossa Estrutura',
    description: 'Área externa ampla, cercada com segurança total para gastar energia com muita saúde.'
  },
  {
    id: 'dia-5',
    src: '/3967dced-1a94-4ac2-93f1-6ad2628c6fc1.jpeg',
    alt: 'Mascotes e Personagens Amigos',
    category: 'dia-a-dia',
    categoryLabel: 'Dia a Dia 🏫',
    badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
    dateTag: 'Socialização',
    description: 'Afeto e empatia desenvolvidos no convívio diário entre coleguinhas e educadores.'
  },
  {
    id: 'dia-6',
    src: '/33c51c74-1b43-4c11-92d8-857f88fe04bf.jpeg',
    alt: 'Tradição e Cultura Gaúcha',
    category: 'dia-a-dia',
    categoryLabel: 'Dia a Dia 🏫',
    badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
    dateTag: 'Cultura & Raízes',
    description: 'Valorizando nossas origens e ensinando respeito às tradições desde os primeiros passinhos.'
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<EventCategory>('semana-crianca');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on tab
  const filteredImages = useMemo(() => {
    if (activeTab === 'semana-crianca') {
      return galleryData.filter(img => img.category === 'semana-crianca');
    }
    if (activeTab === 'efalt') {
      return galleryData.filter(img => img.category === 'efalt');
    }
    if (activeTab === 'todos-recentes') {
      return galleryData.filter(img => img.category === 'semana-crianca' || img.category === 'efalt');
    }
    if (activeTab === 'dia-a-dia') {
      return galleryData.filter(img => img.category === 'dia-a-dia');
    }
    return galleryData;
  }, [activeTab]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  const currentLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  const rotations = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-3', 'rotate-1'];

  return (
    <section 
      id="galeria" 
      className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-gray-950 via-red-950 to-gray-900 text-white"
    >
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            Momentos Inesquecíveis da Escola
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight mb-4">
            Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-amber-200 to-white">Eventos & Fotos</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-100/90 font-medium leading-relaxed">
            Acompanhe o sorriso dos nossos pequenos nos últimos grandes eventos preparados com todo o coração pela nossa equipe.
          </p>
        </motion.div>

        {/* Interactive Tabs / Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          
          {/* TAB 1: Semana da Criança (Primary Emphasis) */}
          <button
            onClick={() => { setActiveTab('semana-crianca'); setLightboxIndex(null); }}
            className={`relative px-4 sm:px-6 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
              activeTab === 'semana-crianca'
                ? 'bg-gradient-to-r from-amber-500 to-red-600 text-white border-amber-400 shadow-[0_8px_25px_rgba(245,158,11,0.35)] scale-105'
                : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/15 hover:border-white/30 backdrop-blur-md'
            }`}
          >
            <span className="text-lg">🎈</span>
            <span>Semana da Criança</span>
            <span className="bg-amber-400/90 text-gray-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              Em Festa!
            </span>
          </button>

          {/* TAB 2: EFALT */}
          <button
            onClick={() => { setActiveTab('efalt'); setLightboxIndex(null); }}
            className={`px-4 sm:px-6 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
              activeTab === 'efalt'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-[0_8px_25px_rgba(37,99,235,0.35)] scale-105'
                : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/15 hover:border-white/30 backdrop-blur-md'
            }`}
          >
            <span className="text-lg">🌟</span>
            <span>EFALT</span>
            <span className="bg-white/20 text-white text-[11px] px-2 py-0.5 rounded-full">
              7 Fotos
            </span>
          </button>

          {/* TAB 3: Todos os Recentes */}
          <button
            onClick={() => { setActiveTab('todos-recentes'); setLightboxIndex(null); }}
            className={`px-4 sm:px-6 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
              activeTab === 'todos-recentes'
                ? 'bg-gradient-to-r from-brand-600 to-brand-800 text-white border-brand-400 shadow-[0_8px_25px_rgba(220,38,38,0.35)] scale-105'
                : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/15 hover:border-white/30 backdrop-blur-md'
            }`}
          >
            <span className="text-lg">🎉</span>
            <span>Todos os Eventos Recentes</span>
            <span className="bg-white/20 text-white text-[11px] px-2 py-0.5 rounded-full">
              13 Fotos
            </span>
          </button>

          {/* TAB 4: Dia a Dia & Estrutura */}
          <button
            onClick={() => { setActiveTab('dia-a-dia'); setLightboxIndex(null); }}
            className={`px-4 sm:px-6 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
              activeTab === 'dia-a-dia'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-emerald-400 shadow-[0_8px_25px_rgba(16,185,129,0.35)] scale-105'
                : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/15 hover:border-white/30 backdrop-blur-md'
            }`}
          >
            <span className="text-lg">🏫</span>
            <span>Dia a Dia & Estrutura</span>
          </button>
        </div>

        {/* Thematic Context Cards for each active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'semana-crianca' && (
            <motion.div
              key="semana-crianca-banner"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-amber-500/20 via-red-500/20 to-pink-500/20 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 mb-10 backdrop-blur-md relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-2 right-4 text-6xl opacity-15 select-none pointer-events-none">🎈</div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-heading font-black uppercase tracking-wider mb-2">
                    <Calendar className="w-4 h-4" />
                    Começou Segunda-feira e vai até Amanhã!
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-2">
                    Semana da Criança Coração de Mãe 🎈✨
                  </h3>
                  <p className="text-brand-100 text-sm sm:text-base leading-relaxed font-medium">
                    Uma semana inteira repleta de magia, oficinas temáticas, dia da fantasia, piquenique recheado de gostosuras e brincadeiras que marcam a infância com lembranças doces e seguras.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="bg-black/30 border border-white/15 px-4 py-2.5 rounded-2xl text-center">
                    <div className="text-xs text-amber-200 font-bold uppercase tracking-wider">Status</div>
                    <div className="text-sm font-black text-white flex items-center gap-1.5 justify-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      Atividades a Todo Vapor!
                    </div>
                  </div>
                  <div className="bg-black/30 border border-white/15 px-4 py-2.5 rounded-2xl text-center">
                    <div className="text-xs text-amber-200 font-bold uppercase tracking-wider">Período</div>
                    <div className="text-sm font-black text-white">Segunda a Sexta</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'efalt' && (
            <motion.div
              key="efalt-banner"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 border-2 border-blue-400/40 rounded-3xl p-6 sm:p-8 mb-10 backdrop-blur-md relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-2 right-4 text-6xl opacity-15 select-none pointer-events-none">🌟</div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-blue-300 text-xs sm:text-sm font-heading font-black uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4" />
                    Evento Institucional Exclusivo
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-2">
                    EFALT • Encontro de Famílias, Aprendizagem e Talentos 🌟
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-medium">
                    Um evento planejado com todo o carinho pedagógico para reunir as famílias, prestigiar as descobertas das crianças, acompanhar suas apresentações e fortalecer os laços da nossa comunidade escolar.
                  </p>
                </div>
                <div className="bg-black/30 border border-white/15 px-5 py-3 rounded-2xl text-center shrink-0">
                  <div className="text-xs text-blue-200 font-bold uppercase tracking-wider">Vínculo & Afeto</div>
                  <div className="text-sm font-black text-white">Família & Escola Unidos</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'todos-recentes' && (
            <motion.div
              key="todos-recentes-banner"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-red-950/40 to-gray-900/40 border border-white/20 rounded-3xl p-5 sm:p-6 mb-10 backdrop-blur-md flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white flex items-center gap-2">
                  <span>📸</span> Todos os Últimos Eventos Registrados
                </h3>
                <p className="text-sm text-brand-100 font-medium">
                  Confira as 13 fotografias mais recentes abrangendo a Semana da Criança e o evento EFALT.
                </p>
              </div>
              <span className="hidden sm:inline-block bg-white/10 text-white font-mono text-xs px-3 py-1.5 rounded-xl border border-white/20">
                Total: 13 registros
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => {
              const rot = rotations[index % rotations.length];
              
              return (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative bg-white text-gray-900 rounded-2xl p-3 pb-5 shadow-xl cursor-pointer border border-gray-200/80 transition-all duration-300 flex flex-col justify-between ${rot} hover:rotate-0 hover:z-20`}
                >
                  {/* Decorative Washi Tape on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/80 backdrop-blur-sm border border-gray-300 shadow-sm rounded-sm z-20 opacity-80 pointer-events-none rotate-1"></div>

                  {/* Image Container with robust error fallback */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-3.5 shadow-inner">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      onError={(e) => {
                        // Resilient fallback to root path if relative, or default photo
                        const target = e.currentTarget;
                        if (!target.src.includes('052679a3')) {
                          target.src = '/052679a3-01fa-4042-a8d2-8516a45dac44.jpeg';
                        }
                      }}
                    />

                    {/* Badge Category Tag over image */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className={`text-[11px] font-heading font-bold px-2.5 py-1 rounded-full border backdrop-blur-md shadow-sm ${image.badgeColor}`}>
                        {image.categoryLabel}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white/95 text-gray-900 px-4 py-2 rounded-full font-heading font-bold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5 text-brand-600" />
                        <span>Ver Foto Ampliada</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption info */}
                  <div className="px-1 text-center">
                    <h4 className="font-heading font-black text-gray-800 text-base leading-snug line-clamp-1 mb-1">
                      {image.alt}
                    </h4>
                    {image.dateTag && (
                      <p className="text-[12px] font-medium text-gray-500 line-clamp-1">
                        {image.dateTag}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom invitation banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-3xl max-w-2xl mx-auto">
            <div className="text-3xl">🎒</div>
            <div className="text-left">
              <h4 className="font-heading font-black text-white text-lg">Quer que seu filho viva momentos assim todos os dias?</h4>
              <p className="text-xs sm:text-sm text-brand-100 font-medium">Venha tomar um cafezinho conosco e conhecer nossa estrutura no Centro de Passo Fundo.</p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5554991163410&text=Ol%C3%A1%21%20%E2%9D%A4%EF%B8%8F%20Vi%20as%20fotos%20dos%20eventos%20no%20site%20da%20Escola%20Cora%C3%A7%C3%A3o%20de%20M%C3%A3e%20e%20gostaria%20de%20agendar%20uma%20visita%21"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-500 hover:bg-brand-600 text-white font-heading font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap shadow-lg hover:shadow-brand-500/30 transition-all hover:scale-105"
            >
              Agendar Visita 💬
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Fullscreen Zoom Viewer) */}
      <AnimatePresence>
        {currentLightboxImage && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/95 p-3 sm:p-6 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-brand-600 p-3 rounded-full transition-colors z-50 shadow-lg border border-white/20"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>

            {/* Previous Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-brand-600 p-3 sm:p-4 rounded-full transition-all border border-white/20 z-50 backdrop-blur-sm hover:scale-110"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-brand-600 p-3 sm:p-4 rounded-full transition-all border border-white/20 z-50 backdrop-blur-sm hover:scale-110"
              aria-label="Próxima foto"
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Card Content */}
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col relative text-gray-900 border border-gray-100"
            >
              {/* Image Frame */}
              <div className="relative bg-black flex items-center justify-center max-h-[70vh] min-h-[260px] overflow-hidden">
                <img
                  src={currentLightboxImage.src}
                  alt={currentLightboxImage.alt}
                  className="max-w-full max-h-[70vh] object-contain w-auto h-auto mx-auto"
                />
              </div>

              {/* Caption and Meta Bar */}
              <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-brand-100 text-brand-800 text-xs font-heading font-black px-3 py-1 rounded-full uppercase">
                      {currentLightboxImage.categoryLabel}
                    </span>
                    <span className="text-xs text-gray-400 font-bold">
                      {currentLightboxImage.dateTag}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-xl text-gray-900 leading-snug">
                    {currentLightboxImage.alt}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-xl font-medium">
                    {currentLightboxImage.description}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    Foto {lightboxIndex + 1} de {filteredImages.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
