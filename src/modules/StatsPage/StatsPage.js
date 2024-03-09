import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { StepsChallengeService } from '../../services/StepsChallengeService/StepsChallengeService';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState, useMemo } from 'react';
import Indicator from '../shared/Indicator';
import Chart from '../shared/Chart';
import { loginStore } from "../../store/loginStore";


export default function StatsPage() {

    const {challengeId} = loginStore();
    const [selectedOption, setSelectedOption] = useState('mois');
    const [allSteps, setAllSteps] = useState(0);
    const [stepsData, setStepsData] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {

        if(isFocused){ 

            getSteps();
        }

    }, [isFocused]);

    // Récupère les pas total ainsi que le tableau avec l'ensemble des valeurs (mois, semaines, jours).
    const getSteps = async () => {

        const stepsDataTotal = await StepsChallengeService.getAllSteps(challengeId);
        setAllSteps(stepsDataTotal);

        const stepsArray = await StepsChallengeService.getStepsData(challengeId);
        setStepsData(stepsArray);

        console.log(allSteps)
        
        console.log(stepsData.length)
        console.log(stepsData)

    };

    const handleOptionPress = (option) => {
        setSelectedOption(option);
    };

    return (
        <View style={{width: '100%', height: '100%', padding:10, alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight: 'bold', textAlign:'center', marginBottom:20}}> Accomplissement du challenge</Text>
            <View style={{gap:20, width:"100%"}}>
                {allSteps ? <Indicator textIndicator="pas totaux" valueIndicator={allSteps}/> : null}
                {stepsData.length > 0 ? <Indicator textIndicator="pas ce mois-ci" valueIndicator={stepsData[0][4]?.count}/> : null}
                {stepsData.length > 0 ? <Indicator textIndicator="pas cette semaine" valueIndicator={stepsData[1][4]?.count} />: null}
                {stepsData.length > 0 ? <Indicator textIndicator="pas aujourd'hui" valueIndicator={stepsData[2][4]?.count}/>: null}
            </View>
            <View style={{width:'70%', alignItems:'center', }}>
                <View style={stylesStats.testa}>
                    <TouchableOpacity
                        style={[
                            stylesStats.option,
                            selectedOption === 'jours' && stylesStats.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('jours')}
                    >
                        <Text style={[
                            stylesStats.optionText,
                            selectedOption === 'jours' && stylesStats.selectedOptionText,
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
                {/* Bien penser à mettre du conditional rendering car ca met trois plombes de charger les données. Il va falloir mettre un splash screen. */}
                { stepsData.length > 0 ? <Chart delay={selectedOption} stepsData={stepsData} /> : null}
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