import React, { useContext, useCallback } from 'react';
import { AUTH_STORAGE_KEY, USER_NAME, PASSWORD } from '../../utils/constants';

import useStorageState from '../useStorageState';
import AuthContext from '../../state/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useStorageState(AUTH_STORAGE_KEY, false);

  const login = useCallback(
    ({ username, password }) => {
      if (username === USER_NAME && password === PASSWORD) {
        setAuthenticated(true);
      }
    },
    [setAuthenticated]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
  }, [setAuthenticated]);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
