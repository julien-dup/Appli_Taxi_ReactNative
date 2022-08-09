import React, {useState, } from "react";
import { View, Text, TouchableOpacity , StyleSheet} from "react-native";
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const SignIn = () => {
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  const [mdp2, setMdp2] = useState("");
  const [displayButton, setDisplayButton] = useState(true)
  const [opacityButton, setOpacityButton] = useState(0.3)

  

  function checkPassword() {
    console.log(mail)
      if(mdp === mdp2 ) {
        setDisplayButton(false)
      setOpacityButton(1)
      console.log(mdp +' '+ mdp2)
      }else {
        window.alert('les mots de passe ne sont pas identiques')
      }
  }


  const createUser = () => {
    auth()
  .createUserWithEmailAndPassword(mail, mdp)
  .then(() => {
    window.alert('Votre enregistrement a bien été effectué');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      window.alert('Cette adresse mail est déjà enregistré');
    }

    if (error.code === 'auth/invalid-email') {
      window.alert('Adresse mail non valide !');
    }

    console.error(error);
  });
  }

  return (
<View style={{margin: 24}}>
      <View style={styles.input}>
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
      onBlur={()=>checkPassword()}
    />
  </View>

  <View style={styles.input}>
        <TextInput
        label="confirmer mot de passe "
        value={mdp2}
        onChangeText={text => setMdp2(text)}
        onBlur={()=>checkPassword()}
        />
    </View>

  <View style={{marginTop: 32, alignItems: 'center'}}>
            <TouchableOpacity 
            style={{padding: 32, alignItems: 'center', backgroundColor: 'blue', opacity: opacityButton, borderRadius: 10}}
            onPress={()=>createUser()}
            disabled= {displayButton}>
                <Text style={{color: 'white', fontSize: 24}}>VALIDER</Text>
            </TouchableOpacity>
    </View>

</View>
    
  
  );
};

export default SignIn



const styles = StyleSheet.create({
  input: {
    marginTop: 24
  },
  text: {
    fontSize: 24,
    color: 'white'
}
})



