import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GuestForm } from '../components/checkout/GuestForm';
import { PaymentMethod } from '../components/checkout/PaymentMethod';
import { PaymentGateway } from '../components/checkout/PaymentGateway';
import { OrderSummarySticky } from '../components/checkout/OrderSummarySticky';
import { Logo } from '../components/ui/Logo';

const StepWrapper: React.FC<{ 
  step: number, 
  title: string, 
  isActive: boolean, 
  isCompleted: boolean, 
  onEdit: () => void, 
  children: React.ReactNode 
}> = ({ step, title, isActive, isCompleted, onEdit, children }) => {
  return (
    <div className={`border-2 ${isActive ? 'border-brand-dark dark:border-white bg-white/50 dark:bg-white/5 shadow-sm' : 'border-gray-200 dark:border-white/10 bg-transparent'} rounded-[2rem] p-6 transition-all duration-300 overflow-hidden`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isActive ? 'bg-brand-dark text-white dark:bg-white dark:text-brand-dark' : isCompleted ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'}`}>
            {isCompleted && !isActive ? <span className="material-symbols-sharp text-sm">check</span> : step}
          </span>
          <h2 className={`text-xl font-bold transition-colors ${isActive ? 'text-brand-dark dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
            {title}
          </h2>
        </div>
        {isCompleted && !isActive && (
          <button onClick={onEdit} className="text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-2 hover:decoration-primary">
            Edit
          </button>
        )}
      </div>
      
      {/* Content expands when active */}
      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] pt-6 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" as const } }
};

export const CheckoutPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [fulfillment, setFulfillment] = React.useState('delivery');

  const hasDelivery = fulfillment === 'delivery';
  const paymentStepNum = hasDelivery ? 3 : 2;

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      {/* Checkout Header */}
      <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10 px-4 py-4 md:px-8 z-40 fixed top-0 left-0 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="font-serif font-bold text-xl tracking-tight text-brand-dark dark:text-white">Just Matcha<span className="text-primary">.</span></span>
        </Link>
        <Link to="/customize" className="text-sm font-semibold text-slate-500 hover:text-brand-dark dark:hover:text-white transition-colors flex items-center gap-1">
          <span className="material-symbols-sharp text-sm">arrow_back</span>
          Back
        </Link>
      </header>

      <main className="flex-grow container mx-auto px-4 lg:px-12 pt-28 lg:pt-32 pb-32 lg:pb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Column: Guest Details & Payment */}
          <div className="lg:w-3/5 w-full pt-4">
            <header className="space-y-2 mb-10">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-brand-dark dark:text-white">Secure Checkout</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">No account needed. Just pure matcha bliss.</p>
            </header>

            <div className="space-y-4">
              <StepWrapper 
                step={1} 
                title="Fulfillment Method" 
                isActive={activeStep === 1} 
                isCompleted={activeStep > 1} 
                onEdit={() => setActiveStep(1)}
              >
                <PaymentMethod 
                  selected={fulfillment}
                  onSelect={(val) => {
                    setFulfillment(val);
                    // Automatically adjust active step if we are past step 1 and the logic changes
                    if (val === 'pickup' && activeStep > 1) setActiveStep(2);
                  }}
                  onNext={() => setActiveStep(2)} 
                />
              </StepWrapper>

              {hasDelivery && (
                <StepWrapper 
                  step={2} 
                  title="Delivery Details" 
                  isActive={activeStep === 2} 
                  isCompleted={activeStep > 2} 
                  onEdit={() => setActiveStep(2)}
                >
                  <GuestForm onNext={() => setActiveStep(3)} />
                </StepWrapper>
              )}

              <StepWrapper 
                step={paymentStepNum} 
                title="Payment Method" 
                isActive={activeStep === paymentStepNum} 
                isCompleted={activeStep > paymentStepNum} 
                onEdit={() => setActiveStep(paymentStepNum)}
              >
                <PaymentGateway />
              </StepWrapper>
            </div>

            <div className={`pt-8 hidden lg:block transition-all duration-300 ${activeStep === paymentStepNum ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              <Link to="/success" className="w-full bg-black text-white font-bold text-lg py-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-[#1d1d1f]">
                <span>Complete Order</span>
                <span className="material-symbols-sharp">arrow_forward</span>
              </Link>
              <p className="text-center text-xs text-slate-400 mt-4">By placing this order, you agree to our Terms of Service.</p>
            </div>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <OrderSummarySticky />
        </div>
      </main>

      {/* Mobile Sticky CTA */}
      <div className={`lg:hidden fixed bottom-0 left-0 w-full p-4 pb-6 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-background-dark dark:via-background-dark/90 dark:to-transparent flex justify-center z-50 transition-all duration-300 ${activeStep === paymentStepNum ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="w-full max-w-sm flex flex-col gap-2">
          <Link to="/success" className="w-full bg-black text-white font-bold text-lg py-4 rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <span>Complete Order</span>
            <span className="material-symbols-sharp">arrow_forward</span>
          </Link>
          <p className="text-center text-[10px] text-slate-500 font-medium">By placing this order, you agree to our Terms of Service.</p>
        </div>
      </div>
    </motion.div>
  );
};
