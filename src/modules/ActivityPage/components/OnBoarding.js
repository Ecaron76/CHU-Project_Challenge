import React from 'react'
import { Modal, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function OnBoarding({isVisible,onClose}) {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={() => onClose()}
      
    >
        <View style={styles.modalContainer}>
        
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            {/* Ajoutez ici votre icône de croix ou tout autre élément que vous souhaitez utiliser */}
            <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>X</Text>
          </TouchableOpacity>
          {/* Contenu de votre modal */}
          <View style={{backgroundColor:'white', height:'30%', width:'55%', borderRadius:10, justifyContent:'center', shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity:  0.2,
      shadowRadius: 3,
      elevation: 10}}>
            <Image 
                source={require('../../../../assets/tomy.png')}
                style={{height: '80%', width:'100%', resizeMode:'contain'}}
            /> 
          </View>
          <View style={{display:'flex', flexDirection:'column', gap:20}}>
            <Text style={{fontSize:25, fontWeight: 700, letterSpacing: 2, color:'grey', textAlign:'center'}}>Dr.Tomy : </Text>
            <Text style={{fontStyle: 'italic', textAlign:'center', fontSize:17}}>
                Je serais votre fidèle compagnon dans cette aventure vers une vie plus saine et plus active. 
                Je suis là pour vous guider et vous motiver à atteindre vos objectifs. </Text>
            <Text style={{fontStyle: 'italic', textAlign:'center', fontSize:17}}>L’objectif est simple : Marcher au moins 10000 pas par jour.</Text>
            <Text style={{textAlign:'center', fontStyle:'italic', fontSize:17}}>Ensemble, nous allons explorer de nouveaux endroits, profiter de l'air frais et renforcer notre bien-être général. Que vous choisissiez de marcher seul, avec des amis, ou avec votre fidèle compagnon à quatre pattes, je serai là à chaque étape pour vous soutenir.</Text>
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#00B4EC'}}>👟 En marche avec Docteur Tomy ! 👟</Text>
          </View>
          
          
        </View>
      </View>
      
    </Modal>
  )
}
const styles = StyleSheet.create({
    modalContainer: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour l'arrière-plan
      
    },
    closeButton: {
      backgroundColor:'grey',
      borderRadius:10,
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
      paddingHorizontal:12,
      zIndex: 1,
    },
    modalContent: {
      shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.9,
        shadowRadius: 3,
        elevation: 10,
      gap:10,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      height:'65%',
      width:'90%',
      alignItems:'center',
    },
  });
