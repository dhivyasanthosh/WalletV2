/*************************************************
 * Wallet
 * @exports
 * Constants.ts
 * Created by Dhivya on 27/07/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// Colors
export const COLOR = {
  BLACK: '#000000',
  LIGHT_BLACK: '#232128',
  WHITE: '#FFFFFF',
  PRIMARY: '#4C70FF',
  PRIMARY_1: '#407BFF',
  PRIMARY_2: '#E7EEFF',
  SECONDARY: '#7646EC',
  TAB_BG: '#F4F6FF',
  BG_THEME: '#E2F0FF',
  RED: '#DD1717',
  GREEN: '#11964E',
  GREY: '#7B8389',
  SKY_BLUE: '#D4F9FF',
  LIGHT_GREY: '#2D3748',
  SEARCH_GREY: '#F3F3F3',
  BORDER_GREY: '#EBEEF3',
  INPUT_GREY: '#F9F9F9',
  BROWN: '#B06D07',
};

// Font Size
export const FONT_SIZE = {
  GAINT: 84,
  MONSTER: 32,
  MEGA: 30,
  BIG: 28,
  XXXL: 26,
  XXL: 24,
  XL: 22,
  L: 20,
  M: 18,
  REGULAR: 16,
  S: 14,
  XS: 12,
  TINY: 10,
};

// Font family
export const FONT_FAMILY = {
  REGULAR: 'Poppins-Regular',
  MEDIUM: 'Poppins-Medium',
  BOLD: 'Poppins-Bold',
  SEMI_BOLD: 'Poppins-SemiBold',
};

// Regular Expressions
export const REGEX = {
  NAME: new RegExp(/^[a-z A-Z ']*$/),
  PASSWORD: new RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,100}$/,
  ),
  EMAIL: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ),
  PHONE_NUBER: new RegExp(/^[0-9 +()-]*$/),
  ONLY_NUBER: new RegExp(/^[0-9]*$/),
};
