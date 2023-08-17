/*************************************************
 * Wallet
 * @exports
 * SplashScreen.tsx
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';

// components and utilities
import {IMAGES} from '../utils/SharedImages';
import {navigate} from '../utils/Utility';

const {height, width} = Dimensions.get('window');

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('welcome', {});
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ImageBackground source={IMAGES.background_image} style={styles.imgBg}>
        <Image source={IMAGES.logo} style={styles.logo} />
      </ImageBackground>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: Platform.OS == 'ios' ? height / 19 : height / 17,
    width: Platform.OS == 'ios' ? width / 2 : width / 2,
  },
});
