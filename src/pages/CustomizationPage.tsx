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

  // Dynamic Cinematic Background Text
  const backgroundText = useMemo(() => {
    let line1 = 'ICED';
    let line2 = base === 'ceremonial' ? 'CEREMONIAL' : 'MATCHA';
    let line3 = milkType === 'water' ? 'WATER' : 'LATTE';

    if (sweetener) {
      if (sweetener === 'maple_syrup') line1 = 'MAPLE';
      else if (sweetener === 'date_syrup') line1 = 'DATE';
      else if (sweetener === 'white_chocolate') line1 = 'WHITE CHOC';
      else line1 = sweetener.toUpperCase();
    } else if (milkType !== 'water' && milkType !== 'whole') {
       line1 = milkType.toUpperCase();
    }

    return (
      <>
        {line1}<br/>{line2}<br/>{line3}
      </>
    );
  }, [base, sweetener, milkType]);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className={`h-[100dvh] w-full overflow-hidden transition-colors duration-1000 ease-in-out ${bgColor} relative flex flex-col lg:flex-row font-display`}>
      
      {/* Top Header / Back Button */}
      <div className="absolute top-0 left-0 w-full p-4 z-40 flex justify-between items-center mt-4 md:mt-8">
         <div className="flex items-center gap-4 ml-4 lg:ml-8">
           <button onClick={() => navigate('/')} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-text-dark dark:text-white flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm">
              <span className="material-symbols-sharp">arrow_back</span>
           </button>
           <span className="font-serif font-bold text-2xl tracking-tight text-text-dark dark:text-white hidden lg:block bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">Just Matcha<span className="text-primary">.</span></span>
         </div>
      </div>

      {/* LEFT SIDE: Visuals (Desktop) / Top Section (Mobile) */}
      <div className="relative w-full h-[45dvh] lg:h-[100dvh] lg:w-1/2 flex flex-col items-center justify-center pointer-events-none z-0 lg:z-10 flex-shrink-0 pt-16 lg:pt-0">
        
        {/* Dynamic Background Text (Cinematic) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden opacity-40 mix-blend-overlay">
          <h1 className="text-[25vw] lg:text-[15vw] leading-[0.8] font-black text-black/20 dark:text-white/20 whitespace-nowrap select-none text-center uppercase tracking-tighter transform -rotate-12 -mt-16 lg:mt-0 transition-all duration-700">
            {backgroundText}
          </h1>
        </div>

        {/* Hero Photorealistic Cup */}
        <div className="absolute top-12 md:top-16 lg:relative lg:top-0 w-full max-w-[280px] sm:max-w-[340px] md:max-w-md lg:max-w-2xl xl:max-w-3xl z-10 flex justify-center transform lg:translate-x-8 xl:translate-x-12">
          <img 
            src="/cup.png"
            alt="Hero Iced Matcha"
            className="w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal opacity-95 transition-all duration-1000 lg:scale-[1.15]"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              filter: cupFilter 
            }}
          />
        </div>
      </div>

      {/* RIGHT SIDE: Scrolling Bottom Sheet / Sidebar */}
      <div className="relative z-30 flex-grow lg:w-1/2 w-full lg:h-[100dvh] h-[55dvh]">
         <div className="w-full h-full lg:max-w-none bg-[#FDFBF7] dark:bg-[#111111] rounded-t-[2.5rem] lg:rounded-none shadow-[0_-8px_32px_rgba(0,0,0,0.08)] lg:shadow-none flex flex-col relative lg:border-l border-white/50 dark:border-white/10 transition-colors duration-1000 overflow-hidden">
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
