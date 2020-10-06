import React from 'react';
import { render } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';

const renderProvider = () => {
  return render(<AuthProvider />);
};

test('render auth provider', () => {
  const { getAllByText } = renderProvider();
  expect(getAllByText('')).toBeTruthy();
});
