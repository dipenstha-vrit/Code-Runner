import { create } from "zustand";

export const useActiveStore = create((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));

export const useThemeStore = create((set) => ({
  themeIndex: 0,
  setThemeIndex: (theme) => set({ themeIndex: theme }),
}));
