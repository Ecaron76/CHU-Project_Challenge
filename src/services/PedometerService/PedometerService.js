import { Pedometer } from 'expo-sensors';


export const PedometerService = {
    // méthode qui récupère les pas de l'utilisateur via expoPedometer entre 0h0m0s et 23h59m59s du jour.
    getDailySteps: async function() {

        const isAvailable = await Pedometer.isAvailableAsync();

        const startOfDay = new Date();
        startOfDay.setUTCHours(0,0,0,0);

        var endOfDay = new Date();
        endOfDay.setUTCHours(23,59,59,0);

        let pastStepCountResult = await Pedometer.getStepCountAsync(startOfDay, endOfDay);
        
        return pastStepCountResult.steps;
        
    },

  } 