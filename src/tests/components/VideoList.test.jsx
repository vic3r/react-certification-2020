import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoContext from '../../state/VideoContext';
import { VIDEO_PLAYER_PAGE } from '../../utils/constants';

import VideoList from '../../components/VideoList';
import video from '../../utils/videoModelTest';

const renderVideoList = () => {
  return render(
    <VideoContext.Provider value={{ videos: [], colorState: true }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" />
          <VideoList videos={[video]} parent={VIDEO_PLAYER_PAGE} />
        </Switch>
      </BrowserRouter>
    </VideoContext.Provider>
  );
};

test('render video list content', () => {
  const { getByTestId } = renderVideoList();
  getByTestId('videolist');
});
