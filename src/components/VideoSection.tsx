import { motion } from "motion/react";
import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-mango-green text-cream-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1630138986875-1e8cddb5ba38?auto=format&fit=crop&q=80&w=1000')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-bengali text-4xl lg:text-5xl font-bold mb-6">
            আমাদের বাগান ঘুরে আসুন
          </h2>
          <p className="text-lg text-cream-white/80 font-medium">
            কিভাবে আমরা গাছ থেকে আম পেড়ে, বাছাই করে আপনাদের জন্য প্যাকেট করি, তার একটি ছোট্ট দৃশ্য।
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer ring-1 ring-white/10">
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1000" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-mango-gold/90 group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(246,183,60,0.5)]">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
