/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import NavigationHomeScreen from './src/Navigation/StackNavigationHomeScreen';
import StackNavigatorLogIn from './src/Navigation/StacknavigationLogin';
import From from './src/Screens/From';
import HomeScreen from './src/Screens/HomeScreen';
import InfoScreen from './src/Screens/InfoScreen';
import LogInScreen from './src/Screens/LoginScreen';
import MoneyScreen from './src/Screens/MoneyScreen';
import SettingScreen from './src/Screens/SettingScreen';





const App = () => {
  return(
    
      <StackNavigatorLogIn />
      // <HomeScreen/>
      // <SettingScreen />
      // <MoneyScreen />
      // <InfoScreen />
      // <From />

    
    
  )
}
  



export default App;
