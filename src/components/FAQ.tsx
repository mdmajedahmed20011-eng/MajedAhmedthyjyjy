import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    q: "আপনাদের আম কি আসলেই কেমিক্যাল মুক্ত?",
    a: "হ্যাঁ, ১০০% নিশ্চিত। আমরা নিজেদের বাগান থেকে সরাসরি আম সংগ্রহ করি এবং প্রাকৃতিকভাবে পাকাই। কোনো প্রকার কার্বাইড বা ফরমালিন ব্যবহার করা হয় না।"
  },
  {
    q: "ডেলিভারি পেতে কতদিন সময় লাগে?",
    a: "অর্ডার কনফার্ম করার পর ঢাকা সিটিতে ১-২ দিন এবং ঢাকার বাইরে ২-৩ দিন সময় লাগে পরিপক্ক আম ডেলিভারি দিতে।"
  },
  {
    q: "ডেলিভারি চার্জ কত?",
    a: "ঢাকার ভেতরে ডেলিভারি চার্জ ৮০ টাকা এবং ঢাকার বাইরে ১২০ টাকা। তবে ২০ কেজির বেশি অর্ডারে ফ্রি হোম ডেলিভারি সুবিধা রয়েছে।"
  },
  {
    q: "আম নষ্ট বা পঁচা থাকলে কি হবে?",
    a: "যেহেতু আমরা সতর্কতার সাথে প্যাকেজিং করি, তাই আম নষ্ট হওয়ার সম্ভাবনা খুবই কম। তবে তারপরেও যদি ডেলিভারি পাওয়ার পর কোনো আম পঁচা বা খারাপ পাওয়া যায়, আমরা সাথে সাথে তা রিপ্লেস করে দেব বা টাকা ফেরত দেব।"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bengali text-4xl lg:text-5xl font-bold text-mango-green mb-4">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="text-mango-green/60 font-medium">আপনাদের কিছু সাধারণ প্রশ্নের উত্তর</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-2xl transition-all duration-300",
                openIndex === i ? "border-mango-gold/50 bg-soft-beige/20 shadow-sm" : "border-gray-100 hover:border-mango-gold/30"
              )}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-mango-green font-bengali text-lg">{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-mango-gold transition-transform duration-300",
                    openIndex === i ? "rotate-180" : "rotate-0"
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-mango-green/70 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
