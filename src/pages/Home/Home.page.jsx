import React, { useRef, useContext } from 'react';
import { Typography, Box } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import useStyles from './styles';

function HomePage() {
  const classes = useStyles();
  const sectionRef = useRef(null);
  const { videos } = useContext(VideoContext);
  const { colorState } = useContext(ColorContext);
  const colorClass = colorState ? classes.dark : classes.light;
  const isHome = true;

  return (
    <section className={colorClass} ref={sectionRef}>
      <div>
        <Typography variant="h2">
          <Box className={classes.title} m={1}>
            WELCOME
          </Box>
        </Typography>
      </div>
      <VideoList id="video-list" videos={videos} isHome={isHome} />
    </section>
  );
}

export default HomePage;
