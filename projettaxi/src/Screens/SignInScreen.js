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
                <View style={{marginTop: 24, alignItems: 'center'}}>
                    <Text style={{fontSize: 24}}>Merci de renseigner les champs suivants :</Text>
                </View>
                <SignIn />
            </View>
        </View>
    )
}

export default SignInScreen