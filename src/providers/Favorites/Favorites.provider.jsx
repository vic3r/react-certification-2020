import React, { useContext, useCallback } from 'react';
import { FAVORITE_VIDEOS } from '../../utils/constants';

import useStorageState from '../useStorageState';
import FavoritesContext from '../../state/FavoritesContext';

const useFavoritesState = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavoritesState" without an FavoritesProvider!`);
  }
  return context;
};

const FavoritesProvider = ({ children }) => {
  const [videos, setVideos] = useStorageState(FAVORITE_VIDEOS, []);

  const addVideo = useCallback(
    (videoSelected) => {
      setVideos((favoriteVideos) => [...favoriteVideos, videoSelected]);
    },
    [setVideos]
  );

  const removeVideo = useCallback(
    (videoSelected) => {
      setVideos((favoriteVideos) =>
        favoriteVideos.filter(
          (storedVideo) => storedVideo.id.videoId !== videoSelected.id.videoId
        )
      );
    },
    [setVideos]
  );

  return (
    <FavoritesContext.Provider value={{ addVideo, removeVideo, videos }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { useFavoritesState };
export default FavoritesProvider;
