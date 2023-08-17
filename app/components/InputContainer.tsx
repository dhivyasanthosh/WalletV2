/*************************************************
 * Wallet
 * @exports
 * InputContainer.tsx
 * Created by Dhivya on 07/08/2023
 * Copyright © 2023 Wallet. All rights reserved.
 *************************************************/

// imports
import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';

//components and utilities
import {COLOR, FONT_FAMILY, FONT_SIZE} from '../utils/Constants';

export default ({
  placeholder,
  label,
  style = {},
  textStyle = {},
  multiline = false,
  numberOfLines = 1,
  textInputStyle = {},
  value = '',
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'next',
  onSubmitEditing = () => {},
  onChangeText = () => {},
  reference = () => {},
  secure,
  secureTextEntry = false,
  isSelection = undefined,
  maxLength,
  autoCorrect,
  editable = true,
  isTopLabelHide,
  onPress = () => {},
  rightIconStyles = {},
  rightIcon,
  leftIcon,
  leftIconStyles = {},
  onPressLeftIcon = () => {},
  onPressRightIcon = () => {},
  clearButtonMode = false,
  contextMenuHidden,
}: any) => {
  return (
    <Pressable
      style={[
        {
          // marginTop: 10,
          // borderRadius: 10,
        },
        {...style},
      ]}
      onPress={onPress}>
      <Pressable style={styles.leftIconStyles} onPress={onPressLeftIcon}>
        <Image
          source={leftIcon}
          style={[
            {
              height: 20,
              width: 20,
              objectFit: "contain",
            },
            {...leftIconStyles},
          ]}
        />
      </Pressable>
      <TextInput
        ref={reference}
        style={[
          {
            height: 45,
            paddingHorizontal: 26,
            fontSize: 14,
            fontFamily: FONT_FAMILY.REGULAR,
            color: COLOR.BLACK,
          },
          {...textInputStyle},
        ]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        multiline={multiline}
        numberOfLines={numberOfLines}
        value={value}
        editable={editable}
        keyboardType={keyboardType}
        underlineColorAndroid={'transparent'}
        autoCapitalize={autoCapitalize}
        secure={secure}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        autoCorrect={autoCorrect}
        color={COLOR.BLACK}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        onChangeText={value1 => {
          onChangeText(value1);
        }}
        clearButtonMode={clearButtonMode ? 'while-editing' : 'never'}
        editable={editable}
        onPressOut={onPress}
        selection={isSelection ? {start: 0} : undefined}
        contextMenuHidden={contextMenuHidden}
      />
      <Pressable style={styles.rightIconStyles} onPress={onPressRightIcon}>
        <Image
          source={rightIcon}
          style={[
            {
              height: 20,
              width: 20,
              objectFit: 'contain',
            },
            {...rightIconStyles},
          ]}
        />
      </Pressable>

      <View
        style={{
          backgroundColor: isTopLabelHide ? 'transparent' : 'white',
          position: 'absolute',
          top: isTopLabelHide ? 0 : -9,
          left: 3,
        }}>
        <Text style={[styles.labelTextStyle, {...textStyle}]}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rightIconStyles: {
    position: 'absolute',
    right: 20,
    top: 13,
  },
  leftIconStyles: {
    position: 'absolute',
    left: 10,
    top: 12,
  },
  labelTextStyle: {
    color: COLOR.GREY,
    fontSize: FONT_SIZE.XS,
    paddingHorizontal: 5,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
