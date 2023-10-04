import {render, screen} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../app/screens/home/HomeScreen';

test('input fields', () => {
  render(<HomeScreen />);
  const welcomeName = screen.getAllByTestId('welcomeName');
  expect(welcomeName).toBeDefined();
  const modalTest = screen.getAllByTestId('modaltest');
  expect(modalTest).toBeDefined();
});
