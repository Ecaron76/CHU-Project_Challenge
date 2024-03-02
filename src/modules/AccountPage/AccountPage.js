import {View, Button, Text, Image, StyleSheet, Pressable, Dimensions, TouchableOpacity} from 'react-native';
import Chart from '../shared/Chart';
import { useState } from 'react';


export default function AccountPage() {
    const [selectedOption, setSelectedOption] = useState('mois');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    
  };
    return (
        <View style={{ width: '100%', height:'100%', alignItems: 'center',backgroundColor: 'white', paddingTop:10}}>
            <View style={stylesAccount.avatar}>
                <Image
                    source={require('../../../assets/images/home/chat.png')}
                    style={{ width: '100%', height: '100%', justifyContent: 'flex-end', alignItems:'flex-end', position:'absolute' }}
                />
            </View>
            <View style={{width:'70%', alignItems:'center' }}>
                <Text style={{fontSize: 45, fontWeight:'bold'}}> 217 063 </Text>
                <Text>pas ce mois-ci</Text>
                <View style={stylesAccount.testa}>
                    <TouchableOpacity
                        style={[
                            stylesAccount.option,
                            selectedOption === 'jours' && stylesAccount.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('jours')}
                    >
                        <Text style={[
                            stylesAccount.optionText,
                            selectedOption === 'jours' && stylesAccount.selectedOptionText,
                        ]}>Jours</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            stylesAccount.option,
                            selectedOption === 'semaines' && stylesAccount.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('semaines')}
                    >
                        <Text style={[
                            stylesAccount.optionText,
                            selectedOption === 'semaines' && stylesAccount.selectedOptionText,
                        ]}>Semaines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            stylesAccount.option,
                            selectedOption === 'mois' && stylesAccount.selectedOption,
                        ]}
                        onPress={() => handleOptionPress('mois')}
                    >
                        <Text style={[
                            stylesAccount.optionText,
                            selectedOption === 'mois' && stylesAccount.selectedOptionText,
                        ]}
                        >
                        Mois
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
     
            <View style={{ width: '90%', height:'30%', alignSelf: 'center',}}>
                <Chart delay={selectedOption}/>
            </View>
            <View style={{width:'90%', borderRadius:10, marginTop:30}}>
                <View style={stylesAccount.badgeContainer}>
                    <Image
                        source={require('../../../assets/images/badges/badge-turtle.png')}
                        style={{height: '98%', width:'15.5%', resizeMode:'contain'}}
                    />
                    <Image
                        source={require('../../../assets/images/badges/badge-rabbit.png')}
                        style={{ height: '98%', width:'15.5%', resizeMode:'contain'}}
                    />
                    <Image
                        source={require('../../../assets/images/badges/badge-leopard.png')}
                        style={{height: '98%', width:'15.5%', resizeMode:'contain'}}
                    />
                    <Image
                        source={require('../../../assets/images/badges/badge-rocket.png')}
                        style={{height: '98%', width:'15.5%', resizeMode:'contain'}}
                    />
                    <Image
                        source={require('../../../assets/images/badges/badge-leopard.png')}
                        style={{height: '98%', width:'15.5%', resizeMode:'contain', opacity:0.3}}
                    />
                    <Image
                        source={require('../../../assets/images/badges/badge-rocket.png')}
                        style={{height: '98%',width:'15.5%', resizeMode:'contain', opacity:0.3 }}
                    />
                </View>
            </View>
        </View>
        
    );
}

const stylesAccount = StyleSheet.create({
    avatar:{
        backgroundColor:'white', 
        borderRadius:200,
        width:'60%', 
        height:'32%', 
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity:  0.60,
        shadowRadius: 1.51,
        elevation: 10,
    },
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

    badgeContainer:{
        width:'100%', 
        height:60, 
        borderRadius:30, 
        flexDirection:'row',
        justifyContent:'space-between', 
        paddingHorizontal: 10, 
        marginTop:10,
        backgroundColor: 'white',
        shadowColor: "black",    
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity:  0.20,
        shadowRadius: 1.51,
        elevation: 2
    }
    

});