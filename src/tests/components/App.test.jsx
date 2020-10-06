import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

const renderApp = () => {
  return render(<App />);
};

test('should get the app component', () => {
  const { getByTestId } = renderApp();
  expect(getByTestId('apptest')).toBeTruthy();
});
