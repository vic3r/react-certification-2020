import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorContext from '../../state/ColorContext';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';

import VideoDisplay from '../../components/VideoDisplay';
import InteractiveButton from '../../components/VideoDisplay/InteractiveButton.component';
import video from '../../utils/videoModelTest';

const renderVideoDisplay = (item) => {
  return render(
    <ColorContext.Provider value={{ colorState: true }}>
      <AuthContext.Provider value={{ authenticated: true }}>
        <FavoritesContext.Provider value={{ videos: [] }}>
          <VideoDisplay video={item} />
        </FavoritesContext.Provider>
      </AuthContext.Provider>
    </ColorContext.Provider>
  );
};

const renderInteractiveButton = (props) => {
  return render(
    <FavoritesContext.Provider value={{ addVideo: () => {}, removeVideo: () => {} }}>
      <InteractiveButton {...props} />
    </FavoritesContext.Provider>
  );
};

test('renders the VideoDisplay content', () => {
  const { getByTitle } = renderVideoDisplay(video);
  expect(getByTitle('video player')).toBeTruthy();
});

test('renders the interactive add button', () => {
  const { getByTestId } = renderInteractiveButton({ canBeAdded: false, video });
  expect(getByTestId('button-add')).toBeTruthy();
});

test('renders the interactive remove button', () => {
  const { getByTestId } = renderInteractiveButton({ canBeAdded: true, video });
  expect(getByTestId('button-remove')).toBeTruthy();
});

test('renders the interactive add button', () => {
  const { getByTestId } = renderInteractiveButton({ canBeAdded: false, video });
  fireEvent.click(getByTestId('button-add'));
});

test('renders the interactive remove button', () => {
  const { getByTestId } = renderInteractiveButton({ canBeAdded: true, video });
  fireEvent.click(getByTestId('button-remove'));
});
