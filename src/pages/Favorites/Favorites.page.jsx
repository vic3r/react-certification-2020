import React, { useContext, useRef } from 'react';
import { Typography, Box } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import { useAuth } from '../../providers/Auth';
import { FAVORITES_PAGE } from '../../utils/constants';
import useStyles from './styles';

const FavoritesPage = () => {
  const classes = useStyles();
  const sectionRef = useRef(null);
  const { colorState } = useContext(VideoContext);
  const { videos } = useAuth();
  const colorClass = colorState ? classes.dark : classes.light;

  return (
    <div className={colorClass}>
      <section ref={sectionRef}>
        <Typography variant="h2">
          <Box className={classes.title} letterSpacing={8} m={1}>
            FAVORITES
          </Box>
        </Typography>
        <VideoList videos={videos} parent={FAVORITES_PAGE} />
      </section>
    </div>
  );
};

export default FavoritesPage;
