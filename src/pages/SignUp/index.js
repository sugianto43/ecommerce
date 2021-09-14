import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import background from '../../../assets/images/backgroud-image.png';
import colors from '../../../assets/colors/colors';
import Input from '../../components/Input';
import Mail from '../../../assets/icons/mail.png';
import Lock from '../../../assets/icons/lock.png';
import ButtonCustom from '../../components/Button';
import Sosmed from '../../components/Sosmed';
import apple from "../../../assets/icons/apple.png";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";

const index = ({ route, navigation }) => {
  return (
    <>
      <ImageBackground source={background} style={Styles.backgroundImage} >
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <View style={Styles.container}>
          <Text style={Styles.textAudio}>Audio</Text>
          <Text style={Styles.textSmall}>It's modular and designed to last</Text>
          <Input icon={Mail} placeholder="Email" />
          <Input icon={Lock} placeholder="Password" style={{ marginVertical: 20 }} />
          <ButtonCustom title='Sign Up' />
          <View style={{ flexDirection: 'row', marginTop: 42 }}>
            <Sosmed icon={apple} />
            <Sosmed icon={facebook} style={{ marginLeft: 15 }} />
            <Sosmed icon={google} style={{ marginLeft: 15 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 24 }}>
            <Text style={Styles.bottomText1}>If you have an account?</Text>
            <Text
              style={Styles.bottomText2}
              onPress={() => navigation.navigate('SignIn')}
            >Sign In here</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}

export default index

const Styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 90,
    marginBottom: 130,
  },
  textAudio: {
    fontFamily: 'DM-Sans',
    color: colors.white,
    fontSize: 51,
    fontWeight: 'bold',
    lineHeight: 66,
    letterSpacing: 0.638095,
  },
  textSmall: {
    fontFamily: 'DM-Sans',
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginTop: 7,
    lineHeight: 20,
    marginBottom: "auto",
  },

  bottomText1: {
    color: '#ffffff',
    fontFamily: "DM-Sans",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  bottomText2: {
    color: "#0ACF83",
    fontFamily: "DM-Sans",
    fontSize: 14,
    textDecorationLine: "underline",
    lineHeight: 20,
    letterSpacing: 0.2,
    marginLeft: 6,
  },
})
