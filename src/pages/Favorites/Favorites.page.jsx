import React, { useRef } from 'react';
import { Typography, Box } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import { useAuth } from '../../providers/Auth';
import { FAVORITES_PAGE } from '../../utils/constants';
import useStyles from './styles';

const FavoritesPage = () => {
  const classes = useStyles();
  const sectionRef = useRef(null);
  const { videos } = useAuth();

  return (
    <div className={classes.dark}>
      <section ref={sectionRef}>
        <Typography variant="h2">
          <Box letterSpacing={8} m={1}>
            FAVORITES
          </Box>
        </Typography>
        <VideoList videos={videos} parent={FAVORITES_PAGE} />
      </section>
    </div>
  );
};

export default FavoritesPage;
