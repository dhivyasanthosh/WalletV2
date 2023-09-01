/*************************************************
 * Wallet
 * @exports
 * HomeScreen.tsx
 * Created by Dhivya on 28/07/2023
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
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

// components and utilities
import ModalContainer from '../../components/ModalContainer';
import {
  useTransactionDetailsQuery,
  useUserDetailsQuery,
  useWalletDetailsQuery,
} from '../../redux/services/AuthService';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {Ids} from '../../utils/URL';
import {navigate} from '../../utils/Utility';

const {height, width} = Dimensions.get('window');

// sample data
const TransactionData = [
  {
    date: '30-5-2023',
    time: '08:30:40',
    bank: 'USIN-67856755774772-Bank',
    amount: '6788.00',
    balance: '4065.00',
    action: 'credit',
    status: 'completed',
  },
  {
    date: '29-5-2023',
    time: '010:40:40',
    bank: 'USIN-67856755774772-Bank',
    amount: '6788.00',
    balance: '4065.00',
    action: 'Debit',
    status: 'pending',
  },
  {
    date: '30-4-2023',
    time: '09:30:50',
    bank: 'USIN-67856755774772-Bank',
    amount: '$6788.00',
    balance: '4065.00',
    action: 'credit',
    status: 'Rejected',
  },
  {
    date: '21-3-2023',
    time: '08:30:40',
    bank: 'USIN-67856755774772-Bank',
    amount: '5088.00',
    balance: '4065.00',
    action: 'Debit',
    status: 'cancelled',
  },
  {
    date: '30-5-2023',
    time: '08:30:40',
    bank: 'USIN-67856755774772-Bank',
    amount: '6788.00',
    balance: '4065.00',
    action: 'credit',
    status: 'completed',
  },
  {
    date: '30-5-2023',
    time: '08:30:40',
    bank: 'USIN-67856755774772-Bank',
    amount: '6788.00',
    balance: '4065.00',
    action: 'credit',
    status: 'completed',
  },
];

const HomeScreen = () => {
  // state value
  const [isVisibleCancelModal, setIsVisibleCancelModal] = useState(false);
  const [cancelReasonText, setCancelReasonText] = useState('');
  const [data, setData] = useState<any>({});
  const [walletData, setWalletData] = useState<any>({});

  // API function
  const userDetailResponse = useUserDetailsQuery(Ids.userId);
  const walletDetailResponse = useWalletDetailsQuery(Ids.userId);
  const transactionDetailResponse = useTransactionDetailsQuery(Ids.userId);

  useEffect(() => {
    if (userDetailResponse.isSuccess) {
      console.log('success data 1');
      setData(
        userDetailResponse.data.Users.find(item => item.id === Ids.userId),
      );
    } else {
      console.log('failed data 1');
    }
  }, [userDetailResponse]);

  useEffect(() => {
    if (walletDetailResponse.isSuccess) {
      console.log('success wallet 2');
      setWalletData(
        walletDetailResponse.data.response.find(
          item => item.userId === Ids.userId,
        ),
      );
    } else {
      console.log('failed wallet 2');
    }
  }, [walletDetailResponse]);
  useEffect(() => {
    if (transactionDetailResponse.isSuccess) {
      console.log(
        '==============transaction data 1',
        transactionDetailResponse,
      );
    } else {
      console.log('=====================failed data 1');
    }
  }, [transactionDetailResponse]);
  console.log('data =====', data);

  console.log('walletdata=====', walletData);

  // transaction history render
  const transactionHistory = ({item}: any) => (
    <View style={styles.transactionHistoryView}>
      <View style={{flexDirection: 'column'}}>
        <Text style={[styles.dateText, {marginBottom: 10}]}>
          {item.date}/{item.time}
        </Text>
        <Text style={[styles.dateText, {width: 180}]} numberOfLines={2}>
          {item.bank}
        </Text>
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text
          style={[
            styles.dateText,
            {
              marginBottom: 10,
              color: item.action === 'credit' ? COLOR.GREEN : COLOR.RED,
            },
          ]}>
          ${item.amount}
        </Text>
        <Text style={styles.dateText}>Balance:${item.balance}</Text>
      </View>
      {item.status === 'completed' ? (
        <Image style={styles.tickImage} source={IMAGES.tickRounded} />
      ) : item.status === 'Rejected' ? (
        <Image style={styles.tickImage} source={IMAGES.crossIcon} />
      ) : item.status === 'cancelled' ? (
        <Image style={styles.tickImage} source={IMAGES.warning} />
      ) : item.status === 'pending' ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.tickImage} source={IMAGES.threeDot} />
          <TouchableOpacity>
            <Menu>
              <MenuTrigger>
                <Image
                  source={IMAGES.downArrow}
                  style={{height: 8, width: 12, marginLeft: 5}}
                />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={styles.menuOptions}>
                <MenuOption
                  onSelect={() => {
                    setIsVisibleCancelModal(true);
                  }}>
                  <Text style={styles.cancelText}>{MESSAGES.cancel}</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );

  // modal popup for cancel
  const cancelModalPopup = () => (
    <ModalContainer
      testID="modaltest"
      isVisible={isVisibleCancelModal}
      setIsVisible={() => {
        setIsVisibleCancelModal(false);
      }}
      backdropOpacity={0.1}
      children={
        <View style={styles.modalView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalText}>
              {'USIN-678252432436363622-Bank'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleCancelModal(false);
              }}>
              <Image
                style={{height: 24, width: 24}}
                source={IMAGES.closeIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalTitleView}>
            <Text style={[styles.modalReasonText, {flex: 1}]}>
              {MESSAGES.status}
            </Text>
            <Text style={styles.statusText}>{MESSAGES.cancel}</Text>
          </View>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalReasonText}>{MESSAGES.reason}</Text>
            <Text style={[styles.modalReasonText, {color: COLOR.RED}]}>
              {'*'}
            </Text>
          </View>
          <TextInput
            value={cancelReasonText}
            placeholder={MESSAGES.inputplaceholter}
            placeholderTextColor={COLOR.GREY}
            style={styles.inputBox}
            multiline={true}
            onChangeText={(text): any => setCancelReasonText(text)}
          />
          <View style={styles.submitView}>
            <Text style={styles.submitText}>{MESSAGES.submit}</Text>
          </View>
        </View>
      }
    />
  );

  // filter modal popup
  const menuModalView = () => (
    <TouchableOpacity>
      <Menu>
        <MenuTrigger>
          <Image source={IMAGES.menu} style={styles.menuImage} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.menuItemView}>
          <MenuOption onSelect={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.menuOptionImages}
                source={IMAGES.dataArrow}
              />
              <Text style={styles.menuOptionText}>{MESSAGES.date}</Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.menuOptionImages}
                source={IMAGES.modalCheckBox}
              />
              <Text style={styles.menuOptionText}>{MESSAGES.pending}</Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.menuOptionImages}
                source={IMAGES.modalCheckBox}
              />
              <Text style={styles.menuOptionText}>{MESSAGES.completed}</Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.menuOptionImages}
                source={IMAGES.modalCheckBox}
              />
              <Text style={styles.menuOptionText}>{MESSAGES.cancelled}</Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.menuOptionImages}
                source={IMAGES.modalCheckBox}
              />
              <Text style={styles.menuOptionText}>{MESSAGES.rejected}</Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
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
        <View style={styles.nameView}>
          <Text testID="welcomeName" style={styles.nameText}>
            Welcome back {data?.firstName}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Image style={{height: 21, width: 18}} source={IMAGES.bellIcon} />
          </TouchableOpacity>
          <View style={styles.batchView}>
            <Text style={{color: COLOR.WHITE, fontSize: FONT_SIZE.TINY}}>
              {'2'}
            </Text>
          </View>
        </View>

        <View style={styles.cardView}>
          <Text style={styles.cardTitle}>
            {data?.firstName} {data?.lastName}
          </Text>
          <View style={styles.accountView}>
            <Text style={styles.cardText}>{MESSAGES.accountNo}</Text>
            <View style={styles.accountNo}>
              <Text style={styles.amount}>{walletData?.accountNumber}</Text>
              <Image source={IMAGES.eyeopen} style={styles.eyeImage} />
            </View>
          </View>
          <View style={styles.accountView}>
            <Text style={styles.cardText}>{MESSAGES.currentBalance}</Text>
            <View style={styles.accountNo}>
              <Text style={styles.amount}>$ {walletData?.currentBalance}</Text>
            </View>
          </View>
          <View style={styles.accountView}>
            <Text style={styles.cardText}>{MESSAGES.availableBalance}</Text>
            <View style={styles.accountNo}>
              <Text style={styles.amount}>
                $ {walletData?.availableBalance}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => navigate('transfer', {})}
            style={styles.transferbutton}>
            <Text style={styles.transferText}>{MESSAGES.transfer}</Text>
            <Image style={styles.transferImage} source={IMAGES.transfer} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('fund', {})}
            style={[styles.transferbutton, {marginHorizontal: 5}]}>
            <Text style={styles.transferText}>{MESSAGES.fund}</Text>
            <Image style={styles.transferImage} source={IMAGES.fund} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('withdraw', {})}
            style={styles.transferbutton}>
            <Text style={styles.transferText}>{MESSAGES.withdraw}</Text>
            <Image style={styles.transferImage} source={IMAGES.withdraw} />
          </TouchableOpacity>
        </View>

        <View style={styles.transactionView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.transactionText}>
              {MESSAGES.transactionHistory}
            </Text>
            {menuModalView()}
          </View>
          <FlatList
            data={TransactionData}
            renderItem={transactionHistory}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
      {cancelModalPopup()}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  nameText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.WHITE,
    flex: 1,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height / 16,
    paddingHorizontal: 20,
  },
  batchView: {
    height: 14,
    width: 14,
    backgroundColor: COLOR.RED,
    borderRadius: 50,
    position: 'absolute',
    right: 30,
    bottom: 12,
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BORDER_GREY,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 30,
  },
  cardTitle: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  cardText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.GREY,
  },
  amount: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  accountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  accountNo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeImage: {
    height: 10,
    width: 16,
    marginLeft: 10,
  },
  buttonView: {
    flexDirection: 'row',
    marginHorizontal: 35,
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  transferbutton: {
    height: 40,
    width: 100,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY_1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.PRIMARY_1,
  },
  transferImage: {
    height: 16,
    width: 16,
    marginLeft: 10,
  },
  transactionView: {
    backgroundColor: COLOR.WHITE,
    borderColor: COLOR.BORDER_GREY,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 10,
    height: Platform.OS === 'ios' ? height / 2.1 : height / 1.9,
  },
  transactionText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
    flex: 1,
    marginBottom: 10,
  },
  menuImage: {
    height: 15,
    width: 14,
  },
  menuOptionImages: {
    height: 14,
    width: 14,
  },
  menuItemView: {
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    width: 120,
  },
  menuOptionText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.GREY,
    marginLeft: 10,
    alignItems: 'center',
  },
  transactionHistoryView: {
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.BORDER_GREY,
    padding: 10,
  },
  dateText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.TINY,
    color: COLOR.LIGHT_GREY,
  },
  tickImage: {
    height: 15,
    width: 15,
    alignSelf: 'center',
  },
  menuOptions: {
    alignItems: 'center',
    padding: 5,
    width: 100,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
  cancelText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
  },
  modalView: {
    backgroundColor: COLOR.WHITE,
    padding: 20,
    borderRadius: 10,
  },
  modalTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
    flex: 1,
  },
  modalReasonText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
  },
  statusText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BROWN,
    marginRight: 40,
  },
  inputBox: {
    backgroundColor: COLOR.INPUT_GREY,
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
    paddingTop: 15,
    padding: 15,
    borderRadius: 5,
  },
  submitView: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  submitText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.WHITE,
  },
});
