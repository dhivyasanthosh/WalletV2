/*************************************************
 * Wallet
 * @exports
 * WithDrawScreen.tsx
 * Created by Dhivya on 02/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
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
import RadioButton from '../../components/RadioButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Ids} from '../../utils/URL';
import { useExternalAccountListQuery } from '../../redux/services/AuthService';

const {height, width} = Dimensions.get('window');

// sample data
const BankAccountData = [
  {
    id: '1',
    image: IMAGES.bankLogo1,
    accNo: '**** **** 5634',
    accType: 'Primary Account',
    isPrimary: true,
  },
  {
    id: '2',
    image: IMAGES.bankLogo2,
    accNo: '**** **** 5678',
    isPrimary: false,
  },
  {
    id: '3',
    image: IMAGES.bankLogo3,
    accNo: '**** **** 5634',
    isPrimary: false,
  },
];

const WithDrawScreen = () => {
  // state values
  const [amount, setAmount] = useState('');
  const [textAmount, setTextAmount] = useState(false);
  const [isVisibleBankAccount, setISVisibleBankAccount] = useState(false);
  const [isVisibleTransactionpopup, setISVisibleTransactionpopup] =
    useState(false);
  const [bankAccountData, setBankAccountData] = useState(BankAccountData);
  const [selectedAccount, setSelectedAccount] = useState({});
  const [walletData, setWalletData] = useState<any>({});

  // global state values
  const walletDetails = useSelector(
    (state: RootState) => state.auth.walletDetails,
  );

  const externalAccountListResponse = useExternalAccountListQuery(Ids.userId);

  useEffect(() => {
    if (externalAccountListResponse.isSuccess) {
      console.log('Successfully');
    } else {
      console.log('failed');
    }
  }, [externalAccountListResponse]);

  useEffect(() => {
    const walletId = walletDetails.find(item => item.userId === Ids.userId);
    setWalletData(walletId);
  }, []);

  useEffect(() => {
    const primaryAccount = bankAccountData.find(
      account => account.isPrimary === true,
    );
    if (primaryAccount?.isPrimary) {
      setSelectedAccount(primaryAccount);
      handleOnClick(primaryAccount);
    }
  }, []);

  const handleOnClickWithdrawPay = () => {
    if (amount === '') {
      setTextAmount(true);
    } else {
      setTextAmount(false);
      setISVisibleTransactionpopup(true);
    }
  };

  // choose account modal
  const bankAccountDetails = () => (
    <ModalContainer
      isVisible={isVisibleBankAccount}
      setIsVisible={() => {
        setISVisibleBankAccount(false);
      }}
      backdropOpacity={0}
      children={
        <View style={styles.dropdownView}>
          <FlatList
            data={bankAccountData}
            renderItem={renderBankDetails}
            showsVerticalScrollIndicator={false}
          />
        </View>
      }
    />
  );

  // on select function
  const handleOnClick = (data: any) => {
    let bankAccountArray = [...bankAccountData];
    bankAccountArray.map((selectedData, index) => {
      if (selectedData.id === data.id) {
        bankAccountArray[index].selected = true;
      } else {
        bankAccountArray[index].selected = false;
      }
    });
    setBankAccountData(bankAccountArray);
    setSelectedAccount(data);
    setISVisibleBankAccount(false);
  };

  // render bank data
  const renderBankDetails = ({item}: any) => (
    <TouchableOpacity
      onPress={() => {
        handleOnClick(item);
      }}
      style={styles.accountView}>
      <Image style={styles.banklogoImage} source={item.image} />
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={styles.accountText}>{item.accNo}</Text>
        <Text style={styles.accountTypetext}>{item.accType}</Text>
      </View>
      <RadioButton
        value={item.selected}
        onChange={() => {
          handleOnClick(item);
        }}
      />
    </TouchableOpacity>
  );

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
              {MESSAGES.withdraw}
            </Text>
            <Text style={styles.transferText}>{MESSAGES.balance}: </Text>
            <Text style={[styles.transferText, {color: COLOR.PRIMARY}]}>
              $ {walletData.availableBalance}
            </Text>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.transferText}>{MESSAGES.amount}</Text>
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
            {textAmount && (
              <Text style={styles.validationText}>{'Enter Amount'}</Text>
            )}

            <Text style={styles.chooseAccText}>{MESSAGES.chooseAcc}</Text>
            <TouchableOpacity
              onPress={() => {
                setISVisibleBankAccount(true);
              }}
              style={[styles.accountView, {padding: 20}]}>
              <Image
                style={styles.banklogoImage}
                source={selectedAccount.image}
              />
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={styles.accountText}>{selectedAccount.accNo}</Text>
                <Text style={styles.accountTypetext}>
                  {selectedAccount.accType}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setISVisibleBankAccount(true);
                }}>
                <Image
                  style={{height: 9, width: 16}}
                  source={IMAGES.downArrowBlue}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleOnClickWithdrawPay()}
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
              {MESSAGES.withdraw}
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
        {bankAccountDetails()}
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
            <Text style={styles.transactionTitle}>{MESSAGES.transaction}</Text>
            <Text style={styles.transactionText}>
              {MESSAGES.transactionStatus}
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default WithDrawScreen;

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
  amountView: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
  },
  amountInputView: {
    flexDirection: 'row',
    backgroundColor: COLOR.PRIMARY_2,
    borderRadius: 8,
    padding: Platform.OS === 'ios' ? 10 : 0,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  amountInputBox: {
    color: COLOR.PRIMARY,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  chooseAccText: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: 20,
  },
  accountView: {
    flexDirection: 'row',
    marginVertical: 5,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.BORDER_GREY,
    padding: 10,
    alignItems: 'center',
  },
  banklogoImage: {
    height: 27,
    width: 60,
    marginRight: 20,
  },
  accountTypetext: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.TINY,
    color: COLOR.GREY,
  },
  accountText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
    marginBottom: 5,
  },
  dropdownView: {
    elevation: 10,
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor: COLOR.WHITE,
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    width: '95%',
    marginHorizontal: 10,
    top: height / 2.3,
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
    marginHorizontal: 20,
  },
  validationText: {
    fontSize: FONT_SIZE.XS,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLOR.RED,
  },
});
