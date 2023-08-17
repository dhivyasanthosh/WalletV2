/*************************************************
 * Wallet
 * @exports
 * Step5.tsx
 * Created by Dhivya on 11/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../../utils/Constants';
import {MESSAGES} from '../../../utils/Message';
import {IMAGES} from '../../../utils/SharedImages';
import {navigate} from '../../../utils/Utility';
import ModalContainer from '../../../components/ModalContainer';

const {height, width} = Dimensions.get('window');

const Step5 = () => {
  // state value
  const [isVisibleSuccessPopup, setIsVisibleSuccessPopup] = useState(false);

  // success modal popup
  const successPopup = () => (
    <>
      <ModalContainer
        isVisible={isVisibleSuccessPopup}
        setIsVisible={() => {
          setIsVisibleSuccessPopup(false);
        }}
        backdropOpacity={0.5}
        children={
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image style={styles.logoStyle} source={IMAGES.plaidLogo} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsVisibleSuccessPopup(false);
                  setTimeout(() => {
                    navigate('Account', {});
                  }, 400);
                }}>
                <Image style={styles.closeIcon} source={IMAGES.closeIcon} />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                style={{height: 92, width: 168}}
                source={IMAGES.plaidsuccess}
              />
              <Text style={styles.successText}>{MESSAGES.success}</Text>
              <Text style={styles.successSubText}>
                {
                  'Your account has been successfully linked to Plaid’s Tiny Quickstart'
                }
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate('Account', {});
                  setIsVisibleSuccessPopup(false);
                }}
                style={styles.successButtonView}>
                <Text style={[styles.continueButton, {color: COLOR.WHITE}]}>
                  {MESSAGES.continue}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </>
  );

  // initial render
  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {!isVisibleSuccessPopup && (
        <View>
          <View style={styles.headerView}>
            <Image style={styles.imageView} source={IMAGES.fpb} />
            <Text style={styles.fpbText}>{MESSAGES.FPB}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.textStyle}>
              {'Smulate OAuth experience with account selection step'}
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{margin: 16, marginBottom: 30}}>
            <Text style={styles.contentText}>
              {'Connect account information - Confirm '}
            </Text>
            <Text style={[styles.contentText, {color: COLOR.GREY}]}>
              {
                'You have selected the following account information to connect with Plaid. To confirm, select Connect Account Information. You will be returned to the 3rd party service.'
              }
            </Text>
            <Text style={styles.contentText}>{'Cash accounts:'}</Text>
            <Text style={[styles.contentText, {color: COLOR.GREY}]}>
              {'Plaid Checking ... ... 0000'}
            </Text>
            <Text style={[styles.contentText, {color: COLOR.GREY}]}>
              {'Plaid Checking ... ... 1111'}
            </Text>
            <Text style={styles.contentText}>{'Statements'}</Text>
            <Text style={[styles.contentText, {color: COLOR.GREY}]}>
              {
                'All of your checking, savings, mortgage, home equity, lines of credit, and credit card statements will be shared with the authorized third party as they become available online.'
              }
            </Text>
            <Text style={styles.contentText}>{'Profile Information'}</Text>
            <Text style={[styles.contentText, {color: COLOR.GREY}]}>
              {
                'Account ownership, name, primary address, email, and phone number will be shared with the authorized third party.'
              }
            </Text>
            <Text style={styles.contentText}>{'Profile Information'}</Text>
            <View style={styles.checkboxView}>
              <TouchableOpacity>
                <Image
                  style={{height: 16, width: 16}}
                  source={IMAGES.checkBox}
                />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                {'I have read and accept the Terms and conditions'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleSuccessPopup(true);
              }}
              style={styles.continueButtonView}>
              <Text style={styles.continueButton}>
                {MESSAGES.connect_account_Information}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
      {successPopup()}
    </View>
  );
};

export default Step5;

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
  textView: {
    backgroundColor: COLOR.SKY_BLUE,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.BLACK,
    width: width / 2,
  },
  contentText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
    marginTop: 15,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.GREY,
    marginHorizontal: 20,
  },
  continueButtonView: {
    height: 45,
    backgroundColor: COLOR.GREY,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButton: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.WHITE,
  },
  modalView: {
    backgroundColor: COLOR.WHITE,
    padding: 20,
    borderRadius: 10,
  },
  logoStyle: {
    width: 82,
    height: 30,
    alignSelf: 'center',
  },
  closeIcon: {
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
  },
  successText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
    marginTop: 30,
  },
  successSubText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.GREY,
    marginTop: 20,
    textAlign: 'center',
  },
  successButtonView: {
    backgroundColor: COLOR.BLACK,
    alignSelf: 'center',
    paddingHorizontal: 90,
    paddingVertical: 12,
    marginVertical: 30,
    borderRadius: 4,
  },
});
