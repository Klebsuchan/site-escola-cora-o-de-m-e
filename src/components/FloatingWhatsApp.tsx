import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5554991163410&text=Ol%C3%A1%21%20%E2%9D%A4%EF%B8%8F%20Encontrei%20a%20Escola%20Cora%C3%A7%C3%A3o%20de%20M%C3%A3e%20pelo%20Google%20e%20fiquei%20encantado%28a%29%21%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20de%20pertinho%20esse%20espa%C3%A7o%20cheio%20de%20amor.%20%F0%9F%A5%B0&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-green-600 transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Falar conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
}
