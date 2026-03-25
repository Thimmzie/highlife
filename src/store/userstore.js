import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
}));

export const useStore = create((set) => ({
  sleep: 6,
  activity: 5,
  calories: 2000,
  work: 7,

  setSleep: (value) => set({ sleep: value }),
  setActivity: (value) => set({ activity: value }),
  setCalories: (value) => set({ calories: value }),
  setWork: (value) => set({ work: value }),
}));
