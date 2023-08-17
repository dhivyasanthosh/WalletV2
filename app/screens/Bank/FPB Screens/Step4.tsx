/*************************************************
 * Wallet
 * @exports
 * Step4.tsx
 * Created by Dhivya on 07/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React from 'react';
import {
  Dimensions,
  FlatList,
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

const {height, width} = Dimensions.get('window');

// sample data
const PlaidData = [
  {
    type: 'Plaid Checking',
    accNo: '... ... 0000',
  },
  {
    type: 'Plaid Saving',
    accNo: '... ... 1111',
  },
  {
    type: 'Plaid Credit Card',
    accNo: '... ... 2222',
  },
];

const Step4 = () => {
  // state value

  // render data
  const renderPlaidData = ({item}: any) => (
    <View style={styles.plaidBox}>
      <TouchableOpacity>
        <Image style={{height: 16, width: 16}} source={IMAGES.checkBox} />
      </TouchableOpacity>
      <View style={{flexDirection: 'column', marginLeft: 20}}>
        <Text style={styles.PlaidText}>{item.type}</Text>
        <Text style={styles.PlaidText}>{item.accNo}</Text>
      </View>
    </View>
  );

  // initial render
  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.headerView}>
        <Image style={styles.imageView} source={IMAGES.fpb} />
        <Text style={styles.fpbText}>{MESSAGES.FPB}</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.textStyle}>
          {'Simulate OAuth experience with account selection step'}
        </Text>
        <Image style={{height: 25, width: 25}} source={IMAGES.whiteTick} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{margin: 16, marginBottom: 30}}>
        <Text style={styles.contentText}>{'Connect account information'}</Text>
        <Text style={[styles.contentText, {color: COLOR.GREY}]}>
          {
            'Select the accounts you want First Platypus to connect with Plaid. Please note that not all account information may be available for connecting at this time.'
          }
        </Text>
        <Text style={styles.contentText}>{'Select account(s) to share'}</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={PlaidData}
          renderItem={renderPlaidData}
        />
        <Text style={styles.contentText}>
          {
            'Plaid’s Tiny Quickstart will access the following standard information:'
          }
        </Text>
        <Text style={[styles.contentText, {color: COLOR.GREY}]}>
          {
            'Account Name, Description, Balance, Account, Transactions, Statement, Date, Payment Details'
          }
        </Text>
        <Text style={styles.contentText}>
          {'Select additional information you want to share'}
        </Text>
        <View style={styles.checkboxView}>
          <TouchableOpacity>
            <Image style={{height: 16, width: 16}} source={IMAGES.checkBox} />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            {
              'Account holder name(s) & Role(s) (Data necessary to verify account ownership)'
            }
          </Text>
        </View>
        <View style={styles.checkboxView}>
          <TouchableOpacity>
            <Image style={{height: 16, width: 16}} source={IMAGES.checkBox} />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            {
              'Account number and routing number (Date necessary to enable money movement across financial institutions)'
            }
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate('step5', {});
          }}
          style={styles.continueButtonView}>
          <Text style={styles.continueButton}>{MESSAGES.continue}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Step4;

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
  contentTitle: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  contentText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
    marginTop: 15,
  },
  plaidBox: {
    elevation: 10,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BORDER_GREY,
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  PlaidText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.GREY,
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
});
