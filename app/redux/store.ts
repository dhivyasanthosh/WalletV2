/*************************************************
 * Wallet
 * @exports
 * store.ts
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Utilities and components
import {HTTPClient} from '../utils/HTTPClient';
import auth from '../redux/slices/AuthSlice';
import device from '../redux/slices/DeviceSlice';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  [HTTPClient.reducerPath]: HTTPClient.reducer,
  auth,
  device,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [], // deletes all state value except "auth" state value
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(HTTPClient.middleware);
    // comment this line if your system doesnt have flipper installed
    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require("redux-flipper").default;
    //   middlewares.push(createDebugger(), logger);
    // }
    return middlewares;
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

setupListeners(store.dispatch);

export {store, persistor};
