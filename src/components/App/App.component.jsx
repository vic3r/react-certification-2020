import React, { useLayoutEffect, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import Searchbar from '../Searchbar';
import VideoContext from '../../state/VideoContext';
import youtube from '../../utils/apis/youtube';
import { random } from '../../utils/fns';

function App() {
  const [videos, setVideos] = useState([]);
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

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
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <Searchbar />
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Fortune />
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </VideoContext.Provider>
  );
}

export default App;
