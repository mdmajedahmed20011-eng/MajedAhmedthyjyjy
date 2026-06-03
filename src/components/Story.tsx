import { motion } from "motion/react";
import { Leaf } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="py-24 bg-soft-beige/30 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream-white origin-bottom-left -skew-x-12 transform opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1630138986875-1e8cddb5ba38?auto=format&fit=crop&q=80&w=1000" 
                alt="Green mango garden" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-mango-green/10 mix-blend-multiply" />
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-mango-gold/20 rounded-full flex items-center justify-center text-mango-gold">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="font-bengali font-bold text-lg text-mango-green">প্রাকৃতিক যত্ন</h4>
              </div>
              <p className="text-sm text-mango-green/70 font-medium">আমরা বিশ্বাস করি, মাটি ও প্রকৃতির সঠিক যত্নই দেয় সেরা মানের ফল।</p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-10">
            <div className="flex items-center gap-2 text-mango-gold font-bold tracking-widest text-sm uppercase mb-4">
              <span className="w-8 h-[2px] bg-mango-gold"></span>
              আমাদের গল্প
            </div>
            
            <h2 className="font-bengali text-4xl lg:text-5xl font-bold text-mango-green mb-6 leading-tight">
              বাজারের ভেজাল থেকে <br/>
              <span className="text-leaf-green">সবুজ বাগানের গল্প</span>
            </h2>
            
            <div className="space-y-6 text-mango-green/80 font-medium text-lg">
              <p>
                ছোটবেলায় আমরা গাছপাকা আম খেতাম নিশ্চিন্তে। সেই আমের যে স্বাদ আর ঘ্রাণ ছিল, তা যেন আজ রূপকথার গল্প। বর্তমান বাজারে সুন্দর চেহারার আমের আড়ালে লুকিয়ে থাকে বিষাক্ত কার্বাইড আর ফরমালিন।
              </p>
              <p>
                আমাদের সন্তানরা কি সেই আসল আমের স্বাদ থেকে বঞ্চিত হবে? সেই ভাবনা থেকেই আমাদের এই উদ্যোগ। রাজশাহীর প্রত্যন্ত গ্রামের নিজস্ব বাগান থেকে আমরা নিয়ে আসছি একদম খাঁটি, কেমিক্যাল-মুক্ত আম। 
              </p>
              <p className="font-semibold text-mango-green p-4 bg-white rounded-xl border-l-4 border-mango-gold shadow-sm">
                "আমরা শুধু আম বিক্রি করি না, আমরা একটি সুস্থ ও নিরাপদ পরিবারের প্রতিশ্রুতি দিই।"
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
