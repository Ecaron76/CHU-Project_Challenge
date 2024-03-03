import { Pedometer } from "expo-sensors";
import "react-native-url-polyfill/auto";
import { supabase } from "../supabase/supabase";


export const StepsChallengeService = {
  getAllSteps: async function (challengeId) {
    

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
    startOfWeek.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() +6);
    

    const { data, error } = await supabase.rpc('get_steps_challenge_week_count', {
        id_param: 1,
        start_of_week: startOfWeek,
        end_of_week: endOfWeek
      });
    
    if (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null; 
    }
  
    return data;
    
  },
  getMonthSteps: async function () {
    const startOfMonth = new Date();
    startOfMonth.setDate(1); 
    startOfMonth.setHours(0, 0, 0, 0);

    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1); 
    endOfMonth.setDate(endOfMonth.getDate() - 1);
    endOfMonth.setHours(23, 59, 59, 999);
    

    const { data, error } = await supabase.rpc('get_steps_challenge_month_count', {
        id_param: 1,
        start_of_month: startOfMonth,
        end_of_month: endOfMonth,
    });
    

    if (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return null;
    }

    return data;
    }
}
