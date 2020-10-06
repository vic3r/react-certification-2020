import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';
import ColorContext from '../../state/ColorContext';
import VideoContext from '../../state/VideoContext';
import Drawer from '../../components/Drawer';
import DrawerList from '../../components/Drawer/DrawerList.component';

const renderDrawer = (props) => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ props }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <BrowserRouter>
              <Switch>
                <Drawer />
              </Switch>
            </BrowserRouter>
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

const renderDrawerList = (authenticated) => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated }}>
          <FavoritesContext.Provider value={{ videos: [] }}>
            <BrowserRouter>
              <Switch>
                <DrawerList />
              </Switch>
            </BrowserRouter>
          </FavoritesContext.Provider>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

test('should get the drawer icon', () => {
  const { getByTestId } = renderDrawer({ authenticated: true });
  expect(getByTestId('test-icon-drawer')).toBeTruthy();
});

test('should menu be open on drawer icon click', () => {
  const { getByTestId } = renderDrawer({ authenticated: true });
  expect(fireEvent.click(getByTestId('test-icon-drawer'))).toBeTruthy();
});

test('should menu be open on drawer', () => {
  const { getByTestId } = renderDrawer({ authenticated: true });
  fireEvent.click(getByTestId('test-icon-drawer'));
  expect(getByTestId('defaultdrawer')).toBeTruthy();
});

test('should menu be close on drawer', () => {
  const { getByTestId } = renderDrawer({ authenticated: true });
  fireEvent.click(getByTestId('test-icon-drawer'));
  fireEvent.click(getByTestId('defaultpresentation'));
});

test('should get homepath list item', () => {
  const { getByTestId } = renderDrawerList({ authenticated: true });
  expect(getByTestId('homepath')).toBeTruthy();
});

test('should get favorites list item', () => {
  const { getByTestId } = renderDrawerList({ authenticated: true });
  expect(getByTestId('favoritespath')).toBeTruthy();
});

test('should get homepath list item in auth false', () => {
  const { getByTestId } = renderDrawerList({ authenticated: false });
  expect(getByTestId('homepath')).toBeInTheDocument();
});

test('should get favorites path list item in auth false', () => {
  const { getByTestId } = renderDrawerList({ authenticated: false });
  expect(getByTestId('favoritespath')).toBeInTheDocument();
});

test('should click the homepath link', () => {
  const { getByTestId } = renderDrawerList({ authenticated: true });
  fireEvent.click(getByTestId('homepath'));
});

test('should click the favoritespath link ', () => {
  const { getByTestId } = renderDrawerList({ authenticated: true });
  fireEvent.click(getByTestId('favoritespath'));
});
