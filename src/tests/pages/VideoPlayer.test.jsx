import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';

import selectedVideo from '../../utils/videoModelTest';
import VideoPlayer from '../../pages/VideoPlayer';
import HomePage from '../../pages/Home';

const location = { location: { selectedVideo } };
const renderVideoPlayer = () => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated: true }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <VideoPlayer props={location} />
              </Switch>
            </BrowserRouter>
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

// test('renderes the VideoPlayer content', () => {
//   const { getByTestId } = renderVideoPlayer();
//   expect(getByTestId('videoplayer')).toBeTruthy();
// });

// test('renderes null Video List content', () => {
//   const { getByTestId } = renderVideoPlayer();
//   expect(getByTestId('videodisplay')).toBeTruthy();
// });

test('renderes Video List content to be instanceof VideoList', () => {
  const { getByTestId } = renderVideoPlayer();
  expect(getByTestId('videolist')).toBeTruthy();
});
