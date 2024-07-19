import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BaseButton = ({title,setWidht,buttonColor,buttonColorPressed,handleOnPress,textColor,handleFontSize,handleBorderWith,handleBorderColor}) => {
  return (
    <Pressable 
        onPress={handleOnPress}
        style={({pressed})=>[{
            backgroundColor:pressed? buttonColorPressed:buttonColor,
            width:setWidht,
            borderWidth:handleBorderWith?handleBorderWith:0,
            borderColor:handleBorderColor?handleBorderColor:"white"
            
          },styles.button]}>
        <Text style={{color:textColor?textColor:"white",fontSize:handleFontSize?handleFontSize:18,letterSpacing:1}}>{title}</Text>
    </Pressable>
  )
}

export default BaseButton

const styles = StyleSheet.create({
    button:{
        borderRadius:20,
        height:50,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center",
    }
})