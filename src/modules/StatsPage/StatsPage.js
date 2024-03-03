import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { StepsChallengeService } from '../../services/StepsChallengeService/StepsChallengeService';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Indicator from '../shared/Indicator';
import Chart from '../shared/Chart';
import { loginStore } from "../../store/loginStore";


export default function StatsPage() {

    const {challengeId} = loginStore();
    const [selectedOption, setSelectedOption] = useState('mois');
    const [allSteps, setAllSteps] = useState();
    const [daySteps, setDaySteps] = useState();
    const [weekSteps, setWeekSteps] = useState();
    const [monthSteps, setMonthSteps] = useState();
    const isFocused = useIsFocused();

    useEffect(() => {
        console.log(challengeId);

        if(isFocused){ 
            getAllSteps(challengeId)
            getWeekSteps()
            getDaySteps(challengeId)
            getMonthSteps()
        }
    }, [isFocused]);
    const getAllSteps = async (challengeId) => {

        // stepsData est un tableau qui contient 3 tableaux => 1- les 5 derniers mois / 2- les 5 dernières semaines / 3- les 5 derniers jours. 
        const stepsData = await StepsChallengeService.getAllSteps(challengeId);

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
    const getDaySteps = async (challengeId) => {

        // stepsData est un tableau qui contient 3 tableaux => 1- les 5 derniers mois / 2- les 5 dernières semaines / 3- les 5 derniers jours. 
        const stepsData = await StepsChallengeService.getDaySteps(challengeId);

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
    const handleOptionPress = (option) => {
        setSelectedOption(option);
        
    };
    return (
        <View style={{width: '100%', height: '100%', padding:10, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 'bold', textAlign:'center', marginBottom:20}}> Accomplissement du challenge</Text>
            <View style={{gap:20, width:"100%"}}>
                <Indicator textIndicator="pas totaux" valueIndicator={allSteps}/>
                <Indicator textIndicator="pas ce mois-ci" valueIndicator={monthSteps}/>
                <Indicator textIndicator="pas cette semaine" valueIndicator={weekSteps}/>
                <Indicator textIndicator="pas aujourd'hui" valueIndicator={daySteps}/>
            </View>
            <View style={{width:'70%', alignItems:'center', }}>
                <View style={stylesStats.testa}>
                    <TouchableOpacity
                        style={[
                            stylesStats.option,
                            selectedOption === 'jours' && stylesAccount.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('jours')}
                    >
                        <Text style={[
                            stylesStats.optionText,
                            selectedOption === 'jours' && stylesAccount.selectedOptionText,
                        ]}>Jours</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            stylesStats.option,
                            selectedOption === 'semaines' && stylesStats.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('semaines')}
                    >
                        <Text style={[
                            stylesStats.optionText,
                            selectedOption === 'semaines' && stylesStats.selectedOptionText,
                        ]}>Semaines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            stylesStats.option,
                            selectedOption === 'mois' && stylesStats.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('mois')}
                    >
                        <Text style={[
                            stylesStats.optionText,
                            selectedOption === 'mois' && stylesStats.selectedOptionText,
                        ]}
                        >
                        Mois
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
     
            <View style={{ width: '85%', height:'30%', alignSelf: 'center', }}>
                {/* <Chart delay={selectedOption} stepsData={arrayOfStepsDatas}/> */}
            </View>
        </View>
    );
}
const stylesStats = StyleSheet.create({
    testa:{
        marginTop:10,
        marginBottom:13,
        paddingRight:10,
        paddingLeft:7,
        flexDirection:"row", 
        justifyContent:'space-between', 
        width:'100%',
        shadowColor:'back',
        backgroundColor:'white',
        borderRadius: 30,
        shadowOffset: {
          width: 5,
          height: 1,
        },
        shadowOpacity:  0.20,
        shadowRadius: 1.51,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'grey',
        height: 35,
        alignItems:'center',
        
        
      },
      option: {
        width: '34%',
        alignItems:'center',
        paddingVertical: 5,
        
      },
      selectedOption: {
        backgroundColor: '#00B4EC',
        borderRadius: 15,

        textAlign: 'center',
        borderRadius: 15,
        
      },
      optionText: {
        textAlign: 'center',
        paddingHorizontal: 12,
        color: 'black', 
      },
      selectedOptionText: {
        color: 'white', // Couleur du texte lorsque l'option est sélectionnée
      },
});