import React, { useContext, useCallback } from 'react';
import { AUTH_STORAGE_KEY, USER_NAME, PASSWORD } from '../../utils/constants';

import useStorageState from '../useStorageState';

const AuthContext = React.createContext(null);

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

  // const addVideo = useCallback(
  //   (videoSelected) => {
  //     setVideos((favoriteVideos) => [...favoriteVideos, videoSelected]);
  //   },
  //   [setVideos]
  // );

  // const removeVideo = useCallback(
  //   (videoSelected) => {
  //     setVideos((favoriteVideos) =>
  //       favoriteVideos.filter(
  //         (storedVideo) => storedVideo.id.videoId !== videoSelected.id.videoId
  //       )
  //     );
  //   },
  //   [setVideos]
  // );

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth };
export default AuthProvider;
