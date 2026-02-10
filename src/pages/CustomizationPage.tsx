import React, { useState } from 'react';
import { ProductVisualizer } from '../components/customization/ProductVisualizer';
import { CustomizerControls } from '../components/customization/CustomizerControls';
import { OrderSummaryBar } from '../components/customization/OrderSummaryBar';

export const CustomizationPage: React.FC = () => {
  const [base, setBase] = useState('ceremonial');
  const [sweetness, setSweetness] = useState(50);
  const [collagen, setCollagen] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 bg-pattern pointer-events-none z-0"></div>

      {/* Main Content Grid */}
      <main className="flex-grow z-10 flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-6 gap-8 lg:gap-16 items-start pt-8 pb-32">
        <ProductVisualizer />
        <CustomizerControls
          base={base}
          setBase={setBase}
          sweetness={sweetness}
          setSweetness={setSweetness}
          collagen={collagen}
          setCollagen={setCollagen}
        />
      </main>

      <OrderSummaryBar base={base} collagen={collagen} />
    </div>
  );
};
