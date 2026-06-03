import { Truck, ShieldCheck, ThumbsUp, MapPin } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "রাজশাহীর বাগান",
    desc: "সরাসরি বাগান থেকে সংগ্রহ"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "১০০% নিরাপদ",
    desc: "কোনো ফরমালিন বা ক্যামিকেল নেই"
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "ক্যাশ অন ডেলিভারি",
    desc: "সারা বাংলাদেশে হোম ডেলিভারি"
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "প্রিমিয়াম প্যাকেজিং",
    desc: "আম নষ্ট হওয়ার চিন্তা নেই"
  }
];

export function TrustBar() {
  return (
    <div className="bg-white border-y border-mango-green/5 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-100">
          {features.map((fv, i) => (
            <div key={i} className="flex flex-col items-center text-center pt-6 md:pt-0 first:pt-0">
              <div className="w-12 h-12 bg-cream-white rounded-full flex items-center justify-center text-leaf-green mb-4 shadow-sm border border-mango-gold/20">
                {fv.icon}
              </div>
              <h3 className="font-bengali font-bold text-mango-green text-lg mb-1">{fv.title}</h3>
              <p className="text-sm text-mango-green/70 font-medium">{fv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
