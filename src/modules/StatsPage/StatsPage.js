import {View, Button, Text} from 'react-native';
import { StepsChallengeService } from '../../services/StepsChallengeService/StepsChallengeService';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Indicator from '../shared/Indicator';

export default function StatsPage() {
    const [allSteps, setAllSteps] = useState();
    const [daySteps, setDaySteps] = useState();
    const [weekSteps, setWeekSteps] = useState();
    const [monthSteps, setMonthSteps] = useState();
    const isFocused = useIsFocused();

    useEffect(() => {
        if(isFocused){ 
            getAllSteps()
            getWeekSteps()
            getDaySteps()
            getMonthSteps()
        }
    }, [isFocused]);
    const getAllSteps = async () => {

        // stepsData est un tableau qui contient 3 tableaux => 1- les 5 derniers mois / 2- les 5 dernières semaines / 3- les 5 derniers jours. 
        const stepsData = await StepsChallengeService.getAllSteps();

        // Contient le tableau de données necessaire pour remplir le composant graphique de pas. C'est un tableau qui contient trois tableau. 
        //1) les mois 2) les semaines 3) les jours.
        
        setAllSteps(stepsData)
    }; 
    const getWeekSteps = async () => {

        // stepsData est un tableau qui contient 3 tableaux => 1- les 5 derniers mois / 2- les 5 dernières semaines / 3- les 5 derniers jours. 
        const stepsData = await StepsChallengeService.getWeekSteps();

        // Contient le tableau de données necessaire pour remplir le composant graphique de pas. C'est un tableau qui contient trois tableau. 
        //1) les mois 2) les semaines 3) les jours.
        
        setWeekSteps(stepsData)
    }; 
    const getDaySteps = async () => {

        // stepsData est un tableau qui contient 3 tableaux => 1- les 5 derniers mois / 2- les 5 dernières semaines / 3- les 5 derniers jours. 
        const stepsData = await StepsChallengeService.getDaySteps();

        // Contient le tableau de données necessaire pour remplir le composant graphique de pas. C'est un tableau qui contient trois tableau. 
        //1) les mois 2) les semaines 3) les jours.
        
        setDaySteps(stepsData)
    }; 
    const getMonthSteps = async () => {

        // stepsData est un tableau qui contient 3 tableaux => 1- les 5 derniers mois / 2- les 5 dernières semaines / 3- les 5 derniers jours. 
        const stepsData = await StepsChallengeService.getMonthSteps();

        // Contient le tableau de données necessaire pour remplir le composant graphique de pas. C'est un tableau qui contient trois tableau. 
        //1) les mois 2) les semaines 3) les jours.
        
        setMonthSteps(stepsData)
    }; 
    
    return (
        <View style={{width: '100%', height: '100%', padding:10}}>
            <Text style={{fontSize:25, fontWeight: 'bold', textAlign:'center', marginBottom:20}}> Accomplissement du challenge</Text>
            <View style={{gap:20}}>
                <Indicator textIndicator="pas totaux" valueIndicator={allSteps}/>
                <Indicator textIndicator="pas ce mois-ci" valueIndicator={monthSteps}/>
                <Indicator textIndicator="pas cette semaine" valueIndicator={weekSteps}/>
                <Indicator textIndicator="pas aujourd'hui" valueIndicator={daySteps}/>
            </View>
        </View>
    );
}