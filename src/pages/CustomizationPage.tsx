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
  
  // Customization State
  const [customerName, setCustomerName] = useState('');
  const [base, setBase] = useState('ceremonial');
  const [milkType, setMilkType] = useState('oat');
  const [matchaIntensity, setMatchaIntensity] = useState(50);
  const [sweetener, setSweetener] = useState<string | null>(null);
  const [sweetnessLevel, setSweetnessLevel] = useState(50);
  const [boosts, setBoosts] = useState<Record<string, boolean>>({});
  const [cupMessage, setCupMessage] = useState('');

  // Dynamic Background Logic based on sweetener
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

  // Dynamic Cup Filter Logic based on sweetener to tint the liquid
  const cupFilter = useMemo(() => {
    if (!sweetener) return 'none';
    if (sweetener === 'biscoff') return 'sepia(0.6) hue-rotate(-20deg) saturate(1.5)';
    if (sweetener === 'caramel') return 'sepia(0.4) hue-rotate(-15deg) saturate(1.2)';
    if (sweetener === 'vanilla') return 'sepia(0.2) saturate(0.8)';
    if (sweetener === 'white_chocolate') return 'brightness(1.1) saturate(0.7)';
    if (sweetener === 'date_syrup') return 'sepia(0.5) hue-rotate(-30deg) brightness(0.9)';
    if (sweetener === 'honey') return 'sepia(0.3) hue-rotate(-10deg) saturate(1.3)';
    if (sweetener === 'maple_syrup') return 'sepia(0.4) hue-rotate(-25deg) saturate(1.2)';
    return 'none';
  }, [sweetener]);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className={`h-[100dvh] w-full transition-colors duration-1000 ease-in-out ${bgColor} relative overflow-hidden flex flex-col lg:flex-row font-display`}>
      
      {/* Top Header / Back Button */}
      <div className="absolute top-0 left-0 w-full p-4 z-40 flex justify-between items-center mt-12 md:mt-16">
         <button onClick={() => navigate('/')} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-brand-dark flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm ml-4 lg:ml-8">
            <span className="material-symbols-sharp">arrow_back</span>
         </button>
      </div>

      {/* LEFT SIDE: Visuals (Desktop) / Top Section (Mobile) */}
      <div className="relative w-full h-[40dvh] lg:h-[100dvh] lg:w-1/2 flex flex-col items-center justify-center pointer-events-none z-0 lg:z-10 flex-shrink-0">
        
        {/* Cinematic Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden opacity-40 mix-blend-overlay">
          <h1 className="text-[25vw] lg:text-[15vw] leading-[0.8] font-black text-black/20 dark:text-white/20 whitespace-nowrap select-none text-center uppercase tracking-tighter transform -rotate-12 mt-12 lg:mt-0">
            ICED<br/>MATCHA<br/>LATTE
          </h1>
        </div>

        {/* Hero Photorealistic Cup */}
        <div className="absolute top-20 md:top-12 lg:relative lg:top-0 w-full max-w-[200px] sm:max-w-[240px] md:max-w-xs lg:max-w-md z-10 flex justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcmBY4XMl9RvhxT_ajgjv_H-y-rMnmSZs_Qd2Tda-DZZwSfd3L7aTWfe81EKVEk0RZKZkXk-vPFSLbQkYDpryu2bow1sI3X-tsjtGSnZV2IgV1FbFsqBr1kGmkRvrhjYYqXp3Lc5iLtTY3rdIz1atgHZNu64pYB_KBQ-NO7HoeGq7fe7ecUkoQ44wC59iYWa-bn7Fy1ZUr8H2bTYegx000FJRdB19rpN9XK9SncZcvw6i5UWdwE--EUcvC8xMTPyX0YOukWYIPBI"
            alt="Hero Iced Matcha"
            className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal opacity-90 transition-all duration-1000 lg:scale-100"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              filter: cupFilter 
            }}
          />
        </div>
      </div>

      {/* RIGHT SIDE: Scrolling Bottom Sheet / Sidebar */}
      <div className="relative z-30 flex-grow lg:w-1/2 w-full lg:h-[100dvh] lg:flex lg:items-center lg:justify-center overflow-hidden">
         <div className="w-full h-full lg:h-[90dvh] lg:max-w-[550px] bg-white dark:bg-[#111111] rounded-t-[2rem] lg:rounded-[2.5rem] shadow-2xl flex flex-col relative lg:border border-gray-100 dark:border-white/10 lg:mr-8 xl:mr-16">
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
