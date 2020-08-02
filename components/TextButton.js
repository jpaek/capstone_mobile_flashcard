import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { green, red, purple, white } from '../utils/colors'

export default function TextButton ({ children, onPress, buttonStyle = {}, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn, buttonStyle]}>
      <Text style={[styles.submitBtnText, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      margin: 10,
      borderRadius: 7,
      height: 45,
      marginLeft: 40,
      marginRight: 40,
    },
    AndroidSubmitBtn: {
      backgroundColor: purple,
      padding: 10,
      margin: 10,
      paddingLeft: 30,
      paddingRight: 30,
      height: 45,
      borderRadius: 2,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})
