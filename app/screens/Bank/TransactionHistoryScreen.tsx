/*************************************************
 * Wallet
 * @exports
 * TransactionHistoryScreen.tsx
 * Created by Dhivya on 04/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
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
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

// components and utilities
import ModalContainer from '../../components/ModalContainer';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {navigateBack} from '../../utils/Utility';

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
];

const TransactionHistoryScreen = () => {
  // state value
  const [isVisibleCancelModal, setIsVisibleCancelModal] = useState(false);
  const [cancelReasonText, setCancelReasonText] = useState('');

  // modal popup for cancel
  const cancelModalPopup = () => (
    <ModalContainer
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
              {MESSAGES.transactionHistory}
            </Text>
            {menuModalView()}
          </View>
          <FlatList
            data={TransactionData}
            renderItem={transactionHistory}
            showsVerticalScrollIndicator={false}
          />
          {cancelModalPopup()}
        </View>
      </ImageBackground>
    </View>
  );
};

export default TransactionHistoryScreen;

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
  menuImage: {
    height: 15,
    width: 14,
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
  menuOptionImages: {
    height: 14,
    width: 14,
  },
  menuItemView: {
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    width: 130,
  },
  menuOptionText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.GREY,
    marginLeft: 10,
    alignItems: 'center',
  },
});
