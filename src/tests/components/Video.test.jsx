import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, queryByAttribute } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import { VIDEO_PLAYER_PAGE } from '../../utils/constants';

import Video from '../../components/Video';
import item from '../../utils/videoModelTest';

const renderVideo = () => {
  return render(
    <VideoContext.Provider value={{ videos: [], colorState: true }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" />
          <Video item={item} parent={VIDEO_PLAYER_PAGE} />
        </Switch>
      </BrowserRouter>
    </VideoContext.Provider>
  );
};

test('renderes the Video content', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = renderVideo();
  const videoContainer = getById(dom.container, 'video-container');
  expect(videoContainer).toBeTruthy();
});

test('renderes the Video content image', () => {
  const { getByAltText } = renderVideo();
  const img = getByAltText(item.snippet.title);
  expect(img).toHaveAttribute('alt', item.snippet.title);
  expect(img).toHaveAttribute('src', item.snippet.thumbnails.medium.url);
});
