import { Pedometer } from "expo-sensors";
import "react-native-url-polyfill/auto";
import { supabase } from "../supabase/supabase";


export const StepsChallengeService = {
  getAllSteps: async function (challengeId) {

    console.log(challengeId);

      const { data, error } = await supabase.rpc('get_steps_challenge_total_count',{id_param: challengeId});

      if (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return null; 
      }

      return data;
  },
  getDaySteps: async function (challengeId) {

    const { data, error } = await supabase.rpc('get_steps_challenge_day_count',{id_param: challengeId});

    if (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null; 
    }
  
    return data;
  },
  getWeekSteps: async function () {

    // Afficher du lundi du début de semaine au jour actuel de la semaine.
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(today);
    endOfWeek.setDate(endOfWeek.getDate() + (6 - today.getDay()));
    endOfWeek.setHours(23, 59, 59, 999);

    console.log(startOfWeek);
    console.log(endOfWeek);

    // const { data, error } = await supabase.rpc('get_steps_challenge_day_count',{id_param: 1, ... startOfWeek, ... endOfWeek });

    // if (error) {
    //   console.error("Erreur lors de la récupération des données :", error);
    //   return null; 
    // }
  
    //return data;
    
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
