/*************************************************
 * Wallet
 * @exports
 * AccountDetailScreen.tsx
 * Created by Dhivya on 03/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {navigate, navigateBack} from '../../utils/Utility';

const {height, width} = Dimensions.get('window');

const AccountDetailScreen = () => {
  // state value
  const route = useRoute();
  const {accountDetails} = route.params;

  const handleOnclickAccount = () => {
    navigate('accountinformation', {
      accountInformation: accountDetails,
    });
  };

  const handleOnclickTransactionHistory = () => {
    navigate('transactionhistory', {
      accountinformation: accountDetails,
    });
  };

  // initial render
  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        style={{height: height / 3.5}}
        source={IMAGES.backgroundImg}>
        <View style={styles.mainView}>
          <View style={styles.accountView}>
            <Pressable
              onPress={() => {
                navigateBack();
              }}>
              <Image
                style={{height: 17, width: 18}}
                source={IMAGES.backArrow}
              />
            </Pressable>
            <Text style={[styles.accountText, {flex: 1, marginStart: 5}]}>
              {MESSAGES.accountDetails}
            </Text>
          </View>
          <View style={styles.bankDetailView}>
            <Image
              style={{height: 39, width: 85}}
              source={accountDetails.image}
            />
            <View style={{flexDirection: 'column', marginLeft: 20}}>
              <Text style={styles.bankAccountName}>{accountDetails.bank}</Text>
              <Text
                style={[
                  styles.bankAccountName,
                  {color: COLOR.GREY, marginTop: 15},
                ]}>
                {accountDetails.accNo}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.textView}>
            <Image style={styles.image} source={IMAGES.tickRounded} />
            <Text style={[styles.accountText, {flex: 1, marginLeft: 20}]}>
              {accountDetails.accType
                ? accountDetails.accType
                : MESSAGES.setAccType}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOnclickAccount}
            style={styles.textView}>
            <Image style={styles.image} source={IMAGES.bankAccount} />
            <Text style={[styles.accountText, {flex: 1, marginLeft: 20}]}>
              {MESSAGES.accountInfo}
            </Text>
            <TouchableOpacity onPress={handleOnclickAccount}>
              <Image
                style={{height: 12, width: 8}}
                source={IMAGES.rightArrow}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOnclickTransactionHistory}
            style={styles.textView}>
            <Image
              style={{height: 19, width: 16}}
              source={IMAGES.transactionhistory}
            />
            <Text style={[styles.accountText, {flex: 1, marginLeft: 20}]}>
              {MESSAGES.transactionHistory}
            </Text>
            <TouchableOpacity onPress={handleOnclickTransactionHistory}>
              <Image
                style={{height: 12, width: 8}}
                source={IMAGES.rightArrow}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AccountDetailScreen;

const styles = StyleSheet.create({
  mainView: {
    height: height / 1.3,
    backgroundColor: COLOR.WHITE,
    marginTop: 60,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: COLOR.BORDER_GREY,
  },
  accountView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  accountText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  bankDetailView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLOR.BORDER_GREY,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  bankAccountName: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
  },
  textView: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
    tintColor: COLOR.PRIMARY,
  },
});
