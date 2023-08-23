/*************************************************
 * Beynd
 * @exports
 * DeviceSlice.ts
 * Created by Maniratnam on 03/02/2023
 * Copyright © 2023 Beynd. All rights reserved.
 *************************************************/

// imports
import {createSlice} from '@reduxjs/toolkit';

type deviceState = {
  isNetworkAvailable: boolean | any;
  isJustInstalled: boolean;
};

const initialState: deviceState = {
  isNetworkAvailable: true,
  isJustInstalled: true,
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    updateNetworkStatus: (state, action) => {
      state.isNetworkAvailable = action.payload;
    },
    updateInstalledStatus: (state, action) => {
      state.isJustInstalled = action.payload;
    },
  },
  extraReducers: {},
});

export const {updateNetworkStatus, updateInstalledStatus} = deviceSlice.actions;

export default deviceSlice.reducer;
