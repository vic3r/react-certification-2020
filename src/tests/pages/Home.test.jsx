import React from 'react';
import { render } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';

import Home from '../../pages/Home';

const renderHome = (colorProps, authProps) => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ ...colorProps }}>
        <AuthContext.Provider value={{ ...authProps }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <Home />
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('should render the Home content', () => {
  const { getByText } = renderHome({ colorState: true }, { authenticated: true });
  expect(getByText('WELCOME')).toBeTruthy();
});

test('should render the Home content auth false', () => {
  const { getByText } = renderHome({ colorState: true }, { authenticated: false });
  expect(getByText('WELCOME')).toBeTruthy();
});

test('should render the Home content color false', () => {
  const { getByText } = renderHome({ colorState: false }, { authenticated: false });
  expect(getByText('WELCOME')).toBeTruthy();
});

test('should render null Video List content', () => {
  const { getByTestId } = renderHome({ colorState: true }, { authenticated: true });
  expect(getByTestId('videolist')).toBeTruthy();
});
