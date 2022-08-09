import React, { useState, useContext, createContext, useEffect } from "react";
import { View, Text, TouchableOpacity , StyleSheet, ImageBackground ,Image} from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';



const HomeScreen = ( {navigation} ) => {

    const [message, setMessage] = useState('Bienvenue')
    const [dataUser, setDataUser] = useState({}); 
    const [markers, setMarkers] = useState ('')
    const [test, setTest] = useState({})

//     const getData = async () => {

//     const user = auth().currentUser;
//     const idUser = user.uid
    
        
//     const userData = await firestore()
//     .collection('profil').get()
//     .then(querySnapshot => {

//         if (querySnapshot != null) {
            
//             console.log('bonour')
//              const test = (querySnapshot.size)
//              return test
           
//         } else {
//             console.log('doc vide')
//         }
//     })
//     .then(test => setDataUser(test) )   
    
//     }

//     useEffect(() => {
//     getData()
// }, []);
    
//     console.log(dataUser)


  

// const fetchMarkers = () => {
//    firestore().collection("profil").get().then((querySnapshot) => {

//       querySnapshot.forEach(documentSnapshot => {
//           var marker = ('User ID: ', documentSnapshot.id, documentSnapshot.data());
//           setMarkers(arr => [...arr , marker]);
//       });
//   })
//   }

//     useEffect(()=> {
//   fetchMarkers()
// }, [])
// console.log(markers)



const getProfil = async () => {
const users = await firestore().collection('profil').doc('z7VBjElRWggddZGa2T1CeLmFDzw1').collection('adresses').get().then(querySnapshot=>{
    querySnapshot.forEach(documentSnapshot => {
        console.log('Adress ID: ', documentSnapshot.id, documentSnapshot.data());
      })
});
// console.log(users)
}

const getMoney = async () => {
    const money= await firestore().collection('profil').doc('z7VBjElRWggddZGa2T1CeLmFDzw1').get().then(documentSnapshot =>{
        setTest(documentSnapshot.data())       
    })
}
 useEffect(()=>{
    getMoney()
 }, [])
 

console.log(test)

getProfil()

    return(
        <View style={{flex: 1, flexDirection: 'row', display: 'flex'}}>
            <ImageBackground source={require('../../assets/img/background.jpg')} resizeMode="cover" style={styles.image} >
            <View style={{flexDirection: 'row', display: 'flex', flex: 1}}>
                <View style={{height: '110%', width: '15%'}}></View>
                
                <View style={{height: '110%', width: '15%', backgroundColor:'yellow', borderColor: 'black', borderRightWidth: 20, borderLeftWidth: 20, alignItems: 'center'}}>
                    <View >
                        <TouchableOpacity style={{width: 120, height: 120, backgroundColor: 'black', borderRadius: 60, 
                        marginLeft: '-90%', marginTop: 152, alignItems: 'center', justifyContent: 'center', elevation: 5}}
                        onPress={() => navigation.navigate('Settings')} >
                            <Image source={require('../../assets/img/settings.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 120, height: 120, backgroundColor: 'black', borderRadius: 60, marginLeft: '-90%', 
                        marginTop: 64, alignItems: 'center', justifyContent: 'center', elevation: 5}}
                        onPress={() => navigation.navigate('Money')}>
                        <Image source={require('../../assets/img/money.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={{width: 120, height: 120, backgroundColor: 'black', borderRadius: 60, marginLeft: '-90%',
                         marginTop: 64, alignItems: 'center', justifyContent: 'center', elevation: 5}}
                        onPress={() => navigation.navigate('Taxi')}>
                        <Image source={require('../../assets/img/taxi.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>                 
                    </View>
                </View>
                <View style={{height: '110%', width: '70%' , alignItems: 'center'}}>
                    <View style={{alignItems: 'center', width: '100%', marginTop: '15%'}}>
                    <Text 
                    style={{fontSize: 100, color: 'white', textShadowColor: 'black',
                    textShadowOffset: { width: 1.5, height: 1.5 }, textShadowRadius: 1,
                    textShadowColor: 'black', marginLeft: '15%'
                    }}>HEP  </Text>
                    <Image source={require('../../assets/img/logoTaxi.png')}  style={{width: 90, height: 90}}/>
                    <Text style={{fontSize: 92, color: 'black', marginLeft: '15%'}}>TAXI  </Text>
                    </View>
                    <View style={{marginTop: 64}}>
                    <Text style={{fontSize: 24, color: 'black'}}>{message} </Text>
                    <Text style={{fontSize: 36, color: 'white', textShadowColor: 'black',
                    textShadowOffset: { width: 1.5, height: 1.5 }, textShadowRadius: 1,
                    textShadowColor: 'black'}}>Billy Boy  </Text>
                    </View>
                </View> 
               
            </View>
            <Text></Text>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
    },
    buttonIcon: {
        width: 80,
        height: 80
    } , 
    touchable: {
        width: 120, 
        height: 120, 
        backgroundColor: 'blue', 
        borderRadius: 60,
        marginRight: 25
    }
    })