import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Box } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import ColorContext from '../../state/ColorContext';
import { useFavoritesState } from '../../providers/Favorites';
import { useAuth } from '../../providers/Auth';
import useStyles from './styles';

const FavoritesPage = () => {
  const classes = useStyles();
  const { authenticated } = useAuth();
  const history = useHistory();
  const sectionRef = useRef(null);
  const { colorState } = useContext(ColorContext);
  const { videos } = useFavoritesState();
  const isFavorites = true;
  const colorClass = colorState ? classes.dark : classes.light;
  if (!authenticated) {
    history.push('/');
  }

  return (
    <div className={colorClass}>
      <section ref={sectionRef}>
        <Typography variant="h2">
          <Box className={classes.title} letterSpacing={8} m={1}>
            FAVORITES
          </Box>
        </Typography>
        <VideoList videos={videos} isHome={isFavorites} />
      </section>
    </div>
  );
};

export default FavoritesPage;
