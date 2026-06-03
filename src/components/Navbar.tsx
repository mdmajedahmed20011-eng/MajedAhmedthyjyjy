import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-cream-white/90 backdrop-blur-md py-4 border-mango-green/10 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mango-gold to-warm-orange flex items-center justify-center shadow-lg shadow-mango-gold/40">
              <span className="text-mango-green font-bold text-xl font-bengali">আম</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bengali font-bold text-xl leading-none text-mango-green tracking-tight">
                রাজশাহীর খাঁটি আম
              </span>
              <span className="text-xs text-leaf-green font-medium tracking-wide">
                GARDEN FRESH QUALITY
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#story" className="text-sm font-medium hover:text-mango-gold transition-colors">আমাদের গল্প</a>
            <a href="#products" className="text-sm font-medium hover:text-mango-gold transition-colors">আমের জাত</a>
            <a href="#why-us" className="text-sm font-medium hover:text-mango-gold transition-colors">কেন আমরা</a>
            <button
              onClick={scrollToOrder}
              className="bg-mango-green text-cream-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-leaf-green transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>অর্ডার করুন</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-mango-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-white border-b border-mango-green/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a href="#story" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2">আমাদের গল্প</a>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2">আমের জাত</a>
              <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2">কেন আমরা</a>
              <button
                onClick={() => {
                  scrollToOrder();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-mango-green text-cream-white w-full px-6 py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 mt-4"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>অর্ডার করুন</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
