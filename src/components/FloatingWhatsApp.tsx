import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5554991163410&text&type=phone_number&app_absent=0&utm_source=ig"
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
