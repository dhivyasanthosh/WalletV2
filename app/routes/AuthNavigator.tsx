/*************************************************
 * Wallet
 * @exports
 * AuthNavigator.tsx
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// import
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// components & utilities
import LoginScreen from '../screens/auth/LoginScreen';

export type AuthStackParamList = {
  login: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'login'} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
