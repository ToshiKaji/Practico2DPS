import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Registro from './screens/Registro';
import Login from './screens/Login';
import Contactos from './screens/Contactos';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

<NavigationContainer>
 <Stack.Navigator initialRouteName="Login">

<Stack.Screen name='Registro' component={Registro}/>
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Contactos" component={Contactos}/>

</Stack.Navigator>
</NavigationContainer>
  
  );  
}
 

