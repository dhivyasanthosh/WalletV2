/*************************************************
 * Wallet
 * @exports
 * AccountScreen.tsx
 * Created by Dhivya on 28/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import InputContainer from '../../components/InputContainer';

// components and utilities
import ModalContainer from '../../components/ModalContainer';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {navigate} from '../../utils/Utility';

const {height, width} = Dimensions.get('window');

// sample data
const BankAccountData = [
  {
    accName: 'John Williamson',
    email: 'john.w@gmail.com',
    accFullno: '57754342685634',
    bank: 'Bank of America',
    phoneNo: '+556 347 3466',
    accMode: 'Savings',
    branchCode: '67577',
    brandCode: '5559887BHGGUF',
    bankAdd: '230 E, Washington(US) - 9812, United staes',
    image: IMAGES.bankLogo1,
    accNo: '**** **** 5634',
    accType: 'Primary Account',
  },
  {
    accName: 'John Williamson',
    email: 'john.w@gmail.com',
    accFullno: '57754342685634',
    bank: 'American Express',
    phoneNo: '+556 347 3466',
    accMode: 'Savings',
    branchCode: '67577',
    brandCode: '5559887BHGGUF',
    bankAdd: '230 E, Washington(US) - 9812, United staes',
    image: IMAGES.bankLogo2,
    accNo: '**** **** 5678',
  },
  {
    accName: 'John Williamson',
    email: 'john.w@gmail.com',
    accFullno: '57754342685634',
    bank: 'UBS',
    phoneNo: '+556 347 3466',
    accMode: 'Savings',
    branchCode: '67577',
    brandCode: '5559887BHGGUF',
    bankAdd: '230 E, Washington(US) - 9812, United staes',
    image: IMAGES.bankLogo3,
    accNo: '**** **** 5634',
  },
];

const BankList = [
  {
    image: IMAGES.bankLogo4,
    bankName: 'Chase',
    link: 'www.chase.com',
  },
  {
    image: IMAGES.bankLogo8,
    bankName: 'Bank of America',
    link: 'www.bankofamerica.com',
  },
  {
    image: IMAGES.bankLogo5,
    bankName: 'Wells Fargo',
    link: 'www.wellsfargo.com',
  },
  {
    image: IMAGES.bankLogo6,
    bankName: 'Citibank Online',
    link: 'www.citi.com',
  },
  {
    image: IMAGES.bankLogo7,
    bankName: 'USA',
    link: 'www.usaa.com',
  },
];

const AccountScreen = () => {
  // state value
  const [isVisibleFirstPopup, setIsVisibleFirstPopup] = useState(false);
  const [isVisibleSecondPopup, setIsVisibleSecondPopup] = useState(false);
  const [isVisibleThirdPopup, setIsVisibleThirdPopup] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // render bank data
  const renderBankDetails = ({item}: any) => (
    <TouchableOpacity
      onPress={() => {
        navigate('accountdetail', {
          accountDetails: item,
        });
      }}
      style={styles.accountView}>
      <Image style={styles.banklogoImage} source={item.image} />
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={styles.accountText}>{item.accNo}</Text>
        <Text style={styles.accountTypetext}>{item.accType}</Text>
      </View>
      <TouchableOpacity>
        <Image style={{height: 12, width: 8}} source={IMAGES.rightArrow} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // Main Bank Account list
  const accountListContent = () => {
    return (
      <View style={styles.mainView}>
        <Text style={styles.linkedAccText}>{MESSAGES.linkedacc}</Text>
        <FlatList
          data={BankAccountData}
          renderItem={renderBankDetails}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setIsVisibleFirstPopup(true);
                }}
                style={styles.addBankView}>
                <Image style={styles.addBankImage} source={IMAGES.addBank} />
                <Text style={styles.addBanktext}>{MESSAGES.addBankAcc}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setIsVisibleFirstPopup(true);
                  }}>
                  <Image style={{height: 12, width: 12}} source={IMAGES.plus} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const renderModalPopup1 = () => (
    <>
      <ModalContainer
        isVisible={isVisibleFirstPopup}
        setIsVisible={() => {
          setIsVisibleFirstPopup(false);
        }}
        backdropOpacity={0.5}
        children={
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleFirstPopup(false);
              }}>
              <Image style={styles.closeIcon} source={IMAGES.closeIcon} />
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 84, width: 160}}
                source={IMAGES.plaidsImage}
              />
              <Text style={styles.modaltitle}>
                {'Plaid’s Tiny Quickstart uses Plaid to connect your account'}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Image style={{height: 20, width: 20}} source={IMAGES.connect} />
              <View style={{flexDirection: 'column', marginHorizontal: 20}}>
                <Text style={styles.connectText}>{'Connect effortlessly'}</Text>
                <Text style={styles.connectSubText}>
                  {
                    'Plaid lets you securely connect your financial accounts in seconds'
                  }
                </Text>
              </View>
            </View>
            <View style={styles.connectViewLine}>
              <Image
                style={{height: 20, width: 20, tintColor: COLOR.BLACK}}
                source={IMAGES.eyecross}
              />
              <View style={{flexDirection: 'column', marginHorizontal: 20}}>
                <Text style={styles.connectText}>
                  {'Your data belongs to you'}
                </Text>
                <Text style={styles.connectSubText}>
                  {
                    'Plaid doesn’t sell personal info, and will only user it with your permission'
                  }
                </Text>
              </View>
            </View>
            <Text style={styles.agreementText}>
              {'By selecting “Continue” you agree to the'}
            </Text>
            <Text
              style={[styles.agreementText, {textDecorationLine: 'underline'}]}>
              {'Plaid End User Privacy Policy'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleFirstPopup(false);
                setTimeout(() => {
                  setIsVisibleSecondPopup(true);
                }, 400);
              }}
              style={styles.continueButtonView}>
              <Text style={[styles.connectText, {color: COLOR.WHITE}]}>
                {MESSAGES.continue}
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </>
  );

  // render bank list in popup
  const renderPopupBankList = ({item}: any) => (
    <TouchableOpacity
      onPress={() => {
        setIsVisibleSecondPopup(false);
        setTimeout(() => {
          setIsVisibleThirdPopup(true);
        }, 400);
      }}
      style={styles.bankListView}>
      <View>
        <Image style={{height: 25, width: 27}} source={item.image} />
      </View>
      <View style={{flexDirection: 'column', marginLeft: 20}}>
        <Text style={styles.accountText}>{item.bankName}</Text>
        <Text style={styles.accountTypetext}>{item.link}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderModalPopup2 = () => (
    <>
      <ModalContainer
        isVisible={isVisibleSecondPopup}
        setIsVisible={() => {
          setIsVisibleSecondPopup(false);
        }}
        backdropOpacity={0.5}
        children={
          <View style={styles.modalView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setIsVisibleSecondPopup(false);
                  setTimeout(() => {
                    setIsVisibleFirstPopup(true);
                  }, 400);
                }}>
                <Image
                  style={{height: 15, width: 24}}
                  source={IMAGES.backArrow}
                />
              </TouchableOpacity>
              <Image
                style={{width: 82, height: 31}}
                source={IMAGES.plaidLogo}
              />
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setIsVisibleSecondPopup(false);
                }}>
                <Image style={styles.closeIcon} source={IMAGES.closeIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.selectText}>
              {MESSAGES.select_your_institution}
            </Text>
            <View style={styles.searchView}>
              <InputContainer
                value={searchValue}
                placeholder={MESSAGES.select_your_institution}
                textInputStyle={styles.searchInput}
                isTopLabelHide={true}
                leftIcon={IMAGES.searchIconRight}
                leftIconStyles={{}}
                onChangeText={text => setSearchValue(text)}
              />
            </View>
            <FlatList
              data={BankList}
              renderItem={renderPopupBankList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        }
      />
    </>
  );

  const renderModalPopup3 = () => (
    <>
      <ModalContainer
        isVisible={isVisibleThirdPopup}
        setIsVisible={() => {
          setIsVisibleThirdPopup(false);
        }}
        backdropOpacity={0.5}
        children={
          <View style={styles.modalView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setIsVisibleThirdPopup(false);
                  setTimeout(() => {
                    setIsVisibleSecondPopup(true);
                  }, 400);
                }}>
                <Image
                  style={{height: 15, width: 24}}
                  source={IMAGES.backArrow}
                />
              </TouchableOpacity>
              <Image
                style={{width: 82, height: 31}}
                source={IMAGES.plaidLogo}
              />
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  setIsVisibleSecondPopup(false);
                }}>
                <Image style={styles.closeIcon} source={IMAGES.closeIcon} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
              <Image style={{height: 52, width: 52}} source={IMAGES.plaidbg} />
              <Image
                style={{height: 52, width: 52}}
                source={IMAGES.bankImageGreen}
              />
            </View>
            <Text
              style={[styles.connectText, {fontFamily: FONT_FAMILY.SEMI_BOLD}]}>
              {'Authenticate with Chase'}
            </Text>
            <View style={styles.numberView}>
              <Text style={styles.numberText}>{'1.'}</Text>
              <Text style={styles.connectText}>
                {'After you select Continue. you’ll be taken to Chase'}
              </Text>
            </View>
            <View style={styles.numberView}>
              <Text style={styles.numberText}>{'2.'}</Text>
              <Text style={styles.connectText}>
                {'Authenticate with Chase'}
              </Text>
            </View>
            <View style={styles.numberView}>
              <Text style={styles.numberText}>{'3.'}</Text>
              <Text style={styles.connectText}>
                {'You’ll be directed back to Plaid’s Tiny Quickstart'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleThirdPopup(false);
                navigate('step1', {});
              }}
              style={[styles.continueButtonView, {marginTop: height / 6}]}>
              <Text style={[styles.connectText, {color: COLOR.WHITE}]}>
                {MESSAGES.continue}
              </Text>
            </TouchableOpacity>
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
      <ImageBackground
        style={{height: height / 3.5}}
        source={IMAGES.backgroundImg}>
        {isVisibleFirstPopup || isVisibleSecondPopup || isVisibleThirdPopup
          ? null
          : accountListContent()}
        {renderModalPopup1()}
        {renderModalPopup2()}
        {renderModalPopup3()}
      </ImageBackground>
    </View>
  );
};

export default AccountScreen;

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
  linkedAccText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
    marginBottom: 20,
  },
  accountView: {
    flexDirection: 'row',
    marginVertical: 10,
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
  },
  addBankView: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.BORDER_GREY,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  addBankImage: {
    height: 32,
    width: 32,
  },
  addBanktext: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.PRIMARY_1,
    marginHorizontal: 15,
  },
  modalView: {
    backgroundColor: COLOR.WHITE,
    padding: 20,
    borderRadius: 10,
  },
  closeIcon: {
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
  },
  modaltitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
    textAlign: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  connectText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  connectSubText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.LIGHT_BLACK,
    marginTop: 8,
  },
  connectViewLine: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GREY,
    paddingBottom: 25,
    marginBottom: 15,
  },
  agreementText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
    textAlign: 'center',
  },
  continueButtonView: {
    backgroundColor: COLOR.BLACK,
    alignSelf: 'center',
    paddingHorizontal: 90,
    paddingVertical: 12,
    marginVertical: 20,
    borderRadius: 4,
  },
  selectText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
    marginTop: 20,
  },
  searchView: {
    padding: 5,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    marginTop: 20,
  },
  searchInput: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
  },
  bankListView: {
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.BORDER_GREY,
    padding: 10,
    alignItems: 'center',
  },
  numberView: {
    flexDirection: 'row',
    marginTop: 15,
    marginRight: 20,
  },
  numberText: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.M,
    color: COLOR.BLACK,
    marginRight: 10,
  },
});
