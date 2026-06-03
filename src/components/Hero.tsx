import { motion } from "motion/react";
import { ShieldCheck, Leaf, Clock, ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-[#F6B73C]/20 via-[#F8F4EA] to-transparent -z-10" />
      
      {/* Glow Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-mango-gold/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-leaf-green/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-mango-gold/30 backdrop-blur-sm mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-leaf-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-leaf-green"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide text-mango-green uppercase">
                  সীমিত পরিমাণ - প্রি-অর্ডার চলছে
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bengali font-bold leading-[1.15] tracking-tight text-mango-green mb-6 drop-shadow-sm">
                ফরমালিন নয়, <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-mango-green to-leaf-green">
                    পরিবারের জন্য নিরাপদ
                  </span>
                  <div className="absolute bottom-1 left-0 right-0 h-4 bg-mango-gold/30 -z-0 -rotate-2" />
                </span>
                <br /> আসল রাজশাহীর আম
              </h1>

              <p className="text-lg text-mango-green/80 mb-8 font-medium max-w-lg leading-relaxed">
                রাজশাহীর নিজস্ব বাগান থেকে সরাসরি হাতে বাছাই করা, ১০০% কেমিক্যাল-মুক্ত টাটকা আম। আপনার শিশুর জন্য সম্পূর্ণ নিরাপদ।
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 text-sm font-medium text-mango-green bg-white/50 px-4 py-2 rounded-xl border border-white">
                  <Leaf className="w-4 h-4 text-leaf-green" />
                  ক্যামিকেল মুক্ত
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-mango-green bg-white/50 px-4 py-2 rounded-xl border border-white">
                  <ShieldCheck className="w-4 h-4 text-leaf-green" />
                  বাগান থেকে সরাসরি
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToOrder}
                  className="group relative overflow-hidden bg-mango-green text-cream-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-leaf-green/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span>এখনই অর্ডার করুন</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#video" 
                  className="px-8 py-4 rounded-full font-bold text-lg text-mango-green bg-white hover:bg-soft-beige border border-mango-green/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>ভিডিও দেখুন</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Visual */}
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg aspect-[4/5] lg:aspect-auto lg:h-[90%] rounded-3xl overflow-hidden shadow-2xl shadow-mango-green/20 ring-1 ring-white/50">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=1000" 
                alt="Farmer smiling in field" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mango-green/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-panel text-white p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-mango-gold flex items-center justify-center text-mango-green shadow-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bengali font-bold text-xl drop-shadow-md">গাছপাকা হিমসাগর</p>
                      <p className="text-white/90 text-sm font-medium">আর মাত্র ৭ দিন বাকি!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 1 - Trusted */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-12 -right-6 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">১০০% নিরাপদ</p>
                <p className="font-bengali font-bold text-mango-green">পরিবারের জন্য</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Rating */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-1 z-10"
            >
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="font-bengali font-bold text-mango-green text-sm">১০,০০০+ খুশি পরিবার</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
