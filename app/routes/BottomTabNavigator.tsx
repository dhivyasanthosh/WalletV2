/*************************************************
 * Wallet
 * @exports
 * BottomTabNavigator.tsx
 * Created by Dhivya on 28/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// components & utilities
import {COLOR} from '../utils/Constants';
import HomeScreen from '../screens/home/HomeScreen';
import {IMAGES} from '../utils/SharedImages';
import AccountScreen from '../screens/Bank/AccountScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

// global initialization
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        unmountOnBlur: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconStyle = {height: 26, width: 24};

          if (route.name === 'Home') {
            iconName = focused ? IMAGES.homeActive : IMAGES.homeInActive;
          }
          if (route.name === 'Account') {
            iconName = focused ? IMAGES.bankActive : IMAGES.bankInActive;
          }
          if (route.name === 'Profile') {
            iconName = focused ? IMAGES.profileActive : IMAGES.profileInActive;
          }
          return <Image source={iconName} style={iconStyle} />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.TAB_BG,
          height: Platform.OS === 'ios' ? 80 : 60,
          paddingBottom: Platform.OS === 'ios' ? 15 : 5,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowColor: '#00000070',
          shadowOpacity: 0.6,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          paddingBottom: Platform.OS === 'ios' ? 15 : 5,
          marginTop: -10,
        },
      })}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
