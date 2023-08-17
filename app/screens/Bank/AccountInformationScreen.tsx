/*************************************************
 * Wallet
 * @exports
 * AccountInformationScreen.tsx
 * Created by Dhivya on 04/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {navigateBack} from '../../utils/Utility';

const {height, width} = Dimensions.get('window');

const AccountInformationScreen = () => {
  // state value
  const route = useRoute();
  const {accountInformation} = route.params;

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
              {MESSAGES.accountInfo}
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginHorizontal: 15}}>
            <Text style={styles.titleText}>{MESSAGES.accName}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.accName}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.accEmail}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.email}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.accountNo}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.accFullno}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.bank}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.bank}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.phoneNo}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.phoneNo}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.accType}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.accMode}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.branchCode}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.branchCode}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.brandCode}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.brandCode}
            </Text>
            <Text style={styles.titleText}>{MESSAGES.bankAddress}</Text>
            <Text style={[styles.accountText, {marginTop: 8}]}>
              {accountInformation.bankAdd}
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AccountInformationScreen;

const styles = StyleSheet.create({
  mainView: {
    height: Platform.OS === 'ios' ? height / 1.2 : height / 1.1,
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
    marginBottom: 10,
  },
  accountText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  titleText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.GREY,
    marginTop: 15,
  },
});
