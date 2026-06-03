import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
  const reasons = [
    "বাগান থেকে সরাসরি সংগ্রহ, কোনো মধ্যস্বত্বভোগী নেই",
    "১০০% কেমিক্যাল এবং ফরমালিন মুক্ত",
    "শুধু পরিপক্ক ও গাছপাকা আমই সংগ্রহ করা হয়",
    "ডেলিভারির আগে প্রতিটি আম হাতে বাছাই করা হয়",
    "নিরাপদ ও উন্নত মানের প্যাকেজিং",
    "ডেলিভারি পাওয়ার পর পেমেন্ট করার সুবিধা"
  ];

  return (
    <section id="why-us" className="py-24 bg-mango-green text-cream-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-leaf-green rounded-full opacity-50 blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-mango-gold/20 rounded-full opacity-50 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-mango-gold font-bold tracking-widest text-sm uppercase mb-4">
              <span className="w-8 h-[2px] bg-mango-gold"></span>
              পার্থক্য কোথায়
            </div>
            <h2 className="font-bengali text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              আমাদের আম কেন <span className="text-mango-gold text-glow">সেরা?</span>
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-mango-gold shrink-0 mt-1" />
                  <p className="text-lg font-medium text-cream-white/90">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 p-8">
              <div className="aspect-square rounded-full border border-white/20 p-8">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800" 
                    alt="Fresh mangos" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-mango-green/60 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white text-mango-green p-6 rounded-2xl shadow-2xl z-20 max-w-[200px] border border-mango-gold/30">
              <div className="text-4xl font-bold text-mango-gold mb-2 font-bengali">১০০%</div>
              <div className="text-sm font-bold font-bengali">খাঁটি ও নিরাপদ গ্যারান্টি</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
