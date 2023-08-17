/*************************************************
 * Wallet
 * @exports
 * MainNavigator.tsx
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// import
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// components & utilities
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import {navigationRef} from '../utils/Utility';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import TransferScreen from '../screens/home/TransferScreen';
import FundScreen from '../screens/home/FundScreen';
import WithDrawScreen from '../screens/home/WithDrawScreen';
import AccountDetailScreen from '../screens/Bank/AccountDetailScreen';
import AccountInformationScreen from '../screens/Bank/AccountInformationScreen';
import TransactionHistoryScreen from '../screens/Bank/TransactionHistoryScreen';
import Step1 from '../screens/Bank/FPB Screens/Step1';
import Step2 from '../screens/Bank/FPB Screens/Step2';
import Step3 from '../screens/Bank/FPB Screens/Step3';
import Step4 from '../screens/Bank/FPB Screens/Step4';
import TransferPayScreen from '../screens/home/TransferPayScreen';
import Step5 from '../screens/Bank/FPB Screens/Step5';

export type MainStackParamList = {
  splash: undefined;
  welcome: undefined;
  auth: undefined;
  main: undefined;
  home: undefined;
  transfer: undefined;
  transferpay: undefined;
  fund: undefined;
  withdraw: undefined;
  accountdetail: undefined;
  accountinformation: undefined;
  transactionhistory: undefined;
  step1: undefined;
  step2: undefined;
  step3: undefined;
  step4: undefined;
  step5: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        initialRouteName={'splash'}
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="splash" component={SplashScreen} />
        <MainStack.Screen name="welcome" component={WelcomeScreen} />
        <MainStack.Screen name="auth" component={AuthNavigator} />
        <MainStack.Screen name="transfer" component={TransferScreen} />
        <MainStack.Screen name="transferpay" component={TransferPayScreen} />
        <MainStack.Screen name="fund" component={FundScreen} />
        <MainStack.Screen name="withdraw" component={WithDrawScreen} />
        <MainStack.Screen
          name="accountdetail"
          component={AccountDetailScreen}
        />
        <MainStack.Screen
          name="accountinformation"
          component={AccountInformationScreen}
        />
        <MainStack.Screen
          name="transactionhistory"
          component={TransactionHistoryScreen}
        />
        <MainStack.Screen
          name="main"
          component={BottomTabNavigator}
          options={{animationEnabled: false}}
        />
        <MainStack.Screen name="step1" component={Step1} />
        <MainStack.Screen name="step2" component={Step2} />
        <MainStack.Screen name="step3" component={Step3} />
        <MainStack.Screen name="step4" component={Step4} />
        <MainStack.Screen name="step5" component={Step5} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
