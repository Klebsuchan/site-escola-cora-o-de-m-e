import { Phone, MapPin, Clock, Menu, X, Moon, Sun } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-2 sm:top-4 w-full z-50 px-2 sm:px-6 flex justify-center pointer-events-none">
      <header
        className={`pointer-events-auto bg-gradient-to-r from-red-900 to-gray-900 text-white backdrop-blur-xl border border-gray-800 transition-all duration-300 w-full max-w-7xl mx-auto rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] ${scrolled ? "py-1 sm:py-2 px-4" : "py-2 sm:py-3 px-6"} flex items-center justify-between`}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center shrink-0 py-1"
        >
          <a
            href="#inicio"
            className="flex items-center ml-1 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm border-2 border-white/20"
          >
            <img
              src="/logo_coracao_site.png"
              alt="Escola Coração de Mãe"
              className="w-full h-full object-cover scale-[1.25]"
            />
          </a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex items-center space-x-5 xl:space-x-8 font-heading font-semibold text-white/90 text-sm xl:text-base"
        >
          <a
            href="#quem-somos"
            className="hover:text-brand-300 hover:scale-105 transition-all"
          >
            A Escola
          </a>
          <a
            href="#metodologia"
            className="hover:text-brand-300 hover:scale-105 transition-all"
          >
            Metodologia
          </a>
          <a
            href="#servicos"
            className="hover:text-brand-300 hover:scale-105 transition-all"
          >
            Diferenciais
          </a>
          <a
            href="#uniformes"
            className="hover:text-brand-300 hover:scale-105 transition-all"
          >
            Uniformes
          </a>
          <a
            href="#galeria"
            className="hover:text-brand-300 hover:scale-105 transition-all"
          >
            Galeria
          </a>
          <a
            href="#contato"
            className="hover:text-brand-300 hover:scale-105 transition-all"
          >
            Contato
          </a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=5554991163410&text=Ol%C3%A1%21%20%E2%9D%A4%EF%B8%8F%20Encontrei%20a%20Escola%20Cora%C3%A7%C3%A3o%20de%20M%C3%A3e%20pelo%20Google%20e%20fiquei%20encantado%28a%29%21%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20de%20pertinho%20esse%20espa%C3%A7o%20cheio%20de%20amor.%20%F0%9F%A5%B0&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-gray-900 hover:bg-brand-50 hover:text-brand-600 px-6 py-2.5 rounded-full font-heading font-bold shadow-[0_4px_0_0_#991b1b] hover:shadow-[0_2px_0_0_#991b1b] active:shadow-none active:translate-y-[4px] hover:translate-y-[2px] transition-all flex items-center gap-2 border-2 border-transparent whitespace-nowrap"
          >
            <span>Agendar Visita</span>
            <span className="text-xl">🎒</span>
          </a>
        </motion.div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-white hover:text-brand-300 hover:bg-white/10 rounded-full transition-colors mr-1"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex flex-col p-6 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-8 border-b-2 border-dashed border-gray-200 pb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0">
                <img
                  src="/logo_coracao_site.png"
                  alt="Escola Coração de Mãe"
                  className="w-full h-full object-cover scale-[1.25]"
                />
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-500 hover:text-brand-500 hover:bg-brand-50 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 sm:space-y-6 flex-grow overflow-y-auto pt-4 font-heading text-xl sm:text-2xl font-bold text-gray-700 text-center items-center justify-start sm:justify-center">
              <a
                href="#quem-somos"
                onClick={closeMenu}
                className="hover:text-brand-500 active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">❤️</span> Quem Somos
              </a>
              <a
                href="#sobre"
                onClick={closeMenu}
                className="hover:text-brand-500 active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">🎈</span> Propósito
              </a>
              <a
                href="#missao-visao-valores"
                onClick={closeMenu}
                className="hover:text-play-blue active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">🎯</span> Valores
              </a>
              <a
                href="#metodologia"
                onClick={closeMenu}
                className="hover:text-play-red active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">📚</span> Metodologia
              </a>
              <a
                href="#servicos"
                onClick={closeMenu}
                className="hover:text-play-blue active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">🧩</span> Diferenciais
              </a>
              <a
                href="#uniformes"
                onClick={closeMenu}
                className="hover:text-brand-500 active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">👕</span> Uniformes
              </a>
              <a
                href="#galeria"
                onClick={closeMenu}
                className="hover:text-play-yellow active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">📸</span> Fotos
              </a>
              <a
                href="#avaliacoes"
                onClick={closeMenu}
                className="hover:text-play-green active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">⭐</span> Avaliações
              </a>
              <a
                href="#parceiros"
                onClick={closeMenu}
                className="hover:text-indigo-500 active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">🤝</span> Parceiros
              </a>
              <a
                href="#contato"
                onClick={closeMenu}
                className="hover:text-play-purple active:scale-95 transition-transform flex items-center justify-center gap-3"
              >
                <span className="text-3xl">📞</span> Contato
              </a>
            </nav>

            <div className="mt-auto pt-8 flex flex-col space-y-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5554991163410&text=Ol%C3%A1%21%20%E2%9D%A4%EF%B8%8F%20Encontrei%20a%20Escola%20Cora%C3%A7%C3%A3o%20de%20M%C3%A3e%20pelo%20Google%20e%20fiquei%20encantado%28a%29%21%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20de%20pertinho%20esse%20espa%C3%A7o%20cheio%20de%20amor.%20%F0%9F%A5%B0&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="bg-brand-500 text-white py-4 rounded-full font-heading font-bold text-xl text-center shadow-[0_6px_0_0_#b91c1c] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Agendar Visita <span className="text-2xl">🎒</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
