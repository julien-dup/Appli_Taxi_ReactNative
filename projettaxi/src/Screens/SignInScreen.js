import React from "react";
import { View, Text , StyleSheet} from "react-native";
import SignIn from "../Components/SignIn";

const SignInScreen = () => {
    return(
        <View style={{flex: 1 , backgroundColor: 'black'}}>
            <View >
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.text}>Quleques informations...</Text>
                </View>
                <View style={{marginTop: 24, alignItems: 'center'}}>
                    <Text style={styles.text}>Merci de renseigner les champs suivants :</Text>
                </View>
                <SignIn />
            </View>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'white'
    }
})