import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from "../Screens/LoginScreen";
import SignInScreen from "../Screens/SignInScreen";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "../Screens/SettingScreen";
import MoneyScreen from "../Screens/MoneyScreen";
import TaxiScreen from "../Screens/TaxiScreen";
import NavigationHomeScreen from "./StackNavigationHomeScreen";
import InfoScreen from "../Screens/InfoScreen";
import From from "../Screens/From";
import Destination from "../Screens/Destination";
import ConfirmationTravel from "../Screens/ConfirmationTravelScreen";

const StackNavigatorLogIn = () => {

    const Stack = createNativeStackNavigator();

    return(
    <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={LogInScreen} options={{headerShown: false}} />
         <Stack.Screen name="SignIn" component={SignInScreen} options={{title: 'Créer un compte'}}/>
         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
         <Stack.Screen name="Settings" component={InfoScreen} options={{title: 'Vos informations'}}/>
         <Stack.Screen name="Money" component={MoneyScreen} options={{title: 'Votre portefeuille'}}/>
         <Stack.Screen name="Taxi" component={From} options={{title: 'Appeler un taxi'}}/>
         <Stack.Screen name="Destination" component={Destination} options={{title: 'ou allez-vous ?'}}/>
         <Stack.Screen name="Confirmation" component={ConfirmationTravel} options={{title: 'Confimer'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default StackNavigatorLogIn