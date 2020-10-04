import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import FavoritesProvider from '../../providers/Favorites';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Searchbar from '../Searchbar';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import { searchVideos } from '../../utils/apis/youtube';
import VideoPlayer from '../../pages/VideoPlayer';
import Favorites from '../../pages/Favorites';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const [videos, setVideos] = useState([]);
  const [colorState, setColorState] = useState(true);
  const [term, setTerm] = useState('wizeline');

  const onTermSubmit = setTerm;
  useEffect(() => {
    searchVideos
      .get('/search', {
        params: {
          q: term,
        },
      })
      .then((response) => {
        response.data.items.shift();
        const filteredVideos = response.data.items.filter(
          (item) => item.id.videoId !== undefined
        );
        setVideos(filteredVideos);
      });
  }, [term]);

  return (
    <div className={classes.dark}>
      <VideoContext.Provider value={{ videos }}>
        <ColorContext.Provider value={{ colorState, setColorState }}>
          <BrowserRouter>
            <AuthProvider>
              <FavoritesProvider>
                <Searchbar onTermSubmit={onTermSubmit} />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/favorites" component={Favorites} />
                  <Route exact path="/:id" component={VideoPlayer} />
                  <Route private path="*" component={NotFound} />
                </Switch>
              </FavoritesProvider>
            </AuthProvider>
          </BrowserRouter>
        </ColorContext.Provider>
      </VideoContext.Provider>
    </div>
  );
}

export default App;
