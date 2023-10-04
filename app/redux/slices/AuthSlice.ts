import {createSlice} from '@reduxjs/toolkit';
import {authService} from '../services/AuthService';

const initialState = {
  tokenDetails: '',
  userDetails: [],
  walletDetails: [],
  searchUsers: [],
  transactionDetails: [],
  externalAccountList: [],
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authService.endpoints.login.matchFulfilled,
      (state, {payload}) => {
        state.tokenDetails = payload;
      },
    );
    builder.addMatcher(
      authService.endpoints.userDetails.matchFulfilled,
      (state, {payload}) => {
        state.userDetails = payload.response;
      },
    );
    builder.addMatcher(
      authService.endpoints.walletDetails.matchFulfilled,
      (state, {payload}) => {
        state.walletDetails = payload.response;
      },
    );
    builder.addMatcher(
      authService.endpoints.transactionDetails.matchFulfilled,
      (state, {payload}) => {
        state.transactionDetails = payload.response;
      },
    );
    builder.addMatcher(
      authService.endpoints.searchUsers.matchFulfilled,
      (state, {payload}) => {
        state.searchUsers = payload.response;
      },
    );
    builder.addMatcher(
      authService.endpoints.externalAccountList.matchFulfilled,
      (state, {payload}) => {
        state.externalAccountList = payload.response;
      },
    );
  },
});

export default authSlice.reducer;
