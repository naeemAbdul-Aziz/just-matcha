import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one by default to match screenshot

  const faqs = [
    {
      question: "How does delivery work?",
      answer: "We deliver directly to your doorstep in pristine thermal packaging to ensure your matcha arrives perfectly chilled. Delivery times typically range from 15-45 minutes depending on your zone."
    },
    {
      question: "What are the benefits of Marine Collagen?",
      answer: "Our premium Marine Collagen Peptides are completely odorless and tasteless. They seamlessly blend into your matcha to promote skin elasticity, joint health, and a radiant, youthful glow. Adding it to your daily ritual is the perfect way to boost your wellness from within."
    },
    {
      question: "Can I customize the sweetness?",
      answer: "Absolutely. Our checkout flow allows you to dial in your exact matcha-to-milk ratio, from completely unsweetened pure matcha to a fully indulgent, creamy treat."
    },
    {
      question: "Where do you source your matcha?",
      answer: "We source our ceremonial grade matcha directly from family farms in Uji, Kyoto. It is shade-grown, carefully stone-milled, and flown in fresh to ensure maximum vibrancy and L-theanine content."
    },
    {
      question: "Is the packaging eco-friendly?",
      answer: "Yes, our cups, straws, and thermal bags are 100% biodegradable or highly recyclable. We believe in respecting the earth just as much as we respect the ancient art of matcha."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-[#f5f5f7] dark:bg-[#111111] rounded-[3rem] p-8 md:p-16 lg:p-24 flex flex-col items-center">
        
        {/* Top Tag */}
        <div className="flex items-center gap-2 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 mb-8">
          <span className="text-[10px] font-bold text-gray-500 tracking-wider">04</span>
          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
          <span className="text-[10px] font-bold text-brand-dark dark:text-white tracking-widest uppercase">FAQS</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-display font-medium text-brand-dark dark:text-white mb-16 text-center tracking-tight">
          Common Questions
        </h2>

        {/* FAQ List */}
        <div className="w-full max-w-3xl flex flex-col gap-3 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white dark:bg-black border border-gray-200 dark:border-white/10 shadow-sm' : 'bg-gray-200/50 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${isOpen ? 'bg-gray-100 dark:bg-white/10 text-gray-500' : 'bg-white dark:bg-black text-gray-400'}`}>
                      {index + 1}
                    </div>
                    <span className={`font-display font-medium text-[15px] md:text-base ${isOpen ? 'text-brand-dark dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-white dark:bg-black border border-gray-200 dark:border-white/20' : 'bg-black dark:bg-white'}`}>
                    <span className={`material-symbols-sharp text-base transition-transform duration-300 ${isOpen ? 'text-black dark:text-white rotate-45' : 'text-white dark:text-black'}`}>
                      add
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 pb-6 pt-1 pl-[3.25rem]">
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pr-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Contact */}
        <div className="text-center flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500 font-medium">Have any other questions?</p>
          <a href="#" className="text-sm font-bold text-brand-dark dark:text-white flex items-center gap-1 group">
            <span className="border-b border-brand-dark dark:border-white pb-0.5">Contact Us</span>
            <span className="material-symbols-sharp text-[14px] text-gray-400 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
};
