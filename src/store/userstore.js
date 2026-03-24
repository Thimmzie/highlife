// store/userstore.js
import { create } from 'zustand';

// User auth store
export const useUserStore = create((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
}));

// Main dashboard state store
export const useStore = create((set) => ({
  // Raw state
  sleep: 6,
  activity: 5,
  calories: 2000,
  work: 7,

  // Setters
  setSleep: (value) => set({ sleep: value }),
  setActivity: (value) => set({ activity: value }),
  setCalories: (value) => set({ calories: value }),
  setWork: (value) => set({ work: value }),
}));
