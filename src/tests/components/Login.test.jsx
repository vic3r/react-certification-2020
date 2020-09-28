import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import VideoContext from '../../state/VideoContext';
import Login from '../../components/Login';

const authenticated = true;

const renderLogin = () => {
  return render(
    <VideoContext.Provider value={{ videos: [], colorState: true }}>
      <AuthProvider value={{ authenticated }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/:id" />
            <Login />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </VideoContext.Provider>
  );
};

describe('login content', () => {
  const dom = renderLogin();
  const loginIconButton = dom.getByTestId('login-icon-button');

  it('Should get the login button', () => {
    expect(loginIconButton).toBeTruthy();
  });
  it('Should be the unique button', () => {
    expect(loginIconButton).toHaveAttribute('aria-label', 'account of current user');
  });
  it('Should be the unique mobile button', () => {
    expect(loginIconButton).toHaveAttribute('aria-label', 'account of current user');
  });
  it('Should menu be open on click in icon button', () => {
    expect(fireEvent.click(loginIconButton)).toBeTruthy();
  });
});
