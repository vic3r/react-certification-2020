import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthContext from '../../state/AuthContext';
import FavoritesContext from '../../state/FavoritesContext';
import ColorContext from '../../state/ColorContext';
import VideoContext from '../../state/VideoContext';
import Drawer from '../../components/Drawer';

const renderLogin = (authenticated) => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated }}>
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

describe('drawer content', () => {
  const dom = renderLogin({ authenticated: true });
  const drawerIcon = dom.getByTestId('test-icon-drawer');

  it('should get the drawer icon', () => {
    expect(drawerIcon).toBeTruthy();
  });

  it('should menu be open on drawer icon click', () => {
    expect(fireEvent.click(drawerIcon)).toBeTruthy();
  });

  it('should menu be open on drawer icon click', () => {
    expect(fireEvent.click(drawerIcon)).toBeTruthy();
  });
});
