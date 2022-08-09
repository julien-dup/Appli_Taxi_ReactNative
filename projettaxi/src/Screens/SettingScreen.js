import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { TextInput } from 'react-native-paper';

const SettingScreen = ( ) => {


    const [mail, setMail] = useState("");
    const [userName, setUserName] = useState(""); 
    const [dataUser, setDataUser] = useState({});
    const [adresse, setAdresse] = useState([])
//     const user = auth().currentUser;
//     const idUser = user.uid
//     console.log(idUser) 

//     const fetchAdresse =
//    async () => {
//     await firestore().collection("profil").doc(idUser).collection('adresse').get().then((querySnapshot) => {

//       querySnapshot.forEach(element => {
//           var test = element.data();
//           setAdresse(arr2 => [...arr2 , test]);
//           console.log(adresse)
//       });
//   })
//   }
//   useEffect(()=> {
//     fetchAdresse()
// }, [])

    return (
        <View style={{padding: 16, backgroundColor: 'black', flex:1}}>
            <Text style={{fontSize: 24 , color: 'white', marginTop: 24}}>Modifiez vos informations :</Text>
            <View>
                <TextInput
                style={{marginTop: 16}}
                // label='paul@ricard.com'
                
                // onChangeText={text => setMail(text)}
                />
            </View>
            <View>
                <TextInput
                style={{marginTop: 16}}
                // label= '1tijaune'
                
                onChangeText={text => setUserName(text)}
                />
            </View>
            <View style={{marginTop: 32, alignItems: 'center'}}>
                <TouchableOpacity style={{padding: 32, alignItems: 'center', backgroundColor: 'orange', borderRadius: 10}}>
                    <Text style={{color: 'white', fontSize: 24}}>VALIDER</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize: 24 , color: 'white', marginTop: 24}}>Vos adresses :</Text>
                <TouchableOpacity style={{backgroundColor: 'blue', width: '30%',alignItems: 'center', marginTop: 24}}>
                    <Text style={{color:'white', fontSize: 24}}>MAISON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'red', width: '30%',alignItems: 'center', marginTop: 24}}>
                    <Text style={{color:'white', fontSize: 24}}>Travail</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={{backgroundColor: 'orange', justifyContent: 'center', width: '88', height: '88'}}>
                        <Image source={require('../../assets/img/addButton.png')} style={{width: '40', height: '40'}} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SettingScreen