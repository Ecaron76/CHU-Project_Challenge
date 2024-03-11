import { create } from 'zustand'
import {lightTheme} from "../modules/shared/Theme";

export const themeStore = create((set) => ({
    appTheme: lightTheme,
    setAppTheme: (value) => set((state) => ({ ...state, appTheme: value })),
    toggle: false,
    setToggle: (value) => set((state) => ({ ...state, toggle: value })),
  }))