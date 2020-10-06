import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('render content get input base ', () => {
  const { getByTestId } = renderSearchBar();
  expect(getByTestId('inputbase')).toBeTruthy();
});

test('change state of input base ', () => {
  const { getByTestId } = renderSearchBar();
  fireEvent.submit(getByTestId('inputbase'));
});

test('change state of input base with term', () => {
  const { getByTestId } = renderSearchBar();
  const input = getByTestId('inputbase');
  fireEvent.focus(input);
  fireEvent.change(input, 'wizeline');
  fireEvent.submit(input);
});

test('change state of custom color switch ', () => {
  const { getByTestId } = renderSearchBar();
  fireEvent.click(getByTestId('customswitch'));
});
