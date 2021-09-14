import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Sosmed = ({style, icon}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Image source={icon}/>
    </View>
  )
}

export default Sosmed

const styles = StyleSheet.create({
  wrapper: {
    width: 52,
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 9.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
