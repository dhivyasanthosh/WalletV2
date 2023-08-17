/*************************************************
 * Wallet
 * @exports
 * LoginScreen.tsx
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// components and utilities
import InputContainer from '../../components/InputContainer';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {navigate} from '../../utils/Utility';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  // state values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  // Api functions
  const handelLogin = () => {
    navigate('main', {});
  };

  // initial render
  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        style={styles.bgImage}
        source={IMAGES.login_bg}>
        <View style={styles.welcomeView}>
          <Text style={styles.welcomText}>{MESSAGES.welcomeback}</Text>
          <Text style={styles.loginText}>{MESSAGES.plslogin}</Text>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.emailText}>{MESSAGES.email}</Text>
          <Image
            source={IMAGES.informationIcon}
            style={{height: 15, width: 15}}
          />
        </View>
        <InputContainer
          value={email}
          placeholder={MESSAGES.email_placeholder}
          textInputStyle={styles.textInputStyle}
          isTopLabelHide={true}
          onChangeText={text => setEmail(text.toLowerCase())}
          autoCapitalize={'none'}
          inputMode={'email'}
        />

        <View style={[styles.emailView, {marginTop: 20}]}>
          <Text style={styles.emailText}>{MESSAGES.password}</Text>
        </View>
        <InputContainer
          value={password}
          placeholder={MESSAGES.pwd_placeholder}
          textInputStyle={styles.textInputStyle}
          isTopLabelHide={true}
          onChangeText={text => setPassword(text)}
          autoCapitalize={'none'}
          inputMode={'email'}
          secureTextEntry={showPassword}
          rightIcon={showPassword ? IMAGES.eyecross : IMAGES.eyeopen}
          onPressRightIcon={() => {
            setShowPassword(!showPassword);
          }}
        />
        <TouchableOpacity style={styles.emailView}>
          <Text style={styles.forget}>{MESSAGES.forgotpwd}</Text>
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity onPress={handelLogin} style={styles.loginButton}>
        <Text style={styles.login}>{MESSAGES.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bgImage: {
    height: height / 1.6,
    width: width,
    paddingHorizontal: 20,
  },
  welcomeView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 8,
  },
  welcomText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.XXL,
    color: COLOR.WHITE,
  },
  loginText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.WHITE,
    marginTop: 10,
    marginBottom: 30,
  },
  textInputStyle: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 10,
    borderColor: COLOR.WHITE,
  },
  emailView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: 15,
  },
  emailText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.WHITE,
    flex: 1,
  },
  emailinputbox: {
    height: 50,
    backgroundColor: COLOR.WHITE,
    borderRadius: 10,
  },
  forget: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.WHITE,
    flex: 1,
    marginTop: 10,
  },
  loginButton: {
    height: 45,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY_1,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height / 5,
  },
  login: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.PRIMARY_1,
  },
});
