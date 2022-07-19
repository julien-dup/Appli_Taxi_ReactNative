import React from "react";
import { View, Text } from "react-native";
import SignIn from "../Components/SignIn";

const SignInScreen = () => {
    return(
        <View>
            <View >
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 32}}>Bienvenue !</Text>
                </View>
                <View>
                    <Text>Merci de renseigner les champs suivant</Text>
                </View>
                <SignIn />
            </View>
        </View>
    )
}

export default SignInScreen