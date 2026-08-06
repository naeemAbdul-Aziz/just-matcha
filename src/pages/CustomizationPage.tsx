import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CustomizerControls } from '../components/customization/CustomizerControls';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" as const } }
};
export const CustomizationPage: React.FC = () => {
  const [base, setBase] = useState('ceremonial');
  const [flavors, setFlavors] = useState<Record<string, number>>({});
  const [customerName, setCustomerName] = useState('');
  const [cupMessage, setCupMessage] = useState('');
  const [collagen, setCollagen] = useState(false);
  const [milkLevel, setMilkLevel] = useState(50);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 bg-pattern pointer-events-none z-0"></div>

      {/* Main Content Area */}
      <main className="flex-grow z-10 max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 pt-32 pb-12">
        <CustomizerControls
          base={base}
          setBase={setBase}
          flavors={flavors}
          setFlavors={setFlavors}
          customerName={customerName}
          setCustomerName={setCustomerName}
          cupMessage={cupMessage}
          setCupMessage={setCupMessage}
          collagen={collagen}
          setCollagen={setCollagen}
          milkLevel={milkLevel}
          setMilkLevel={setMilkLevel}
        />
      </main>
    </motion.div>
  );
};
