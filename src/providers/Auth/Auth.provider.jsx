import React, { useState, useEffect, useContext, useCallback } from 'react';

import {
  AUTH_STORAGE_KEY,
  USER_NAME,
  PASSWORD,
  FAVORITE_VIDEOS,
} from '../../utils/constants';

import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
};

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(({ username, password }) => {
    if (username === USER_NAME && password === PASSWORD) {
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
    }
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  useEffect(() => {
    const favoriteVideos = storage.get(FAVORITE_VIDEOS);

    setVideos(favoriteVideos);
  }, []);

  const addVideo = useCallback((videoSelected) => {
    const storedVideos = storage.get(FAVORITE_VIDEOS) || [];
    const favorites = [...storedVideos, videoSelected];
    setVideos(favorites);
    storage.set(FAVORITE_VIDEOS, favorites);
  }, []);

  const removeVideo = useCallback((videoSelected) => {
    const storedVideos = storage.get(FAVORITE_VIDEOS) || [];
    const favoriteVids = storedVideos.filter(
      (storedVideo) => storedVideo.id.videoId !== videoSelected.id.videoId
    );
    setVideos(favoriteVids);
    storage.set(FAVORITE_VIDEOS, favoriteVids);
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, authenticated, addVideo, removeVideo, videos }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
