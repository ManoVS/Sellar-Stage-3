import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ISSLocationScreen from './Screens/ISSLocationScreen';
import MeteorScreen from './Screens/MeteorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "ISS" component = {ISSLocationScreen}/>
          <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const Stack = createStackNavigator();
