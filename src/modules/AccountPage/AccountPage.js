import {View, Button, Text, Image, StyleSheet, Pressable} from 'react-native';


export default function AccountPage() {

    return (
        <View style={{ width: '100%', height:'100%', alignItems: 'center',backgroundColor: 'white', paddingTop:10}}>
            <View style={{width:'70%', alignItems:'center' }}>
                <View style={stylesAccount.test}>
                    <Image
                        source={require('../../../assets/images/home/chat.png')}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain', }}
                    />
                </View>
                <Text style={{fontSize: 50, fontWeight:'bold'}}> 217 063 </Text>
                <Text>pas ce mois-ci</Text>
                <View style={stylesAccount.testa}>
                    <Text style={{textAlign:'center', paddingHorizontal:12}}>Jours</Text>
                    <Text style={{textAlign:'center', paddingHorizontal:12}}>Semaines</Text>
                    <Text style={{backgroundColor:'#00B4EC', color:'white', textAlign:'center', borderRadius: 15, paddingVertical:2, paddingHorizontal:12}}>Mois</Text>
                </View>
            </View>
            <View style={{width:'80%', borderWidth:2, borderRadius:10, marginBottom:1000}}>
                <View style={{width:'100%', height:'80%', borderWidth:2, borderRadius:10}}></View>
                <View></View>
            </View>
            
        </View>
    );
}

const stylesAccount = StyleSheet.create({
    test:{
        backgroundColor:'white', 
        borderRadius:200,width:'80%', 
        height:'50%', 
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity:  0.60,
        shadowRadius: 1.51,
        elevation: 10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    testa:{
        marginTop:10,
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
    

});