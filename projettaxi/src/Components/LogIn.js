import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-paper';

const Login = () => {

    const [mail, setMail] = useState("");
    const [mdp, setMdp] = useState(""); 

    const handleLogin = () => {
        auth()
          .signInWithEmailAndPassword(mail, mdp)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
            window.alert('Logged in with:' + user.email);
          })
          .catch(error => alert(error.message))
      }
    



    return(
    <View style={{margin: 24}}>
      
        <View>
            <TextInput
            label="Email"
            value={mail}
            onChangeText={text => setMail(text)}
            />
        </View>
  
        <View style={styles.input}>
            <TextInput
            label="mot de passe"
            value={mdp}
            onChangeText={text => setMdp(text)}
                />
        </View>

        <View style={{marginTop: 32, alignItems: 'center'}}>
            <TouchableOpacity 
            style={{padding: 32, alignItems: 'center', backgroundColor: 'blue', borderRadius: 10}}
            onPress={()=>handleLogin()}
            >
                <Text style={{color: 'white', fontSize: 24}}>VALIDER</Text>
            </TouchableOpacity>
        </View>

     
    </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
      marginTop: 24
    }
  })