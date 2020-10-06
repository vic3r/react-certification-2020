import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, queryByAttribute } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';
import Favorites from '../../pages/Favorites';
import NotFoundPage from '../../pages/NotFound';

const renderFavorites = (props) => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ ...props }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <BrowserRouter>
              <Switch>
                <Favorites />
                <Route exact path="/" component={NotFoundPage} />
              </Switch>
            </BrowserRouter>
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('renderes the Favorites content', () => {
  const { getByText } = renderFavorites({ authenticated: true });
  getByText('FAVORITES');
});

test('renderes null Video List content', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = renderFavorites({ authenticated: true });
  const videoList = getById(dom.container, 'video-list');
  expect(videoList).toBeNull();
});
