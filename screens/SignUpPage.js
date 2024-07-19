import { ImageBackground, StyleSheet, Text, View,TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import { ThemedButton } from "react-native-really-awesome-button";

const SignUpPage = () => {
    const [eye, setEye] = useState("eye-off");
    const [secureText, setSecureText] = useState(true);
  
    const toggleSecureText = () => {
      if (eye === "eye-off") {
        setEye("eye");
        setSecureText(false);
      } else {
        setEye("eye-off");
        setSecureText(true);
      }
    };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground 
            source={require("../assets/car-park.jpg")}
            resizeMode="cover"
            style={styles.image}>
            <View style={{ width: "80%", marginTop: 275, backgroundColor: "white" }}>
              <TextInput style={styles.textInput} placeholder="First and Last Name" />
            </View>
            <View style={{ width: "80%", marginTop: 10, backgroundColor: "white" }}>
              <TextInput style={styles.textInput} placeholder="Email" />
            </View>
            <View style={{ width: "80%", marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={secureText} />
              <Feather name={eye} size={26} color="black" onPress={toggleSecureText} />
            </View>    
            <View style={{ width: "80%", marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={secureText} />
              <Feather name={eye} size={26} color="black" onPress={toggleSecureText} />
            </View>   
            <View style={{ width: "100%", alignItems: "center", paddingTop: 30 }}>
              <ThemedButton name="bruce" type="anchor">
                <Text style={{ fontSize: 20, fontFamily: "serif",fontWeight:"600"}}>Sign Up</Text>
              </ThemedButton>
            </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
      },
      image: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",
      },
      textInput: {
        width: "90%",
        backgroundColor: "white",
        height: 50,
        paddingLeft: 10,
      },
});
