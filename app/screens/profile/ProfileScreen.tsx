/*************************************************
 * Wallet
 * @exports
 * profileScreen.tsx
 * Created by Dhivya on 28/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
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
import {navigate} from '../../utils/Utility';
import ConfirmPopup from '../../components/ConfirmPopup';

const {height, width} = Dimensions.get('window');

// sample data
const profileData = {
  name: 'John Williamson',
  email: 'johnwilliam@gmail.com',
  phoneNo: '+764674687585',
  image: IMAGES.profilepictures,
};

const ProfileScreen = () => {
  // state value
  const [isVisibleLogout, setIsVisibleLogout] = useState(false);
  // initial render
  return (
    <View style={styles.mainView}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ImageBackground
        style={{height: 125, marginTop: 25, flex: 1}}
        source={IMAGES.profileBgImage}>
        <View style={{padding: 20}}>
          <TouchableOpacity>
            <Image style={styles.editImage} source={IMAGES.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameView}>
          <Image style={styles.profileImage} source={profileData.image} />
          <Text style={styles.nameText}>{profileData.name}</Text>
          <Text style={styles.emailText}>{profileData.email}</Text>
          <Text style={styles.numberText}>{profileData.phoneNo}</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.listView}>
            <Image
              testID="changepwdimg"
              style={styles.listImage}
              source={IMAGES.changePwd}
            />
            <Text testID="changepwd" style={styles.listText}>
              {MESSAGES.changepwd}
            </Text>
            <TouchableOpacity>
              <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}>
            <Image
              testID="notificationImg"
              style={styles.listImage}
              source={IMAGES.notification}
            />
            <Text testID="notification" style={styles.listText}>
              {MESSAGES.notification}
            </Text>
            <TouchableOpacity>
              <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}>
            <Image
              testID="terms&conditionImg"
              style={styles.listImage}
              source={IMAGES.termsAndConditions}
            />
            <Text testID="terms&condition" style={styles.listText}>
              {MESSAGES.termsandconditions}
            </Text>
            <TouchableOpacity>
              <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}>
            <Image
              testID="contactUsImg"
              style={styles.listImage}
              source={IMAGES.contactUs}
            />
            <Text testID="contactUs" style={styles.listText}>
              {MESSAGES.contactus}
            </Text>
            <TouchableOpacity>
              <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}>
            <Image
              testID="settingsImg"
              style={styles.listImage}
              source={IMAGES.settings}
            />
            <Text testID="settings" style={styles.listText}>
              {MESSAGES.settings}
            </Text>
            <TouchableOpacity>
              <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView}>
            <Image
              testID="deleteAccountImg"
              style={styles.listImage}
              source={IMAGES.delete}
            />
            <Text testID="deleteAccount" style={styles.listText}>
              {MESSAGES.deleteAccount}
            </Text>
            <TouchableOpacity>
              <Image style={styles.rightArrow} source={IMAGES.rightArrow} />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsVisibleLogout(true);
            }}
            style={styles.listView}>
            <Image
              testID="logoutImg"
              style={styles.listImage}
              source={IMAGES.logout}
            />
            <Text testID="logout" style={[styles.listText, {color: COLOR.RED}]}>
              {MESSAGES.logout}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      <ConfirmPopup
        isVisible={isVisibleLogout}
        title={MESSAGES.logout}
        label={MESSAGES.logout_popup}
        onConfirmClick={() => {
          navigate('login', {});
        }}
        onCancelClick={() => setIsVisibleLogout(false)}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: COLOR.WHITE,
    flex: 1,
    padding: 16,
  },
  editImage: {
    width: 32,
    height: 32,
    alignSelf: 'flex-end',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  nameView: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: COLOR.BORDER_GREY,
  },
  nameText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.REGULAR,
    color: COLOR.BLACK,
    marginTop: 20,
  },
  emailText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.PRIMARY,
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  numberText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.XS,
    color: COLOR.BLACK,
    marginBottom: 15,
  },
  listView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  listText: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.S,
    color: COLOR.BLACK,
    marginLeft: 20,
    flex: 1,
  },
  listImage: {
    height: 40,
    width: 40,
  },
  rightArrow: {
    height: 13,
    width: 7,
    tintColor: COLOR.GREY,
  },
});
