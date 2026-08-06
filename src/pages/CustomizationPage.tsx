import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CustomizerControls } from '../components/customization/CustomizerControls';
import { useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } }
};

export const CustomizationPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Card 1 State
  const [customerName, setCustomerName] = useState('');
  const [base, setBase] = useState('ceremonial');
  
  // Card 2 State
  const [milkType, setMilkType] = useState('oat');
  const [matchaIntensity, setMatchaIntensity] = useState(50);
  
  // Card 3 State
  const [sweetener, setSweetener] = useState<string | null>(null);
  const [sweetnessLevel, setSweetnessLevel] = useState(50);
  
  // Card 4 State
  const [boosts, setBoosts] = useState<Record<string, boolean>>({});
  
  // Card 5 State
  const [cupMessage, setCupMessage] = useState('');

  // Dynamic Background Logic based on single sweetener
  const bgColor = useMemo(() => {
    if (!sweetener) return 'bg-[#C2E88D] dark:bg-[#2A3B22]'; // Default Matcha Green
    
    // Treat Syrups
    if (sweetener === 'biscoff') return 'bg-amber-200 dark:bg-amber-900/40';
    if (sweetener === 'caramel') return 'bg-orange-200 dark:bg-orange-900/40';
    if (sweetener === 'vanilla') return 'bg-yellow-100 dark:bg-yellow-900/40';
    if (sweetener === 'white_chocolate') return 'bg-stone-200 dark:bg-stone-900/40';
    
    // Natural Sweeteners
    if (sweetener === 'honey') return 'bg-amber-100 dark:bg-amber-800/40';
    if (sweetener === 'date_syrup') return 'bg-orange-300 dark:bg-orange-950/40';
    if (sweetener === 'maple_syrup') return 'bg-orange-200 dark:bg-orange-800/40';

    return 'bg-[#C2E88D] dark:bg-[#2A3B22]';
  }, [sweetener]);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className={`min-h-[100dvh] w-full transition-colors duration-1000 ease-in-out ${bgColor} relative overflow-hidden flex flex-col lg:flex-row font-display`}>
      
      {/* Top Header / Back Button */}
      <div className="absolute top-0 left-0 w-full p-6 z-40 flex justify-between items-center mt-16 md:mt-20">
         <button onClick={() => navigate('/')} className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-brand-dark flex items-center justify-center hover:bg-white/50 transition-colors shadow-sm">
            <span className="material-symbols-sharp">arrow_back</span>
         </button>
      </div>

      {/* LEFT SIDE: Visuals (Desktop) / Background (Mobile) */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:w-1/2 lg:h-[100dvh] flex flex-col items-center justify-center pointer-events-none z-0 lg:z-10">
        
        {/* Cinematic Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden opacity-40 mix-blend-overlay">
          <h1 className="text-[25vw] lg:text-[15vw] leading-[0.8] font-black text-black/20 dark:text-white/20 whitespace-nowrap select-none text-center uppercase tracking-tighter transform -rotate-12 mt-20 lg:mt-0">
            ICED<br/>MATCHA<br/>LATTE
          </h1>
        </div>

        {/* Hero Photorealistic Cup */}
        <div className="absolute top-24 md:top-12 lg:relative lg:top-0 w-full max-w-[280px] md:max-w-sm lg:max-w-md z-10 flex justify-center mt-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcmBY4XMl9RvhxT_ajgjv_H-y-rMnmSZs_Qd2Tda-DZZwSfd3L7aTWfe81EKVEk0RZKZkXk-vPFSLbQkYDpryu2bow1sI3X-tsjtGSnZV2IgV1FbFsqBr1kGmkRvrhjYYqXp3Lc5iLtTY3rdIz1atgHZNu64pYB_KBQ-NO7HoeGq7fe7ecUkoQ44wC59iYWa-bn7Fy1ZUr8H2bTYegx000FJRdB19rpN9XK9SncZcvw6i5UWdwE--EUcvC8xMTPyX0YOukWYIPBI"
            alt="Hero Iced Matcha"
            className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal opacity-90 transition-transform duration-1000 scale-110 lg:scale-100"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          />
        </div>
      </div>

      {/* RIGHT SIDE: Interactive Drawer / Cards */}
      <div className="relative z-30 mt-auto lg:mt-0 w-full max-w-[600px] lg:max-w-none lg:w-1/2 mx-auto lg:mx-0 px-4 lg:px-12 xl:px-24 pb-6 lg:pb-0 h-[70dvh] min-h-[500px] lg:h-[100dvh] lg:flex lg:items-center lg:justify-center">
         <div className="w-full h-full lg:h-[80dvh] lg:min-h-[600px] lg:max-h-[800px] lg:max-w-[550px] relative">
           <CustomizerControls
             customerName={customerName}
             setCustomerName={setCustomerName}
             base={base}
             setBase={setBase}
             milkType={milkType}
             setMilkType={setMilkType}
             matchaIntensity={matchaIntensity}
             setMatchaIntensity={setMatchaIntensity}
             sweetener={sweetener}
             setSweetener={setSweetener}
             sweetnessLevel={sweetnessLevel}
             setSweetnessLevel={setSweetnessLevel}
             boosts={boosts}
             setBoosts={setBoosts}
             cupMessage={cupMessage}
             setCupMessage={setCupMessage}
           />
         </div>
      </div>

    </motion.div>
  );
};
