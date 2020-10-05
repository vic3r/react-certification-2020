import React from 'react';
import { render } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';

import Home from '../../pages/Home';

const renderHome = () => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated: true }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <Home />
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('renderes the Home content', () => {
  const { getByText } = renderHome();
  expect(getByText('WELCOME')).toBeTruthy();
});

test('renderes null Video List content', () => {
  const { getByTestId } = renderHome();
  expect(getByTestId('videolist')).toBeTruthy();
});
