import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';

import { VIDEO_PLAYER_PAGE } from '../../utils/constants';

import VideoList from '../../components/VideoList';
import video from '../../utils/videoModelTest';

const renderVideoList = () => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/:id" />
              <VideoList videos={[video]} parent={VIDEO_PLAYER_PAGE} />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('render video list content', () => {
  const { getByTestId } = renderVideoList();
  getByTestId('videolist');
});
