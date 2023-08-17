/*************************************************
 * Wallet
 * @exports
 * TransferPayScreen.tsx
 * Created by Dhivya on 01/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {navigateBack} from '../../utils/Utility';
import ModalContainer from '../../components/ModalContainer';
import {useRoute} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

const TransferPayScreen = () => {
  // state values
  const [amount, setAmount] = useState('');
  const [addNoteValue, setAddNoteValue] = useState('');
  const [isVisibleTransactionpopup, setISVisibleTransactionpopup] = useState(false);

  const route = useRoute();
  const {transferDetails} = route.params;

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
          <View style={styles.transferView}>
            <Pressable
              onPress={() => {
                navigateBack();
              }}>
              <Image
                style={{height: 17, width: 18}}
                source={IMAGES.backArrow}
              />
            </Pressable>
            <Text style={[styles.transferText, {flex: 1, marginStart: 5}]}>
              {MESSAGES.pay}
            </Text>
            <Text style={styles.transferText}>{MESSAGES.balance}</Text>
            <Text style={[styles.transferText, {color: COLOR.PRIMARY}]}>
              {'$ 45,785.00'}
            </Text>
          </View>
          <View style={{alignItems: 'center', flex: 1}}>
            <Image style={styles.profileImage} source={transferDetails.image} />
            <Text style={styles.nameText}>{transferDetails.name}</Text>
            <Text style={styles.phoneText}>{transferDetails.phoneNo}</Text>
            <View style={styles.amountInputView}>
              <Text style={styles.amountInputBox}>{'$ '}</Text>
              <TextInput
                style={styles.amountInputBox}
                placeholder={MESSAGES.dollar}
                placeholderTextColor={COLOR.PRIMARY}
                value={amount}
                inputMode={'numeric'}
                onChangeText={setAmount}
              />
            </View>
            <TextInput
              style={styles.addnotesText}
              placeholder={MESSAGES.addnote}
              placeholderTextColor={COLOR.GREY}
              value={addNoteValue}
              inputMode={'numeric'}
              onChangeText={setAddNoteValue}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setISVisibleTransactionpopup(true);
            }}
            style={[
              styles.fundButton,
              {
                backgroundColor: isVisibleTransactionpopup
                  ? COLOR.PRIMARY
                  : COLOR.WHITE,
              },
            ]}>
            <Text
              style={[
                styles.fundText,
                {
                  color: isVisibleTransactionpopup
                    ? COLOR.WHITE
                    : COLOR.PRIMARY,
                },
              ]}>
              {MESSAGES.pay}
            </Text>
            <Image
              style={{
                height: 16,
                width: 15,
                tintColor: isVisibleTransactionpopup
                  ? COLOR.WHITE
                  : COLOR.PRIMARY,
              }}
              source={IMAGES.rightArrowBlue}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ModalContainer
        isVisible={isVisibleTransactionpopup}
        setIsVisible={() => {
          setISVisibleTransactionpopup(false);
        }}
        backdropOpacity={0.1}
        children={
          <View style={styles.transactionpopupView}>
            <Image
              style={{height: 32, width: 32}}
              source={IMAGES.transactionTick}
            />
            <Text style={styles.transactionTitle}>
              {MESSAGES.transactionCompleted}
            </Text>
            <Text style={styles.transactionText}>
              {`Congratulations, Money has been transferred from your wallet to ${transferDetails.name}.`}
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default TransferPayScreen;

const styles = StyleSheet.create({
  mainView: {
    height: Platform.OS === 'ios' ? height / 1.2 : height / 1.1,
    backgroundColor: COLOR.WHITE,
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: COLOR.BORDER_GREY,
  },
  transferView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  transferText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  amountInputView: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY_2,
    borderRadius: 8,
    padding: Platform.OS === 'ios' ? 10 : 0,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  amountInputBox: {
    color: COLOR.PRIMARY,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  addnotesText: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
    backgroundColor: COLOR.INPUT_GREY,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 30,
  },
  nameText: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.REGULAR,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 10,
  },
  phoneText: {
    color: COLOR.GREY,
    fontSize: FONT_SIZE.XS,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 5,
  },
  fundButton: {
    flexDirection: 'row',
    borderColor: COLOR.PRIMARY,
    borderWidth: 1,
    display: 'flex',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  fundText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.PRIMARY,
    marginRight: 10,
  },
  transactionpopupView: {
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  transactionTitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.GREEN,
    marginVertical: 10,
  },
  transactionText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.GREY,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
