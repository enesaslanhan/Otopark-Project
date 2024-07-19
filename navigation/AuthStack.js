import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from '../screens/WelcomePage';
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import HomeStack from './HomeStack';
const Stack=createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={WelcomePage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="SignUp" component={SignUpPage}/>
        <Stack.Screen name="HomeStack" component={HomeStack}/>

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})