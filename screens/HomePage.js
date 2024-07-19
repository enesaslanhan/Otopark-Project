import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={require("../assets/homestack.jpg")}>
            <View style={styles.box}>
              <View style={styles.div}>
                  <View style={{width:"100%",height:"100%",padding:15,alignItems:"center"}}>
                    <Text style={{color:"white",fontWeight:"500",letterSpacing:1,fontSize:16}}>Hangi Şehirlerde Aktifiz</Text>
                    
                  </View>
              </View>
              <View style={styles.div}></View>
              <View style={styles.div}></View>
              <View style={styles.div}></View>
            </View>
          </ImageBackground>
        </View>
    </SafeAreaView>
  )
}

export default HomePage

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
  box:{
    width:"80%",
    height:"90%",
    marginTop:"10%",
    alignItems:"center"
  },
  div:{
    width:"80%",
    backgroundColor:"lightblue",
    height:150,
    borderRadius:20,
    //opacity:0.35,
    marginTop:20

  }
})