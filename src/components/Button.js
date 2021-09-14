import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function ButtonCustom({title}) {
  return (
    <TouchableHighlight
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: "#0ACF83",
    overflow: 'hidden',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    letterSpacing: 0.2,
    lineHeight: 20,
    fontFamily: "DM-Sans",
  },
})