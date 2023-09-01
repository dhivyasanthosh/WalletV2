/*************************************************
 * Wallet
 * @exports
 * TransferScreen.tsx
 * Created by Dhivya on 01/08/2023
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
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

// components and utilities
import InputContainer from '../../components/InputContainer';
import {RootState} from '../../redux/store';
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../../utils/Constants';
import {MESSAGES} from '../../utils/Message';
import {IMAGES} from '../../utils/SharedImages';
import {Ids} from '../../utils/URL';
import {navigate, navigateBack} from '../../utils/Utility';

const {height, width} = Dimensions.get('window');

// sample data
const TransferData = [
  {
    image: IMAGES.profile1,
    name: 'William',
    date: '30-05-2023',
    amount: '$78,000',
    action: 'Received',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile2,
    name: 'Alberto',
    date: '29-05-2023',
    amount: '$18,000',
    action: 'sent',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile3,
    name: 'Zack',
    date: '27-05-2023',
    amount: '$10,000',
    action: 'sent',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile4,
    name: 'Philip',
    date: '26-05-2023',
    amount: '$18,000',
    action: 'Received',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile5,
    name: 'Salena',
    date: '25-05-2023',
    amount: '$14,000',
    action: 'Received',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile2,
    name: 'Alia',
    date: '29-05-2023',
    amount: '$18,000',
    action: 'sent',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile3,
    name: 'Rose',
    date: '27-05-2023',
    amount: '$10,000',
    action: 'sent',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile4,
    name: 'Zack',
    date: '26-05-2023',
    amount: '$18,000',
    action: 'Received',
    phoneNo: '+86766690676',
  },
  {
    image: IMAGES.profile5,
    name: 'willam',
    date: '25-05-2023',
    amount: '$14,000',
    action: 'Received',
    phoneNo: '+86766690676',
  },
];

const TransferScreen = () => {
  // state values
  const [searchValue, setSearchValue] = useState<string>('');
  const [walletData, setWalletData] = useState<any>({});

  // global state values
  const walletDetails = useSelector(
    (state: RootState) => state.auth.walletDetails,
  );
  useEffect(() => {
    const walletId = walletDetails.find(item => item.userId === Ids.userId);
    setWalletData(walletId);
  }, []);

  // render transfer history
  const renderTransferDetails = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('transferpay', {
            transferDetails: item,
          });
        }}
        style={styles.accountView}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Image style={styles.profileImage} source={item.image} />
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text style={styles.nameText}>{item.name}</Text>
          {searchValue ? (
            <Text style={styles.dateText}>{item.phoneNo}</Text>
          ) : (
            <Text style={styles.dateText}>{item.date}</Text>
          )}
        </View>
        {searchValue ? null : (
          <View style={{flexDirection: 'column'}}>
            <Text
              style={[
                styles.nameText,
                {color: item.action === 'sent' ? COLOR.RED : COLOR.GREEN},
              ]}>
              {item.amount}
            </Text>
            <Text style={[styles.dateText, {alignSelf: 'flex-end'}]}>
              {item.action}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  // initial render
  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
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
              {MESSAGES.transfer}
            </Text>
            <Text style={styles.transferText}>{MESSAGES.balance}: </Text>
            <Text style={[styles.transferText, {color: COLOR.PRIMARY}]}>
              $ {walletData.availableBalance}
            </Text>
          </View>
          <View style={styles.searchInputContainer}>
            <InputContainer
              value={searchValue}
              placeholder={MESSAGES.search}
              textInputStyle={styles.searchInput}
              isTopLabelHide={true}
              leftIcon={IMAGES.searchIcon}
              leftIconStyles={{}}
              onChangeText={text => setSearchValue(text)}
            />
          </View>
          <Text style={[styles.transferText, {marginBottom: 10}]}>
            {MESSAGES.recent}
          </Text>
          <FlatList
            data={TransferData.filter(item =>
              item.name.toLowerCase().includes(searchValue.toLowerCase()),
            )}
            // data={TransferData}
            renderItem={renderTransferDetails}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TransferScreen;

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
  accountView: {
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.BORDER_GREY,
    padding: 10,
    alignItems: 'center',
  },
  profileImage: {
    height: 32,
    width: 32,
    borderRadius: 50,
    marginRight: 20,
  },
  nameText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
  },
  dateText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.TINY,
    color: COLOR.GREY,
  },
  searchInputContainer: {
    borderRadius: 8,
    backgroundColor: COLOR.SEARCH_GREY,
    marginBottom: 20,
  },
  searchInput: {
    color: COLOR.BLACK,
    fontSize: FONT_SIZE.S,
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 10,
  },
});
