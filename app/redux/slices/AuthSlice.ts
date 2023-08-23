import {createSlice} from '@reduxjs/toolkit';
import {TokenDetails} from '../../entities/AuthObject';
import {authService} from '../services/AuthService';

type authState = {
  tokenDetails: TokenDetails | null;
};

const initialState: authState = {
  tokenDetails: null,
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
  },
});

export default authSlice.reducer;
