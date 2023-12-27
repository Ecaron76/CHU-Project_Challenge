import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


const Avatar = () => {
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={stylesAvatar.test}>
          <Image
            source={require('../../../assets/images/home/chat.png')}
            style={{ width: '100%', height: '90%', resizeMode: 'contain', position: 'absolute' }}
          />
        </View>
      </View>
    );
  };

export default Avatar

const stylesAvatar = StyleSheet.create({
    test:{
        backgroundColor:'white', 
        borderRadius:200,width:'40%', 
        height:'40%', 
        justifyContent:'flex-end',
        alignItems:'flex-end',
        shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.60,
      shadowRadius: 1.51,
      elevation: 10
    },
    
        
});