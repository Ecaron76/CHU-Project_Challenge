import { Pedometer } from "expo-sensors";
import "react-native-url-polyfill/auto";
import { supabase } from "../supabase/supabase";

export const StepsChallengeService = {
  getAllSteps: async function () {
    let { data: daily_challenge_steps, error } = await supabase
      .from("daily_user_steps")
      .select("count");
      daily_challenge_steps = daily_challenge_steps.reduce((sum, item) => sum + item.count, 0);
      return daily_challenge_steps
  },
   
  getDaySteps: async function () {
    const today = new Date();
  
    let { data: daily_challenge_steps, error } = await supabase
      .from("daily_user_steps")
      .select("count")
      .eq("date", today.toISOString().split("T")[0]);
  
    if (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null; 
    }
  
    const totalStepsForToday = daily_challenge_steps.reduce((sum, item) => sum + item.count, 0);
  
    return totalStepsForToday;
  },
  
  getWeekSteps: async function () {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(today);
    endOfWeek.setDate(endOfWeek.getDate() + (6 - today.getDay()));
    endOfWeek.setHours(23, 59, 59, 999);
  
    let { data: weekly_challenge_steps, error } = await supabase
      .from("daily_user_steps")
      .select("count")
      .gte("date", startOfWeek.toISOString())
      .lte("date", endOfWeek.toISOString());
  
    if (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null; 
    }
  
    const totalStepsForWeek = weekly_challenge_steps.reduce((sum, item) => sum + item.count, 0);
  
    return totalStepsForWeek;
  },
   
  getMonthSteps: async function () {
    const today = new Date()
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
    let { data: monthly_challenge_steps, error } = await supabase
      .from("daily_user_steps")
      .select("count")
      .gte("date", firstDayOfMonth.toISOString().split("T")[0])
      .lte("date", today.toISOString().split("T")[0]);
  
    if (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null; 
    }

    const totalStepsForMonth = monthly_challenge_steps.reduce((sum, item) => sum + item.count, 0);
  
    return totalStepsForMonth;
  }
};
