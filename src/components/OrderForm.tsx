import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { Clock } from "lucide-react";

type OrderFormData = {
  name: string;
  phone: string;
  address: string;
  mangoType: string;
  quantity: string;
};

export function OrderForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>();

  const onSubmit = (data: OrderFormData) => {
    alert("ধন্যবাদ! আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমাদের প্রতিনিধি শীঘ্রই যোগাযোগ করবেন।\n\nData: " + JSON.stringify(data));
  };

  return (
    <section id="order-section" className="py-24 bg-soft-beige/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-mango-gold/20 flex flex-col md:flex-row">
          
          {/* Urgency Sidebar */}
          <div className="md:w-1/3 bg-gradient-to-br from-mango-green to-leaf-green p-10 text-cream-white flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
             
             <h3 className="font-bengali text-2xl font-bold mb-4">অর্ডার কনফার্ম করুন</h3>
             <p className="text-white/80 font-medium text-sm mb-8 leading-relaxed">
               এখনই প্রি-অর্ডার করে রাখুন। আমাদের বাগানের সীমিত স্টক শেষ হওয়ার আগেই আপনার পরিবারের জন্য খাঁটি আম নিশ্চিত করুন।
             </p>
             
             <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
               <div className="flex items-center gap-3 mb-2 text-mango-gold">
                 <Clock className="w-5 h-5" />
                 <span className="font-bold text-sm uppercase tracking-wide">স্টক সীমিত</span>
               </div>
               <div className="w-full bg-white/20 rounded-full h-2">
                 <div className="bg-mango-gold w-[85%] h-full rounded-full" />
               </div>
               <p className="text-xs text-white/70 mt-2">৮৫% বুকিং সম্পন্ন হয়েছে</p>
             </div>
          </div>

          {/* Form Area */}
          <div className="md:w-2/3 p-10 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-mango-green mb-2">আপনার নাম *</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mango-gold/50 transition-all font-medium text-mango-green"
                    placeholder="সম্পূর্ণ নাম লিখুন"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">নাম আবশ্যক</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-mango-green mb-2">মোবাইল নাম্বার *</label>
                  <input 
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mango-gold/50 transition-all font-medium text-mango-green"
                    placeholder="01XXXXXXXXX"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">ফোন নম্বর আবশ্যক</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-mango-green mb-2">সম্পূর্ণ ঠিকানা *</label>
                <textarea 
                  {...register("address", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mango-gold/50 transition-all font-medium text-mango-green resize-none h-24"
                  placeholder="বাড়ি নং, রাস্তা, এলাকা, জেলা"
                />
                {errors.address && <span className="text-red-500 text-xs mt-1">ঠিকানা আবশ্যক</span>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-mango-green mb-2">আমের জাত *</label>
                  <select 
                    {...register("mangoType", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mango-gold/50 transition-all font-medium text-mango-green appearance-none"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="Himsagar">হিমসাগর (ক্ষীরশাপাতি)</option>
                    <option value="Langra">ল্যাংড়া</option>
                    <option value="Amrapali">আম্রপালি</option>
                    <option value="Fazli">ফজলি</option>
                  </select>
                  {errors.mangoType && <span className="text-red-500 text-xs mt-1">আম নির্বাচন করুন</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-mango-green mb-2">পরিমাণ *</label>
                  <select 
                    {...register("quantity", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-mango-gold/50 transition-all font-medium text-mango-green appearance-none"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="10">১০ কেজি</option>
                    <option value="20">২০ কেজি (ফ্রি হোম ডেলিভারি)</option>
                    <option value="40">৪০ কেজি (১ মন)</option>
                    <option value="100">১০০ কেজি+</option>
                  </select>
                  {errors.quantity && <span className="text-red-500 text-xs mt-1">পরিমাণ নির্বাচন করুন</span>}
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-mango-green hover:bg-leaf-green text-cream-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 relative overflow-hidden group mt-4"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                অর্ডার সাবমিট করুন
              </button>
              
              <p className="text-center text-xs font-medium text-mango-green/50 mt-4">
                * পেমেন্ট করতে হবে ডেলিভারি পাওয়ার পর। কোনো অগ্রিম টাকার প্রয়োজন নেই।
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
