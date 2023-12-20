import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Indicator from './components/Indicator'

const ActivityPage = () => {
  return (
    <View style={{width:"100%", height:'100%', justifyContent:'center', alignItems:'center',  }}>
      <View style={stylesHome.podometerContainer}>
        <Text>Podometre</Text>
      </View>
      <View style={stylesHome.indicatorsContainer}>
        <Indicator iconIndicator={require('../../../assets/images/home/path-road_black.png')} textIndicator="pas aujourd'hui" valueIndicator="4962"/>
        <Indicator iconIndicator={require('../../../assets/images/home/runner-guy.png')} textIndicator='Km parcourus' valueIndicator="3.25"/>
      </View>
    </View>
  )
}

export default ActivityPage

const stylesHome = StyleSheet.create({
    podometerContainer: {
      width: '95%',
      height:'55%',
      marginBottom: 30,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#dcdcdc",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.20,
      shadowRadius: 1.51,
      elevation: 4
    },
    indicatorsContainer: {
        gap:20,
        width: '95%',
        
    
    }
});