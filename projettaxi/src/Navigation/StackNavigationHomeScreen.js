import React from "react";
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screens/HomeScreen";
import MoneyScreen from "../Screens/MoneyScreen";
import TaxiScreen from "../Screens/TaxiScreen";
import SettingScreen from "../Screens/SettingScreen";

const NavigationHomeScreen  =() => {

    const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
         <Stack.Screen name="Settings" component={SettingScreen} options={{title: 'Vos préférences'}}/>
         <Stack.Screen name="Money" component={MoneyScreen} options={{title: 'Votre portefeuille'}}/>
         <Stack.Screen name="Taxi" component={TaxiScreen} options={{title: 'Appeler un taxi'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default NavigationHomeScreen