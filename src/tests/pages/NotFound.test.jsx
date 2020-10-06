import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';

import NotFoundPage from '../../pages/NotFound';

const renderNotFound = () => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated: true }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <BrowserRouter>
              <Switch>
                <NotFoundPage />
                <Route exact path="/" component={NotFoundPage} />
              </Switch>
            </BrowserRouter>
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('renderes the not found content', () => {
  const { getByTestId } = renderNotFound();
  expect(getByTestId('notfound')).toBeTruthy();
});
