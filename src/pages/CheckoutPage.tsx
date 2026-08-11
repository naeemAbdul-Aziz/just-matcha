import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GuestForm } from '../components/checkout/GuestForm';
import { PaymentMethod } from '../components/checkout/PaymentMethod';
import { usePaystackPayment } from 'react-paystack';
import { OrderSummarySticky } from '../components/checkout/OrderSummarySticky';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } }
};

const stepVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2, position: "absolute" } }
};

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeStep = parseInt(searchParams.get('step') || '1', 10);
  
  const setActiveStep = (step: number) => {
    setSearchParams({ step: step.toString() });
  };
  const [fulfillment, setFulfillment] = React.useState('delivery');

  const hasDelivery = fulfillment === 'delivery';

  // Paystack Integration Mockup
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "customer@example.com", // This would normally come from the GuestForm
    amount: 6500, // 65 GHC in pesewas
    publicKey: 'pk_test_dc8fb16223b361a995eefc4a5c9527ec3c3836a5', // A mock test key
    currency: 'GHS'
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    initializePayment({
      onSuccess: () => {
        navigate('/success');
      },
      onClose: () => {
        console.log('Payment modal closed');
      }
    });
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-[#FDFBF7] dark:bg-[#111111] font-display text-slate-800 dark:text-white transition-colors duration-1000 min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Minimal Navigation Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 lg:p-8 z-50 flex justify-between items-center pointer-events-none">
        <button onClick={() => navigate(-1)} className="pointer-events-auto w-10 h-10 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-black/10 transition-colors shadow-sm">
          <span className="material-symbols-sharp text-sm ml-1">arrow_back_ios</span>
        </button>
      </div>

      <main className="flex-grow container mx-auto px-6 lg:px-12 pt-32 pb-32 lg:pb-12 z-10 relative">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Interactive Flow */}
          <div className="lg:w-3/5 w-full pt-4 relative">
            
            {/* Step Indicators */}
            <div className="flex items-center gap-3 mb-16 w-full">
              {[1, 2].map((step, index, arr) => {
                if (!hasDelivery && step === 2) return null; // Skip delivery step dot if pickup
                const isActive = activeStep === step;
                const isPast = activeStep > step;
                return (
                  <React.Fragment key={step}>
                    <div className={`w-3 h-3 flex-shrink-0 rounded-full transition-all duration-500 ${isActive ? 'bg-primary scale-125' : isPast ? 'bg-primary/40' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                    {index < arr.length - 1 && hasDelivery && (
                      <div className={`h-px flex-grow transition-colors duration-500 ${isPast ? 'bg-primary/40' : 'bg-gray-200 dark:bg-white/10'}`}></div>
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
                      onNext={() => hasDelivery ? setActiveStep(2) : handlePayment()} 
                    />
                  </motion.div>
                )}

                {activeStep === 2 && hasDelivery && (
                  <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                    <GuestForm onNext={handlePayment} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <OrderSummarySticky />
        </div>
      </main>


    </motion.div>
  );
};
