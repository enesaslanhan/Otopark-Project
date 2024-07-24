import { StyleSheet, Text, View,Image } from 'react-native'
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
            if(route.name==='Home')return <Image source={require("../assets/home.png")} style={{ height: 32, width: 32 }}/>
            if(route.name==='Appointment')return <Image source={require("../assets/randevu.png")} style={{ height: 32, width: 32 }}/>
            if(route.name==='Profile')return <Image source={require("../assets/customer.png")} style={{ height: 32, width: 32 }}/>//<AntDesign name="profile" size={24} color="white" />
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
        <Tab.Screen name='Home' component={ParkPage}/>
        <Tab.Screen name='Appointment' component={HomePage}/>
        <Tab.Screen name='Profile' component={ProfilePage}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack

const styles = StyleSheet.create({})