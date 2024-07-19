import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={require("../assets/homestack.jpg")}>

          </ImageBackground>
        </View>
    </SafeAreaView>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "100%",
    height: "100%",
  },
  image: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
})