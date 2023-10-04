import {HTTPClient} from '../../utils/HTTPClient';
import {
  EXTERNAL_ACCOUNTS_LIST,
  GET_USER_BYSEARCH,
  LOGIN,
  USER_DETAILS,
  WALLET_ACCOUNT,
  WALLET_TRANSACTION_HISTORY,
} from '../../utils/URL';

export const authService = HTTPClient.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<any, any>({
      query: credentials => ({
        url: LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
    userDetails: build.query<any, any>({
      query: () => ({
        url: USER_DETAILS,
        method: 'GET',
      }),
    }),
    walletDetails: build.query<any, any>({
      query: () => ({
        url: WALLET_ACCOUNT,
        method: 'GET',
      }),
    }),
    searchUsers: build.query({
      query: () => ({
        url: GET_USER_BYSEARCH,
        method: 'GET',
      }),
    }),
    transactionDetails: build.query<any, any>({
      query: () => ({
        url: WALLET_TRANSACTION_HISTORY,
        method: 'GET',
      }),
    }),
    externalAccountList: build.query<any, any>({
      query: () => ({
        url: EXTERNAL_ACCOUNTS_LIST,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useUserDetailsQuery,
  useWalletDetailsQuery,
  useTransactionDetailsQuery,
  useSearchUsersQuery,
  useExternalAccountListQuery,
} = authService;
