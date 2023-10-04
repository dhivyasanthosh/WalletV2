import {render, screen} from '@testing-library/react-native';
import React from 'react';
import ProfileScreen from '../app/screens/profile/ProfileScreen';

test('input fields', () => {
  render(<ProfileScreen />);

  const pwdimg = screen.getAllByTestId('changepwdimg');
  expect(pwdimg).toBeDefined();
  const changePassword = screen.getAllByTestId('changepwd');
  expect(changePassword).toBeDefined();
  const notificationImg = screen.getAllByTestId('notificationImg');
  expect(notificationImg).toBeDefined();
  const notification = screen.getAllByTestId('notification');
  expect(notification).toBeDefined();
  const termsAndConditionsImg = screen.getAllByTestId('terms&conditionImg');
  expect(termsAndConditionsImg).toBeDefined();
  const termsAndConditions = screen.getAllByTestId('terms&condition');
  expect(termsAndConditions).toBeDefined();
  const contactUsImg = screen.getAllByTestId('contactUsImg');
  expect(contactUsImg).toBeDefined();
  const contactUs = screen.getAllByTestId('contactUs');
  expect(contactUs).toBeDefined();
  const settingsImg = screen.getAllByTestId('settingsImg');
  expect(settingsImg).toBeDefined();
  const settings = screen.getAllByTestId('settings');
  expect(settings).toBeDefined();
  const deleteAccountImg = screen.getAllByTestId('deleteAccountImg');
  expect(deleteAccountImg).toBeDefined();
  const deleteAccount = screen.getAllByTestId('deleteAccount');
  expect(deleteAccount).toBeDefined();
  const logoutImg = screen.getAllByTestId('logoutImg');
  expect(logoutImg).toBeDefined();
});
