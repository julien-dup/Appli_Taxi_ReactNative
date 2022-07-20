import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Login from "../Components/LogIn";
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-paper';

const LogInScreen = ({navigation}) => {

    const [mail, setMail] = useState("");
    const [mdp, setMdp] = useState(""); 

    const handleLogin = () => {
        auth()
          .signInWithEmailAndPassword(mail, mdp)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
            window.alert('connecté avec :' + user.email);
            navigation.navigate('Home')
          })
          .catch(error => alert(error.message))
      }

    return(
    <View>
        <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 32}}>Bienvenue !</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 24}}>
                <Text style={{fontSize: 24}}>Connecter-vous avec vos identifiants</Text>
        </View>

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

        <View style={{alignItems: 'center', marginTop: 32}}>
            <TouchableOpacity>
                    <Text style={{fontSize: 18}}>Connecter-vous par lecteur d'emprunte digitale </Text>
            </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: 32}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{fontSize: 18}}>Créer un compte </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    input: {
      marginTop: 24
    }
  })