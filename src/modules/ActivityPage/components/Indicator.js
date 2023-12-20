import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Indicator = ({iconIndicator, textIndicator, valueIndicator}) => {
  return (
    <View style={stylesIndicator.indicatorItem}>
      <Image source={iconIndicator} style={{height:'80%', width:'20%',  resizeMode: 'contain'}} />
      <Text>
        <Text style={{fontSize: 50, fontWeight: 800, letterSpacing:3}}>{valueIndicator}</Text>
        <Text>{textIndicator}</Text>
      </Text>
    </View>
  )
}

export default Indicator


const stylesIndicator = StyleSheet.create({
    indicatorItem:{
        width: '100%',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        
      
        shadowColor: "#dcdcdc",
      
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity:  0.20,
        shadowRadius: 1.51,
        elevation: 4

    
    
    }
});