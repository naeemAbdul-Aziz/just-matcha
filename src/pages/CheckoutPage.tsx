import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GuestForm, type GuestFormData } from '../components/checkout/GuestForm';
import { PaymentMethod } from '../components/checkout/PaymentMethod';
import { usePaystackPayment } from 'react-paystack';
import { OrderSummarySticky } from '../components/checkout/OrderSummarySticky';
import { getMenuItemById, formatPrice, MENU_ITEMS } from '../lib/menuData';
import { saveOrder } from '../lib/orderStore';

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

// Boost prices in GH₵
const BOOST_PRICES: Record<string, number> = {
  collagen: 25,
  maca: 15,
  ashwagandha: 20,
};

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeStep = parseInt(searchParams.get('step') || '1', 10);

  const setActiveStep = (step: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev.toString());
      next.set('step', step.toString());
      return next;
    });
  };

  // Fulfillment method
  const [fulfillment, setFulfillment] = React.useState<'delivery' | 'pickup'>('delivery');
  const hasDelivery = fulfillment === 'delivery';

  // Guest form state — lifted here so we can read it in Paystack config
  const [guestData, setGuestData] = React.useState<GuestFormData>({
    name: decodeURIComponent(searchParams.get('name') || ''),
    email: '',
    phone: '',
    city: '',
    address: '',
  });

  // Quantity state — lifted here so Paystack gets correct amount
  const [quantity, setQuantity] = React.useState(1);

  // Get drink selection from URL params (passed from customizer)
  const drinkId = searchParams.get('drink') || 'maple-moments';
  const selectedDrink = getMenuItemById(drinkId) || MENU_ITEMS[0];

  // Parse boost selections from URL
  const boostParam = searchParams.get('boosts') || '';
  const boosts: Record<string, boolean> = {};
  if (boostParam) {
    boostParam.split(',').forEach((b) => { if (b) boosts[b] = true; });
  }

  // Parse other customization params
  const milkType = searchParams.get('milk') || 'oat';
  const sweetener = searchParams.get('sweetener') || null;
  const sweetnessLevel = parseInt(searchParams.get('sweetness') || '50', 10);
  const matchaIntensity = parseInt(searchParams.get('intensity') || '50', 10);
  const cupMessage = decodeURIComponent(searchParams.get('message') || '');

  // Calculate dynamic total including quantity
  const boostTotal = Object.entries(boosts)
    .filter(([, active]) => active)
    .reduce((sum, [id]) => sum + (BOOST_PRICES[id] || 0), 0);
  const unitAmount = selectedDrink.price + boostTotal;
  const totalAmount = unitAmount * quantity;
  const totalAmountPesewas = totalAmount * 100; // Convert to pesewas for Paystack

  // Paystack Integration
  const config = {
    reference: `JM-${Date.now()}`,
    email: guestData.email || 'guest@justmatcha.co',
    amount: totalAmountPesewas,
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_dc8fb16223b361a995eefc4a5c9527ec3c3836a5',
    currency: 'GHS',
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    initializePayment({
      onSuccess: (transaction) => {
        // Persist order to localStorage so admin can see it
        const savedOrder = saveOrder({
          customer: {
            name: guestData.name || 'Guest',
            email: guestData.email,
            phone: guestData.phone,
            city: guestData.city,
            address: guestData.address,
          },
          drink: {
            id: selectedDrink.id,
            name: selectedDrink.name,
            price: selectedDrink.price,
          },
          customizations: {
            milkType,
            sweetener,
            sweetnessLevel,
            matchaIntensity,
            boosts,
            cupMessage,
          },
          fulfillment,
          quantity,
          boostTotal,
          totalAmount,
          status: 'Pending',
          paymentRef: (transaction as { reference?: string })?.reference || config.reference,
        });

        // Pass real order data to success page
        navigate('/success', { state: { order: savedOrder } });
      },
      onClose: () => {
        console.log('Payment modal closed');
      },
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
        <div className="w-full max-w-2xl mx-auto pt-4 relative">
          
          {/* Step Indicators */}
          <div className="flex items-center gap-3 mb-16 w-full max-w-sm mx-auto">
            {[1, 2, hasDelivery ? 3 : null].filter(Boolean).map((step, index, arr) => {
              const isActive = activeStep === step;
              const isPast = activeStep > (step as number);
              return (
                <React.Fragment key={step}>
                  <div className={`w-3 h-3 flex-shrink-0 rounded-full transition-all duration-500 ${isActive ? 'bg-primary scale-125' : isPast ? 'bg-primary/40' : 'bg-gray-200 dark:bg-white/10'}`}></div>
                  {index < arr.length - 1 && (
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
                    onSelect={(val) => setFulfillment(val as 'delivery' | 'pickup')}
                    onNext={() => setActiveStep(2)} 
                  />
                </motion.div>
              )}

              {activeStep === 2 && hasDelivery && (
                <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                  <GuestForm
                    data={guestData}
                    onChange={setGuestData}
                    onNext={() => setActiveStep(3)}
                  />
                </motion.div>
              )}

              {((!hasDelivery && activeStep === 2) || (hasDelivery && activeStep === 3)) && (
                <motion.div key="stepFinal" variants={stepVariants} initial="initial" animate="animate" exit="exit" className="w-full">
                  <OrderSummarySticky 
                    drinkName={selectedDrink.name}
                    drinkPrice={selectedDrink.price}
                    boosts={boosts}
                    quantity={quantity}
                    onQuantityChange={setQuantity}
                    actionText={`Pay ${formatPrice(totalAmount)}`}
                    actionIcon="credit_card"
                    onAction={handlePayment}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </motion.div>
  );
};
