import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GuestForm } from '../components/checkout/GuestForm';
import { PaymentMethod } from '../components/checkout/PaymentMethod';
import { PaymentGateway } from '../components/checkout/PaymentGateway';
import { OrderSummarySticky } from '../components/checkout/OrderSummarySticky';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } }
};

const stepVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" as const, position: "absolute" } }
};

export const CheckoutPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [fulfillment, setFulfillment] = React.useState('delivery');

  const hasDelivery = fulfillment === 'delivery';
  const paymentStepNum = hasDelivery ? 3 : 2;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-[#FDFBF7] dark:bg-[#111111] font-display text-slate-800 dark:text-white transition-colors duration-1000 min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Checkout Header */}
      <header className="w-full px-6 py-8 md:px-12 z-40 fixed top-0 left-0 flex items-center justify-between">
         <Link to="/" className="flex items-center gap-4 group">
           <div className="w-12 h-12 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 flex items-center justify-center shadow-sm">
             <span className="material-symbols-sharp">spa</span>
           </div>
           <span className="font-serif font-bold text-2xl tracking-tight text-brand-dark dark:text-white hidden sm:block">Just Matcha<span className="text-primary">.</span></span>
         </Link>
         <div className="flex items-center gap-4">
           {activeStep > 1 && (
             <button 
               onClick={() => setActiveStep(activeStep - 1)} 
               className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-brand-dark dark:hover:text-white transition-colors flex items-center gap-1 group"
             >
               <span className="material-symbols-sharp text-[14px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
               Previous
             </button>
           )}
           <Link to="/customize" className="w-12 h-12 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-brand-dark dark:hover:text-white transition-colors shadow-sm">
             <span className="material-symbols-sharp">close</span>
           </Link>
         </div>
      </header>

      <main className="flex-grow container mx-auto px-6 lg:px-12 pt-32 pb-32 lg:pb-12 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Interactive Flow */}
          <div className="lg:w-3/5 w-full pt-4 relative">
            
            {/* Step Indicators */}
            <div className="flex items-center gap-3 mb-16">
              {[1, 2, paymentStepNum].map((step, index, arr) => {
                if (!hasDelivery && step === 2) return null; // Skip delivery step dot if pickup
                const isActive = activeStep === step;
                const isPast = activeStep > step;
                return (
                  <React.Fragment key={step}>
                    <div className={`w-3 h-3 rounded-full transition-all duration-500 ${isActive ? 'bg-primary scale-125' : isPast ? 'bg-primary/40' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                    {index < arr.length - 1 && (hasDelivery || index === 0) && (
                      <div className={`h-px w-8 transition-colors duration-500 ${isPast ? 'bg-primary/40' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {activeStep === 1 && (
                  <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                    <PaymentMethod 
                      selected={fulfillment}
                      onSelect={(val) => {
                        setFulfillment(val);
                      }}
                      onNext={() => setActiveStep(2)} 
                    />
                  </motion.div>
                )}

                {activeStep === 2 && hasDelivery && (
                  <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                    <GuestForm onNext={() => setActiveStep(3)} />
                  </motion.div>
                )}

                {activeStep === paymentStepNum && (
                  <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                    <PaymentGateway />
                    
                    <div className="pt-12">
                      <Link to="/success" className="group relative w-full px-12 py-6 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                        <span className="absolute inset-0 w-full h-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                        <span className="relative z-10 font-bold text-xl tracking-widest uppercase group-hover:text-white transition-colors">
                          Complete Ritual
                        </span>
                        <span className="relative z-10 material-symbols-sharp group-hover:translate-x-1 transition-transform group-hover:text-white">check_circle</span>
                      </Link>
                      <p className="text-center text-xs text-slate-400 mt-6 uppercase tracking-widest font-bold">By completing this ritual, you agree to our Terms of Service.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <OrderSummarySticky />
        </div>
      </main>

      {/* Mobile Sticky CTA for Payment Step only */}
      <div className={`lg:hidden fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent dark:from-[#111111] dark:via-[#111111]/90 dark:to-transparent flex justify-center z-50 transition-all duration-500 ${activeStep === paymentStepNum ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="w-full flex flex-col gap-3">
          <Link to="/success" className="w-full bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold text-lg py-5 rounded-full shadow-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform uppercase tracking-widest">
            <span>Complete Ritual</span>
            <span className="material-symbols-sharp">check_circle</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
