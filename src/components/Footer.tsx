import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-mango-green text-cream-white pt-20 pb-10 border-t border-mango-gold/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute opacity-5 -top-40 -right-40 text-mango-gold pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mango-gold to-warm-orange flex items-center justify-center">
                <span className="text-mango-green font-bold text-xl font-bengali">আম</span>
              </div>
              <span className="font-bengali font-bold text-2xl text-cream-white tracking-tight">
                রাজশাহীর খাঁটি আম
              </span>
            </div>
            <p className="text-white/70 font-medium leading-relaxed mb-6">
              আমরা প্রতিশ্রুতিবদ্ধ আপনার পরিবারের সুস্থতার জন্য। ফরমালিন ও কেমিক্যাল মুক্ত আসল রাজশাহীর আমের নিশ্চয়তা।
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-mango-gold tracking-wide">যোগাযোগ</h4>
            <div className="space-y-4">
              <a href="tel:+8801234567890" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+৮৮০ ১২৩৪ ৫৬৭ ৮৯০</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">contact@rajshahimango.com</span>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium leading-relaxed">
                  বাগান: বাঘা, রাজশাহী<br/>
                  অফিস: বনানী, ঢাকা
                </span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 text-mango-gold tracking-wide">জরুরী লিংক</h4>
             <ul className="space-y-3">
               <li><a href="#" className="text-white/70 hover:text-white transition-colors font-medium">রিপ্লেসমেন্ট পলিসি</a></li>
               <li><a href="#" className="text-white/70 hover:text-white transition-colors font-medium">ডেলিভারি তথ্য</a></li>
               <li><a href="#" className="text-white/70 hover:text-white transition-colors font-medium">প্রাইভেসি পলিসি</a></li>
               <li><a href="#" className="text-white/70 hover:text-white transition-colors font-medium">আমাদের সম্পর্কে</a></li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm font-medium">
            © {new Date().getFullYear()} রাজশাহীর খাঁটি আম | সর্বস্বত্ব সংরক্ষিত
          </p>
          <div className="flex gap-4">
             {/* Note: In a real app we'd use genuine social links */}
             <div className="text-sm font-medium text-white/50 border border-white/10 px-3 py-1 rounded-full">
               Developed for AI Studio
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
