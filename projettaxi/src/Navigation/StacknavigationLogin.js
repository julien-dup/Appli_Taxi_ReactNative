import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from "../Screens/LoginScreen";
import SignInScreen from "../Screens/SignInScreen";
import HomeScreen from "../Screens/HomeScreen";

const StackNavigatorLogIn = () => {

    const Stack = createNativeStackNavigator();

    return(
    <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={LogInScreen} options={{headerShown: false}} />
         <Stack.Screen name="SignIn" component={SignInScreen} options={{title: 'Créer un compte'}}/>
         <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default StackNavigatorLogIn