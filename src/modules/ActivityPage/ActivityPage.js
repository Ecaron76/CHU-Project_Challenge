import { View, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import { PedometerService } from '../../services/PedometerService/PedometerService';

import Indicator from './components/Indicator'
import RingProgress from './components/RingProgresss'
// import useHealthData from '../../hooks/useHealthData';

const ActivityPage = () => {

  const [dailySteps, setDailySteps] = useState(0);

  useEffect(() => {

    loadData();

  }, []);

  // méthode qui appelle getPedometerData toutes les 10 secondes.
  const loadData = async () => {

    await getPedometerData();

    const interval = setInterval(async () => {
      await getPedometerData();
    }, 2000);

    return () => clearInterval(interval);
    
  };

  // Fonction qui récupère les pas de l'utilisateur en appelant le service PedometerService.
  const getPedometerData = async () => {
    const stepsNumber = await PedometerService.getDailySteps();
    setDailySteps(stepsNumber);         
  }

  // const [date, setDate] = useState(new Date());
  // const { steps, flights, distance } = useHealthData(date);

  // const changeDate = (numDays) => {
  //   const currentDate = new Date(date); // Create a copy of the current date
  //   // Update the date by adding/subtracting the number of days
  //   currentDate.setDate(currentDate.getDate() + numDays);

  //   setDate(currentDate); // Update the state variable
  // };
  

  return (
    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={stylesHome.podometerContainer}>
        <RingProgress progress={dailySteps/10000} />
      </View>
      <View style={stylesHome.indicatorsContainer}>
        <Indicator iconIndicator={require('../../../assets/images/home/pas.png')} textIndicator="pas aujourd'hui" valueIndicator={dailySteps} iconLevel={require('../../../assets/images/flame/rabbit-3.png')} />
        <Indicator iconIndicator={require('../../../assets/images/home/path-road_black.png')} textIndicator='Km parcourus' valueIndicator={dailySteps/1000} />
      </View>
    </View>
  );
};

export default ActivityPage;

const stylesHome = StyleSheet.create({
    podometerContainer: {
      width: '95%',
      height:'63%',
      marginBottom: 20,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.60,
      shadowRadius: 1.51,
      elevation: 1
    },
    indicatorsContainer: {
        gap:10,
        width: '95%',
    }
});
