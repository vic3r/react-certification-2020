import React, { useRef, useContext } from 'react';
import { Typography, Box } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import useStyles from './styles';
import { HOME_PAGE } from '../../utils/constants';

function HomePage() {
  const classes = useStyles();
  const sectionRef = useRef(null);
  const { videos, colorState } = useContext(VideoContext);
  const colorClass = colorState ? classes.dark : classes.light;

  return (
    <section className={colorClass} ref={sectionRef}>
      <div>
        <Typography variant="h2">
          <Box className={classes.title} m={1}>
            WELCOME
          </Box>
        </Typography>
      </div>
      <VideoList videos={videos} parent={HOME_PAGE} />
    </section>
  );
}

export default HomePage;
