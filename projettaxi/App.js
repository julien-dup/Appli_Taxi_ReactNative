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
import SignIn from './src/Components/SignIn';
import SignInScreen from './src/Screens/SignInScreen';





const App = () => {
  return(
    <View>
      <Text>Database connected</Text>
      <SignInScreen/>
    </View>
  )
}
  



export default App;
