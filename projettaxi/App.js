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
import StackNavigatorLogIn from './src/Navigation/StacknavigationLogin';
import LogInScreen from './src/Screens/LoginScreen';





const App = () => {
  return(
    
      <StackNavigatorLogIn />
    
  )
}
  



export default App;
