import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthContext from '../../state/AuthContext';
import ColorContext from '../../state/ColorContext';
import VideoContext from '../../state/VideoContext';
import Login from '../../components/Login';
import { CustomMenu, CustomMobileMenu } from '../../components/Login/Menu.component';
import ModalBody from '../../components/Login/ModalBody.component';

const renderLogin = () => {
  return render(
    <VideoContext.Provider value={{ videos: [] }}>
      <ColorContext.Provider value={{ colorState: true }}>
        <AuthContext.Provider value={{ authenticated: true }}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/:id" />
              <Login />
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </ColorContext.Provider>
    </VideoContext.Provider>
  );
};

const renderMenuComponent = (props) => {
  return render(<CustomMenu {...props} />);
};

const renderMobileMenuComponent = (props) => {
  return render(<CustomMobileMenu {...props} />);
};

const renderModalBody = (authProps, props) => {
  return render(
    <AuthContext.Provider value={authProps}>
      <ModalBody {...props} />
    </AuthContext.Provider>
  );
};

const getLoginButton = () => {
  const dom = renderLogin();
  const loginIconButton = dom.getByTestId('login-icon-button');
  return loginIconButton;
};

test('should get the login button', () => {
  expect(getLoginButton()).toBeTruthy();
});

test('should be the unique button', () => {
  expect(getLoginButton()).toHaveAttribute('aria-label', 'account of current user');
});

test('should be the unique mobile button', () => {
  expect(getLoginButton()).toHaveAttribute('aria-label', 'account of current user');
});

test('should menu be open on click in icon button', () => {
  expect(fireEvent.click(getLoginButton())).toBeTruthy();
});

test('should menu exists', () => {
  const { getByTestId } = renderMenuComponent();
  expect(getByTestId('menu-component')).toBeTruthy();
});

test('should mobile menu exists', () => {
  const { getByTestId } = renderMobileMenuComponent();
  expect(getByTestId('mobile-menu-component')).toBeTruthy();
});

test('should menu create button to authenticate', () => {
  const { getByTestId } = renderMenuComponent({ authenticated: false });
  expect(getByTestId('menu-item-login')).toBeTruthy();
});

test('should mobile create button to authenticate', () => {
  const { getByTestId } = renderMobileMenuComponent({ authenticated: false });
  expect(getByTestId('mobile-menu-item-login')).toBeTruthy();
});

test('should menu create button to deauthenticate', () => {
  const { getByTestId } = renderMenuComponent({ authenticated: true });
  expect(getByTestId('menu-item-logout')).toBeTruthy();
});

test('should mobile create button to deauthenticate', () => {
  const { getByTestId } = renderMobileMenuComponent({ authenticated: true });
  expect(getByTestId('mobile-menu-item-logout')).toBeTruthy();
});

test('should modal body exists', () => {
  const authProps = {
    authenticated: false,
    login: ({ username, password }) => `${username}: + ${password}`,
  };
  const { getByTestId } = renderModalBody(authProps, () => {});
  expect(getByTestId('usernameinput')).toBeTruthy();
  expect(getByTestId('passwordinput')).toBeTruthy();
  expect(fireEvent.click(getByTestId('cancelbutton'))).toBeTruthy();
  expect(fireEvent.click(getByTestId('loginbutton'))).toBeTruthy();
});

test('should modal body click in buttons', () => {
  const authProps = {
    authenticated: false,
    login: ({ username, password }) => `${username}: + ${password}`,
  };
  const { getByTestId } = renderModalBody(authProps, () => {});
  expect(fireEvent.click(getByTestId('cancelbutton'))).toBeTruthy();
  expect(fireEvent.click(getByTestId('loginbutton'))).toBeTruthy();
});
