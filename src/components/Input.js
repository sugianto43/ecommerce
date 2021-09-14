import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native';

const Input = ({placeholder, icon, style}) => {
  return (
    <View style={[styles.inputWrapper, style]}>
      {/* <Mail/> */}
      <Image source={icon} style={styles.image} />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BABABA',
    borderRadius: 10,
  },
  image: {
    margin: 15
  },
  input: {
    height: 50,
    flex: 1,
    // fontSize: 14,
    // color: '#BABABA',
  },
})
