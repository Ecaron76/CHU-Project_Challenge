import { create } from 'zustand'

export const loginStore = create((set) => ({
    // bears: 0,
    // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    // removeAllBears: () => set({ bears: 0 }),
    isLogged: false,
    setIsLogged: (value) => set((state)=>({isLogged: value})),
    id:"",
    setId: (enteredId) => set((state) => ({ id: enteredId  })),
    password:"",
    setPassword: (enteredPassword) => set((state) => ({ password: enteredPassword })),
  }))