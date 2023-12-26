import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Indicator from './components/Indicator'
import RingProgress from './components/RingProgresss'

const ActivityPage = () => {
  return (
    <View style={{width:"100%", height:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'white'  }}>
      <View style={stylesHome.podometerContainer}>
        <RingProgress progress={0.5} />
      </View>
      <View style={stylesHome.indicatorsContainer}>
        <Indicator iconIndicator={require('../../../assets/images/home/pas.png')} textIndicator="pas aujourd'hui" valueIndicator="4962" iconLevel={require('../../../assets/images/flame/rabbit-3.png')}/>
        <Indicator iconIndicator={require('../../../assets/images/home/path-road_black.png')} textIndicator='Km parcourus' valueIndicator="3.25"/>
      </View>
    </View>
  )
}

export default ActivityPage

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