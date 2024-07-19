import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import ParkPage from '../screens/ParkPage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    
    <NavigationContainer independent={true}
      style={{backgroundColor:"red"}}
    >
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name==='HomePage')return <AntDesign name="home" size={24} color="white" />
            if(route.name==='ParkPage')return <MaterialCommunityIcons name="car-brake-parking" size={24} color="white" />
            if(route.name==='ProfilePage')return <AntDesign name="profile" size={24} color="white" />
          },
          tabBarActiveTintColor:'white',
          tabBarInactiveTintColor:'gray',
          headerShown:false,
          tabBarStyle:{
            paddingBottom:5,
            paddingTop:5,
            backgroundColor: 'rgba(34,36,40,1)',
            margin:10,
            borderRadius:20,
            height:60,
           
          }
        })}
      >
        <Tab.Screen name='HomePage' component={HomePage}/>
        <Tab.Screen name='ParkPage' component={ParkPage}/>
        <Tab.Screen name='ProfilePage' component={ProfilePage}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack

const styles = StyleSheet.create({})