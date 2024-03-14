import { Pedometer } from 'expo-sensors';
import 'react-native-url-polyfill/auto'
import { supabase } from "../supabase/supabase";
import { loginStore } from "../../store/loginStore";
import {
    initialize,
    requestPermission,
    readRecords,
  } from 'react-native-health-connect';
  

export const PedometerService = {
    // méthode qui récupère les pas de l'utilisateur via expoPedometer entre 0h0m0s et 23h59m59s du jour.
    getDailySteps: async function() {
        const isAvailable = await Pedometer.isAvailableAsync();

        let startOfDay = new Date();
        startOfDay.setUTCHours(0, 0, 0, 0);
    
        let endOfDay = new Date();
        endOfDay.setUTCHours(23, 59, 59, 0);
    
        // Si Android
        if (Platform.OS === 'android') {
    
          // initialize the client
          const isInitialized = await initialize();
    
          // request permissions
          const grantedPermissions = await requestPermission([
            { accessType: 'read', recordType: 'Steps' },
          ]);
    
          const result = await readRecords('Steps', {
            timeRangeFilter: {
              operator: 'between',
              startTime: startOfDay.toISOString(),
              endTime: endOfDay.toISOString(),
            },
          });
    
          return result.length === 0 ? 0 : result.reduce((acc, objet) => acc + objet.count, 0);
          
        } else { // Si IOS
    
          let pastStepCountResult = await Pedometer.getStepCountAsync(
            startOfDay,
            endOfDay
          );
      
          return pastStepCountResult.steps;
        }
        

    },
    // méthode qui enregistre les pas en base de données.
    saveSteps: async function(stepsCount, chuId, pkId, challengeId ) {
        try {
            const now = new Date();
            const todayDate = now.toJSON().substring(0,10)
            
            const noStepsForToday = await this.checkIfDataForDayExist(todayDate, pkId);
            
            // Si pas d'entrée pour la journée on créer une nouvelle ligne.
            if (noStepsForToday) {
                await this.insertSteps(stepsCount, todayDate, pkId, challengeId);
            }
            else { // Si déja une entrée pour la journée on update 
                await this.updateSteps(stepsCount, todayDate, pkId, challengeId);
            }

        } catch (error) {

        }
    },
    // méthode qui insert les pas d'un user en base.
    insertSteps: async function(stepsCount, todayDate, pkId, challengeId) {
        
        try {
            const { data, error } = await supabase
            .from('daily_user_steps')
            .insert({date: todayDate, count: stepsCount, challenge_id: challengeId, user_id: pkId})
            .select()

        } catch (error) {
            console.log(error);

        }
    },
    // méthode qui update les pas d'un user en base.
    updateSteps: async function(stepsCount, todayDate, pkId, challengeId) {
        
        try {
            const { data, error } = await supabase
            .from('daily_user_steps')
            .update({count: stepsCount})
            .eq('user_id', pkId)
            .eq('challenge_id', challengeId)
            .eq('date', todayDate)
            
        } catch (error) {
            console.log(error);

        }
    },
    // vérifie si il y à déja une ligne contenant des pas pour la journée.
    checkIfDataForDayExist: async function(todayDate, pkId) {
        try {

            let { data: dailySteps, error } = await supabase
                .from('daily_user_steps')
                .select('*')
                .eq('user_id', pkId)
                .eq('date', todayDate)
            
            return dailySteps.length === 0 ? true : false;

        } catch (error) {
            console.log(error);

        }
    },



  } 