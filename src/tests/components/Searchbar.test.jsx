import React from 'react';
import { render } from '@testing-library/react';
import Searchbar from '../../components/Searchbar';
import AuthContext from '../../state/AuthContext';
import ColorContext from '../../state/ColorContext';
import VideoContext from '../../state/VideoContext';

const renderSearchBar = () => {
  return render(
    <VideoContext.Provider>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated: true }}>
          <Searchbar />
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('render content get color label', () => {
  const { getByLabelText } = renderSearchBar();
  expect(getByLabelText('color')).toBeTruthy();
});

test('change state of input base ', () => {
  const { getByTestId } = renderSearchBar();
  expect(getByTestId('inputbase')).toBeTruthy();
});
