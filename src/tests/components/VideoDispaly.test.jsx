import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import AuthProvider from '../../providers/Auth';

import VideoDisplay from '../../components/VideoDisplay';
import video from '../../utils/videoModelTest';

const renderVideoDisplay = (item) => {
  return render(
    <VideoContext.Provider value={{ colorState: true }}>
      <AuthProvider>
        <VideoDisplay video={item} />
      </AuthProvider>
    </VideoContext.Provider>
  );
};

test('Renders the VideoDisplay content', () => {
  const { getByTitle } = renderVideoDisplay(video);

  expect(getByTitle('video player')).toBeTruthy();
});

test('Renders the VideoDisplay with no Iframe', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = renderVideoDisplay(null);
  const videoContainer = getById(dom.container, 'video-not-found');
  expect(videoContainer).toBeTruthy();
});
