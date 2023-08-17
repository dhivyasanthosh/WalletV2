/*************************************************
 * Wallet
 * @exports
 * WelcomeScreen.tsx
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../utils/Constants';
import {MESSAGES} from '../utils/Message';
import {IMAGES} from '../utils/SharedImages';
import {navigate} from '../utils/Utility';

const {height, width} = Dimensions.get('window');

const WelcomeScreen = () => {
  return (
    <View style={styles.imgBg}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image source={IMAGES.letsgo} style={styles.image} />
      <Text style={styles.textview}>{MESSAGES.welcomemsg}</Text>
      <TouchableOpacity
        onPress={() => navigate('auth', {})}
        style={styles.skipView}>
        <Text style={styles.skipText}>{MESSAGES.skip}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BG_THEME,
  },
  image: {
    marginTop: 100,
    height: 250,
    width: 330,
  },
  textview: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZE.XL,
    color: COLOR.BLACK,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 30,
  },
  skipView: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: height / 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: COLOR.PRIMARY,
  },
  skipText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.WHITE,
  },
});
