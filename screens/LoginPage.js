import {
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import BaseButton from "../components/BaseButton";
  import { ThemedButton } from "react-native-really-awesome-button";
  import { Feather } from '@expo/vector-icons';
  
  const LoginPage = () => {  
    const navigation=useNavigation();

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
            style={styles.image}
          >
            <View style={{ width: "80%", marginTop: 275, backgroundColor: "white" }}>
              <TextInput style={styles.textInput} placeholder="Email" />
            </View>
            <View style={{ width: "80%", marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={secureText} />
              <Feather name={eye} size={26} color="black" onPress={toggleSecureText} />
            </View>
            <View style={{ width: "100%", alignItems: "center", paddingTop: 30 }}>
              <ThemedButton name="cartman" type="danger" onPress={()=>navigation.navigate("HomeStack")}>
                <Text style={{ fontSize: 20, fontFamily: "serif", fontWeight: "bold", color: "#b12b2b" }}>Login</Text>
              </ThemedButton>
            </View>
            <View style={{ width: "100%", alignItems: "center", paddingTop: 10 }}>
              <BaseButton
                title="Don't have an account?, sign up"
                textColor="white"
                handleFontSize={15}
                handleOnPress={()=>navigation.navigate("SignUp")}
              />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LoginPage;
  
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
    button: {
      width: "100%",
      color: "red",
      alignItems: "center",
    },
  });
  