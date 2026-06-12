import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-sm z-[100] p-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 relative">
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4 mb-4 pr-6">
              <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold font-heading mb-1 text-lg">Nós usamos cookies</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Utilizamos cookies essenciais para garantir o funcionamento do site e melhorar sua experiência.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-md"
              >
                Entendi e Aceito
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
