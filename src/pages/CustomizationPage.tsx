import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CustomizerControls } from '../components/customization/CustomizerControls';
import { Image } from '../components/ui/Image';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" as const } }
};

export const CustomizationPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Customization State (Initialized from URL if present)
  const [customerName, setCustomerName] = useState('');
  const [base, setBase] = useState(searchParams.get('base') || 'ceremonial');
  const [milkType, setMilkType] = useState(searchParams.get('milk') || 'oat');
  const [matchaIntensity, setMatchaIntensity] = useState(parseInt(searchParams.get('intensity') || '50', 10));
  const [sweetener, setSweetener] = useState<string | null>(searchParams.get('sweetener') || null);
  const [sweetnessLevel, setSweetnessLevel] = useState(parseInt(searchParams.get('sweetness') || '50', 10));
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

  // Sync body background color to fix iOS rubber-banding pulling down white space
  useEffect(() => {
    let hex = '#C2E88D'; // default matcha green
    const isDark = document.documentElement.classList.contains('dark');
    
    if (!isDark) {
      if (sweetener === 'biscoff') hex = '#fde68a';
      else if (sweetener === 'caramel') hex = '#fed7aa';
      else if (sweetener === 'vanilla') hex = '#fef08a';
      else if (sweetener === 'white_chocolate') hex = '#e7e5e4';
      else if (sweetener === 'honey') hex = '#fef3c7';
      else if (sweetener === 'date_syrup') hex = '#fdba74';
      else if (sweetener === 'maple_syrup') hex = '#fed7aa';
    } else {
      hex = '#111111'; // Match dark mode body if needed, or dark versions
    }

    const bottomHex = isDark ? '#111111' : '#FDFBF7';
    
    // Set body to the bottom color so Safari tab bar and bottom overscroll are perfect
    document.body.style.backgroundColor = bottomHex;
    document.body.style.transition = 'background-color 1s ease-in-out';
    
    // Use theme-color meta tag to color the top address bar and top overscroll
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', hex);
    
    return () => {
      document.body.style.backgroundColor = '';
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#FDFBF7'); // Reset to default
      }
    };
  }, [sweetener]);

  // Dynamic Cup Filter Logic based on sweetener to tint the liquid
  const cupFilter = useMemo(() => {
    if (!sweetener) return 'none';
    if (sweetener === 'biscoff') return 'contrast(1.1) saturate(1.2)';
    if (sweetener === 'caramel') return 'contrast(1.05) saturate(1.1)';
    if (sweetener === 'vanilla') return 'brightness(1.05)';
    if (sweetener === 'white_chocolate') return 'brightness(1.1) saturate(0.8)';
    if (sweetener === 'date_syrup') return 'contrast(1.1) saturate(1.1) brightness(0.95)';
    if (sweetener === 'honey') return 'saturate(1.2)';
    if (sweetener === 'maple_syrup') return 'contrast(1.05) saturate(1.1)';
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
      
      {/* Minimal Navigation Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 lg:p-8 z-50 flex justify-between items-center pointer-events-none">
        <button onClick={() => navigate(-1)} className="pointer-events-auto w-10 h-10 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-black/10 transition-colors shadow-sm">
          <span className="material-symbols-sharp text-sm ml-1">arrow_back_ios</span>
        </button>
        <button onClick={() => navigate('/checkout')} className="pointer-events-auto w-10 h-10 bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-black/10 transition-colors shadow-sm">
          <span className="material-symbols-sharp text-sm">arrow_forward_ios</span>
        </button>
      </div>

      {/* LEFT SIDE: Visuals (Desktop) / Top Section (Mobile) */}
      <div className="relative w-full h-[45dvh] lg:h-[100dvh] lg:w-1/2 flex flex-col items-center justify-center pointer-events-none z-0 lg:z-10 flex-shrink-0 pt-4 lg:pt-0">
        
        {/* Dynamic Background Text (Cinematic) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden opacity-40 mix-blend-overlay">
          <h1 className="text-[25vw] lg:text-[15vw] leading-[0.8] font-black text-black/20 dark:text-white/20 whitespace-nowrap select-none text-center uppercase tracking-tighter transform -rotate-12 -mt-16 lg:mt-0 transition-all duration-700">
            {backgroundText}
          </h1>
        </div>

        {/* Hero Photorealistic Cup */}
        <div className="relative w-full h-full max-h-[42dvh] lg:max-h-none lg:h-auto max-w-[280px] sm:max-w-[340px] md:max-w-md lg:max-w-2xl xl:max-w-3xl z-10 flex justify-center items-center transform lg:translate-x-8 xl:translate-x-12">
          <Image 
            src="/empty-cup.png"
            alt="Hero Iced Matcha"
            className="w-full h-full object-contain opacity-95 transition-all duration-1000 lg:scale-[1.15]"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              filter: cupFilter 
            }}
            loading="eager"
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
