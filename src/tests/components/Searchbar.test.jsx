import React from 'react';
import { render } from '@testing-library/react';
import Searchbar from '../../components/Searchbar';
import AuthProvider from '../../providers/Auth';
import VideoContext from '../../state/VideoContext';

const authenticated = true;

const renderSearchBar = () => {
  return render(
    <VideoContext.Provider value={{ colorState: true }}>
      <AuthProvider value={{ authenticated }}>
        <Searchbar />
      </AuthProvider>
    </VideoContext.Provider>
  );
};

test('render content get color label', () => {
  const { getByLabelText } = renderSearchBar();
  expect(getByLabelText('color')).toBeTruthy();
});
