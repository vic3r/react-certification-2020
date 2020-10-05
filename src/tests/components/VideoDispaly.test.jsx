import React from 'react';
import { render } from '@testing-library/react';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import AuthProvider from '../../providers/Auth';
import FavoritesProvider from '../../providers/Favorites';

import VideoDisplay from '../../components/VideoDisplay';
import video from '../../utils/videoModelTest';

const authenticated = true;

const renderVideoDisplay = (item) => {
  return render(
    <VideoContext.Provider value={{ colorState: true }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthProvider value={{ authenticated }}>
          <FavoritesProvider>
            <VideoDisplay video={item} />
          </FavoritesProvider>
        </AuthProvider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('Renders the VideoDisplay content', () => {
  const { getByTitle } = renderVideoDisplay(video);

  expect(getByTitle('video player')).toBeTruthy();
});
