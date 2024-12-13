import { create } from "zustand";

export const useActiveStore = create((set) => ({
  activeIndex: 1,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
