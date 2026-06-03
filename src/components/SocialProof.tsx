import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-24 bg-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bengali text-4xl lg:text-5xl font-bold text-mango-green mb-6">
            গ্রাহকদের <span className="text-mango-gold">ভরসা</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "এত সুন্দর আর মিষ্টি আম গত কয়েক বছরে খাইনি। একদম গাছে পাকা আমের সেই পরিচিত গন্ধ! পরিবারের সবাই খুব পছন্দ করেছে।",
              name: "শফিকুল ইসলাম",
              loc: "মিরপুর, ঢাকা"
            },
            {
              text: "বাচ্চাদের জন্য বাজার থেকে আম কিনতে ভয় পেতাম। আপনাদের আম পেয়ে সেই ভয় দূর হয়েছে। একদম অরজিনাল কেমিক্যাল ফ্রি।",
              name: "নাহার পারভীন",
              loc: "ধানমন্ডি, ঢাকা"
            },
            {
              text: "প্যাকেজিং খুবই সুন্দর ছিল, একটা আমও নষ্ট হয়নি। আর টেস্ট? জাস্ট ওয়াও! আগামী বছর আবার অর্ডার করবো ইনশাআল্লাহ।",
              name: "রাকিব হাসান",
              loc: "সিলেট"
            }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative mt-6"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-mango-gold text-white rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex text-warm-orange mb-6 pt-4">
                {[1,2,3,4,5].map(v => <svg key={v} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-mango-green/80 font-medium leading-relaxed mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-mango-green">{review.name}</p>
                <p className="text-xs text-mango-green/60 font-medium tracking-wide">{review.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-mango-green/10 pt-16">
           <div className="text-center">
             <div className="text-4xl font-bold text-mango-green mb-2">৫+</div>
             <div className="text-sm font-medium text-mango-green/60">বছরের অভিজ্ঞতা</div>
           </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-mango-green mb-2">১০k+</div>
             <div className="text-sm font-medium text-mango-green/60">সন্তুষ্ট গ্রাহক</div>
           </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-mango-green mb-2">১০০%</div>
             <div className="text-sm font-medium text-mango-green/60">কেমিক্যাল মুক্ত</div>
           </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-mango-green mb-2">২৪/৭</div>
             <div className="text-sm font-medium text-mango-green/60">কাস্টমার সাপোর্ট</div>
           </div>
        </div>
      </div>
    </section>
  );
}
