import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Indicator = ({iconIndicator, textIndicator, valueIndicator, iconLevel}) => {
  return (
    <View style={stylesIndicator.indicatorItem}>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Image source={iconIndicator} style={{height:'80%', width:'20%',  resizeMode: 'contain'}} />
        <Text>
          <Text style={{fontSize: 45, fontWeight: 800, letterSpacing:5}}>{valueIndicator}</Text>
          <Text>{textIndicator}</Text>
        </Text>
        <Image source={iconLevel} style={{height:'60%',  resizeMode: 'contain'}} />
      </View>
      
    </View>
  )
}

export default Indicator


const stylesIndicator = StyleSheet.create({
    indicatorItem:{
        padding:8,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 20,
        shadowColor: "#dcdcdc",    
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity:  0.20,
        shadowRadius: 1.51,
        elevation: 2
    }
});