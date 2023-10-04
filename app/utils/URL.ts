/*************************************************
 * Wallet
 * @exports
 * URL.ts
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// Base URL
export const getBaseURL = 'http://localhost:7071';

export const LOGIN = 'v1/auth/login';
export const USER_DETAILS = '/api/GetUsers';
export const WALLET_ACCOUNT = '/api/GetWalletAccounts';
export const WALLET_TRANSACTION_HISTORY = '/api/GetTransactionDetails';
export const GET_USER_BYSEARCH = 'api/GetUsersBySearch';
export const LINK_EXTERNAL_ACCOUNT = '/api/LinkExternalAccount';
export const EXTERNAL_ACCOUNTS_LIST = '/api/GetExternalAccounts';

export const PERSIST_EXTERNAL_ACCOUNT = '/api/PersistExternalAccount';
export const FUND_WALLET = '/api/CreateFundWalletRequest';
export const WITHDRAW_WALLET = '/api/CreateWithdrawFromWalletRequest';
export const FUND_TRANSACTION_HISTORY = '/api/GetFundTransferRequests';
export const TRANSFER_WALLET = '/api/ProcessWalletToWalletTransfer';
export const SEARCH_USERS = '/api/GetUsersBySearch';
export const CANCEL_TRANSACTION = '/api/CancelFundTransferRequest';
export const PRIMARY_ACCOUNT = '/api/SetPrimaryExternalAccount';

export const LoginIds = {
  client_id: 'concertidc_wallet',
  client_secret: 'secret@concertidc_wallet',
};

export const Ids = {
  userId: 'a33f09c8-ea6e-11ed-9551-705a0fd8966d',
  tenantId: '00000000-0000-0000-0000-000000000000',
};
