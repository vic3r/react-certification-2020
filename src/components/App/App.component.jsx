import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Searchbar from '../Searchbar';
import VideoContext from '../../state/VideoContext';
import youtube from '../../utils/apis/youtube';
import VideoPlayer from '../../pages/VideoPlayer';
import Favorites from '../../pages/Favorites';

function App() {
  const [videos, setVideos] = useState([]);
  const [videoSelected, setVideoSelected] = useState({});

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    response.data.items.shift();
    setVideos(response.data.items);
  };

  useEffect(() => {
    onTermSubmit('wizeline');
  }, []);

  return (
    <VideoContext.Provider
      value={{
        videos,
        onTermSubmit,
        videoSelected,
        setVideoSelected,
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <Searchbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/:id">
              <VideoPlayer />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </VideoContext.Provider>
  );
}

export default App;
