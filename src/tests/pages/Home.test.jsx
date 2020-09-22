import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';

import Home from '../../pages/Home';

const renderHome = () => {
  return render(
    <VideoContext.Provider value={{ videos: [], colorState: true }}>
      <Home />
    </VideoContext.Provider>
  );
};

const renderHomeWithContent = () => {
  return render(
    <VideoContext.Provider value={{ videos: [], colorState: true }}>
      <Home />
    </VideoContext.Provider>
  );
};

test('renderes the Home content', () => {
  const { getByText } = renderHome();
  getByText('WELCOME');
});

test('renderes null Video List content', () => {
  // const vl = jest.mock('../../components/VideoList', () => () => <VideoList />);
  const getById = queryByAttribute.bind(null, 'id');
  const dom = renderHome();
  const videoList = getById(dom.container, 'video-list');
  expect(videoList).toBeNull();
});

test('renderes Video List content to be instanceof VideoList', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = renderHomeWithContent();
  getById(dom.container, 'video-list');
});
