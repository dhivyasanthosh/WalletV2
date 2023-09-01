import {render, screen} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../app/screens/auth/LoginScreen';

// test('renders correctly', () => {
//   const tree = renderer.create(<LoginScreen />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('input fields', () => {
  render(<LoginScreen />);

  const pageHeading = screen.getByTestId('welcomeback');
  expect(pageHeading).toBeDefined();
  const email = screen.getByTestId('email');
  expect(email).toBeDefined();
  const password = screen.getByTestId('password');
  expect(password).toBeDefined();
  const loginbtn = screen.getByTestId('loginbtn');
  expect(loginbtn).toBeDefined();
});
