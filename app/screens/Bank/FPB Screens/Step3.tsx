/*************************************************
 * Wallet
 * @exports
 * Step3.tsx
 * Created by Dhivya on 07/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// components and utilities
import InputContainer from '../../../components/InputContainer';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../../utils/Constants';
import {MESSAGES} from '../../../utils/Message';
import {IMAGES} from '../../../utils/SharedImages';
import {navigate} from '../../../utils/Utility';

const {height, width} = Dimensions.get('window');

const Step3 = () => {
  // state value
  const [mobileNo, setMobileNo] = useState('');

  // initial render
  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <View style={styles.headerView}>
        <Image style={styles.imageView} source={IMAGES.fpb} />
        <Text style={styles.fpbText}>{MESSAGES.FPB}</Text>
      </View>
      <View style={{marginHorizontal: 16}}>
        <Text style={[styles.signinText, {marginTop: 30}]}>
          {MESSAGES.verification}
        </Text>
        <Text style={styles.questionText}>{MESSAGES.enterSecurityCode}</Text>
        <InputContainer
          value={mobileNo}
          textInputStyle={styles.textInputStyle}
          placeholder={MESSAGES.code}
          label={MESSAGES.code}
          style={{marginTop: 50}}
          onChangeText={text => setMobileNo(text)}
          autoCapitalize={'none'}
        />
        <TouchableOpacity
          onPress={() => {
            navigate('step4', {});
          }}
          style={styles.signinButtonView}>
          <Text style={[styles.signinText, {color: COLOR.WHITE}]}>
            {MESSAGES.submit}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  headerView: {
    height: height / 6,
    backgroundColor: COLOR.SECONDARY,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  imageView: {
    height: 26,
    width: 34,
  },
  fpbText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.M,
    color: COLOR.WHITE,
    marginLeft: 20,
  },
  questionText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.GREY,
    marginTop: 10,
  },
  textInputStyle: {
    borderWidth: 0.8,
    borderColor: COLOR.GREY,
    borderRadius: 5,
  },
  signinText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  signinButtonView: {
    borderRadius: 30,
    padding: 10,
    backgroundColor: COLOR.SECONDARY,
    alignItems: 'center',
    marginTop: 40,
  },
});
