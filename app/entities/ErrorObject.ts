/*************************************************
 * Wallet
 * @exports
 * ErrorObject.ts
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// Customize Error Format Types
export type CustomError = {
  status: number;
  data: {
    code: number;
    status: string;
    message: string;
  };
};

export type ErrorObj = {
  code: number;
  status: string;
  message: string;
};
