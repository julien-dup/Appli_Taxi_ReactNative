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
      if(mdp === mdp2) setDisplayButton(false)
      setOpacityButton(1)
      console.log(mdp +' '+ mdp2)
  }


  const createUser = () => {
    auth()
  .createUserWithEmailAndPassword(mail, mdp)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }

  return (
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

  <View style={styles.input}>
        <TextInput
        label="confirmer mot de passe "
        value={mdp2}
        onChangeText={text => setMdp2(text)}
        onBlur={()=>checkPassword()}
        />
    </View>

  <View style={{marginTop: 24, alignItems: 'center'}}>
            <TouchableOpacity 
            style={{padding: 8, alignItems: 'center', backgroundColor: 'blue', opacity: opacityButton}}
            onPress={()=>createUser()}
            disabled= {displayButton}>
                <Text style={{color: 'white'}}>VALIDER</Text>
            </TouchableOpacity>
    </View>

</View>
    
  
  );
};

export default SignIn



const styles = StyleSheet.create({
  input: {
    marginTop: 24
  }
})




