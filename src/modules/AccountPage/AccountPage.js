import {View, Button, Text, Image, StyleSheet, Pressable} from 'react-native';


export default function AccountPage() {

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
                    <Text style={{textAlign:'center', paddingHorizontal:12}}>Jours</Text>
                    <Text style={{textAlign:'center', paddingHorizontal:12}}>Semaines</Text>
                    <Text style={{backgroundColor:'#00B4EC', color:'white', textAlign:'center', borderRadius: 15, paddingVertical:2, paddingHorizontal:12, paddingVertical:5}}>Mois</Text>
                </View>
            </View>
            <View style={{width:'80%', borderRadius:10}}>
                <View style={{width:'100%', height:'43%', borderWidth:2, borderRadius:10}}></View>
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
        width:'50%', 
        height:'35%', 
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
        flexDirection:"row", 
        justifyContent:'space-between', 
        width:'100%',
        shadowColor: "black",
        borderRadius: 30,
        shadowOffset: {
          width: 5,
          height: 1,
        },
        shadowOpacity:  0.20,
        shadowRadius: 1.51,
        elevation: 2,
        
        height: 35,
        alignItems:'center',
        paddingHorizontal:10
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