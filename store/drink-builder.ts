import { create } from "zustand";

export interface DrinkCustomization {
  matchaLevel: number; // 0-100
  size?: "small" | "medium" | "large";
  ice?: "no-ice" | "light" | "regular" | "extra";
  extras?: string[];
}

interface DrinkBuilderState {
  customization: DrinkCustomization;
  setMatchaLevel: (level: number) => void;
  setSize: (size: DrinkCustomization["size"]) => void;
  setIce: (ice: DrinkCustomization["ice"]) => void;
  addExtra: (extra: string) => void;
  removeExtra: (extra: string) => void;
  reset: () => void;
}

const defaultCustomization: DrinkCustomization = {
  matchaLevel: 50,
  size: "medium",
  ice: "regular",
  extras: [],
};

export const useDrinkBuilder = create<DrinkBuilderState>((set) => ({
  customization: defaultCustomization,
  
  setMatchaLevel: (level) =>
    set((state) => ({
      customization: { ...state.customization, matchaLevel: level },
    })),
  
  setSize: (size) =>
    set((state) => ({
      customization: { ...state.customization, size },
    })),
  
  setIce: (ice) =>
    set((state) => ({
      customization: { ...state.customization, ice },
    })),
  
  addExtra: (extra) =>
    set((state) => ({
      customization: {
        ...state.customization,
        extras: [...(state.customization.extras || []), extra],
      },
    })),
  
  removeExtra: (extra) =>
    set((state) => ({
      customization: {
        ...state.customization,
        extras: state.customization.extras?.filter((e) => e !== extra) || [],
      },
    })),
  
  reset: () => set({ customization: defaultCustomization }),
}));
