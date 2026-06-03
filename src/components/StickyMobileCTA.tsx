import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling down a bit (past the initial hero CTA)
      // and hide it if we are already at the bottom (near order form).
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      const isPastHero = scrollY > 400;
      const isNearBottom = scrollY + winHeight > docHeight - 800; // rough approx
      
      setIsVisible(isPastHero && !isNearBottom);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50 pointer-events-none"
        >
          <button
            onClick={scrollToOrder}
            className="w-full bg-mango-green text-cream-white px-6 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-2 pointer-events-auto border-2 border-white box-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
            <ShoppingBag className="w-5 h-5" />
            <span>এখনই প্রি-অর্ডার করুন</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
