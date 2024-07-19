import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemedButton } from "react-native-really-awesome-button";
import BaseButton from '../components/BaseButton';

const WelcomePage = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <ImageBackground source={require("../assets/welcomePage.png")} resizeMode="cover" style={styles.image}>
        <View style={styles.titleBox}><Text style={styles.title}>Park With Ease</Text></View>
        <View style={styles.parkImage}><FontAwesome5 name="parking" size={40} color="white" /></View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <BaseButton 
                buttonColor={"#359dec"}
                setWidht="80%"
                title="Login"
                handleFontSize={20}
                buttonColorPressed="gray"
                handleOnPress={()=>navigation.navigate("Login")}
            />
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginTop:10}}>
            
            <BaseButton 
                handleBorderWith={1}
                setWidht="80%"
                title="Car Parking"
                handleFontSize={20}
            />
        </View>
      </ImageBackground>
      
    </View>
    </SafeAreaView>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        height:"100%",
        
    },
    image:{
        flex:1,
        //justifyContent:"center",
        width:"100%",
        height:"100%",
        
    },
    title:{
        color:"white",
        fontSize:28,
        marginTop:430,
        fontWeight:"bold",
        letterSpacing:1
        
    },
    titleBox:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    parkImage:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
    }

})