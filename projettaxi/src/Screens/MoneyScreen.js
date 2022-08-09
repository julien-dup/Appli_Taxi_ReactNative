import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const MoneyScreen = () => {

    const [mail, setMail] = useState("");
    const [userName, setUserName] = useState(""); 
    const [moneyUser, setmoneyUser] = useState({}); 

    // const getMoney = async () => {

    //     const user = auth().currentUser;
    //     const idUser = user.uid
        
       
            
    //     const userMoney = await firestore()
    //     .collection('profil').doc(idUser).collection('money').doc('c7cYU3vq0GzgfKYaA6Js').get()
    //     .then(documentSnapshot => {
    
    //         if (documentSnapshot != null) {
                
    //             console.log('bonour')
    //              const money = (documentSnapshot.data())
    //             //  console.log(money.solde)
    //              return money.solde
               
    //         } else {
    //             console.log('doc vide')
    //         }
    //     })
    //     .then(money => setmoneyUser(money) )   
        
        
        
    //     }
    
    //     useEffect(() => {
    //     getMoney()
    // }, []);
        
    
    console.log('bonjour' + moneyUser)

    return (
        <View style={{flex: 1 , backgroundColor: 'black'}}>
            <View style={{flexDirection: 'row', marginTop: 24}}>
                <Text style={styles.text}>votre solde est de </Text>
                <Text style={styles.text}>60 €</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 24}}>
                <Text style={styles.text}>Ajouter des fonds</Text>
                <Image source={require('../../assets/img/addButton.png')} style={{width: 40, height: 40}} />
            </View>
        </View>
    )
}

export default MoneyScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'white'
    }
})