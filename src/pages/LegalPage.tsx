import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-background-light dark:bg-background-dark min-h-screen pt-32 pb-24 text-slate-800 dark:text-slate-200 font-display">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark dark:text-white mb-12">Legal Information</h1>
        
        <div className="space-y-16">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">Privacy Policy</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              At Just Matcha, we take your privacy seriously. We only collect the minimal amount of information required to process and deliver your order, including your name, email, phone number, and delivery address.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not store your credit card information on our servers. All payments are securely processed through our certified payment partners. We will never sell your personal data to third parties.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">Terms of Service</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              By using our service to order matcha products, you agree to provide accurate delivery and contact information. All sales are final once the preparation process has begun, typically within 5 minutes of placing your order.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Delivery times are estimates and may vary based on traffic, weather, and order volume. If there is a significant delay, we will attempt to contact you via the phone number provided at checkout.
            </p>
          </section>
          
          <p className="text-sm text-slate-500 pt-8 border-t border-slate-200 dark:border-slate-800">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
