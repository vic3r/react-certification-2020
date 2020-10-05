import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, queryByAttribute } from '@testing-library/react';
import ColorContext from '../../state/ColorContext';

import Video from '../../components/Video';
import VideoPlayer from '../../pages/VideoPlayer';
import item from '../../utils/videoModelTest';

const renderVideo = () => {
  const isHome = true;

  return render(
    <ColorContext.Provider value={{ colorState: true }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id" component={VideoPlayer} />
          <Video item={item} isHome={isHome} />
        </Switch>
      </BrowserRouter>
    </ColorContext.Provider>
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
