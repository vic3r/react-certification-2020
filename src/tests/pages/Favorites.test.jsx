import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';
import Favorites from '../../pages/Favorites';

const renderFavorites = () => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated: true }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <Favorites />
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('renderes the Favorites content', () => {
  const { getByText } = renderFavorites();
  getByText('FAVORITES');
});

test('renderes null Video List content', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = renderFavorites();
  const videoList = getById(dom.container, 'video-list');
  expect(videoList).toBeNull();
});

test('renderes Video List content to be instanceof VideoList', () => {
  const { getByTestId } = renderFavorites();
  expect(getByTestId('videolist')).toBeTruthy();
});
