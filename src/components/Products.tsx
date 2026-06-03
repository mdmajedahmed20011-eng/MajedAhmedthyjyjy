import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: "himsagar",
    name: "হিমসাগর (ক্ষীরশাপাতি)",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
    desc: "মিষ্টি গন্ধ এবং আঁশবিহীন তুলতুলে স্বাদের জন্য বিখ্যাত। আমের রাজা হিমসাগর।",
    sweetness: "অত্যন্ত মিষ্টি",
    season: "মে এর শেষ সপ্তাহ থেকে",
    popular: true
  },
  {
    id: "langra",
    name: "ল্যাংড়া",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=800",
    desc: "টকটকে সবুজ ত্বক, কিন্তু ভেতরে রসালো ও সুমিষ্ট। অসাধারণ ঘ্রাণ।",
    sweetness: "খুব মিষ্টি",
    season: "জুন মাসের মাঝামাঝি",
    popular: false
  },
  {
    id: "amrapali",
    name: "আম্রপালি",
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=800",
    desc: "গাঢ় কমলা রঙের শাঁস এবং তীব্র মিষ্টি স্বাদ। ছোট সাইজ কিন্তু স্বাদে সেরা।",
    sweetness: "সর্বোচ্চ মিষ্টি",
    season: "জুলাই মাসের শুরুতে",
    popular: true
  },
  {
    id: "fazli",
    name: "ফজলি",
    image: "https://images.unsplash.com/photo-1620023476839-44026fa7a4cc?auto=format&fit=crop&q=80&w=800",
    desc: "আকারে বড়, মাংসল এবং মিষ্টি। দীর্ঘক্ষণ স্বাদ লেগে থাকে।",
    sweetness: "মিষ্টি",
    season: "জুলাই মাসের শেষে",
    popular: false
  }
];

export function Products() {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-bengali text-4xl lg:text-5xl font-bold text-mango-green mb-6">
            আমাদের প্রিমিয়াম <span className="text-mango-gold">সংগ্রহ</span>
          </h2>
          <p className="text-lg text-mango-green/70 font-medium">
            প্রতিটি আম বাগান থেকে সাবধানে বাছাই করা। কোন রকম কেমিক্যাল স্প্রে করা হয় না। প্রাকৃতিক নিয়মে পাকার পর আপনার ঠিকানায় পাঠানো হয়।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-cream-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-mango-green/5 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-warm-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    সবচেয়ে জনপ্রিয়
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-mango-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bengali font-bold text-2xl text-mango-green mb-2">{product.name}</h3>
                <p className="text-sm font-medium text-mango-green/70 mb-6 flex-1">
                  {product.desc}
                </p>
                
                <div className="space-y-3 mb-6 bg-white p-4 rounded-xl border border-gray-50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-mango-green/60 font-medium tracking-wide text-xs uppercase">স্বাদ</span>
                    <span className="font-bold text-mango-green">{product.sweetness}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-mango-green/60 font-medium tracking-wide text-xs uppercase">সময়কাল</span>
                    <span className="font-bold text-mango-green">{product.season}</span>
                  </div>
                </div>

                <button 
                  onClick={scrollToOrder}
                  className="w-full py-3 rounded-xl font-bold bg-white text-mango-green border border-mango-green/10 group-hover:bg-mango-green group-hover:text-cream-white transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>প্রি-অর্ডার করুন</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
