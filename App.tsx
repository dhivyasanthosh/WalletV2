/*************************************************
 * Wallet
 * @exports
 * App.tsx
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React from 'react';
import {useColorScheme} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './app/redux/store';

// components and utilities
import MainNavigator from './app/routes/MainNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuProvider>
          <MainNavigator />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
