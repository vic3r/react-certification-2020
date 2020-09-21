import React, { useRef, useContext } from 'react';
import { Typography, Box } from '@material-ui/core';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import useStyles from './styles';
import { HOME_PAGE } from '../../utils/constants';

function HomePage() {
  const classes = useStyles();
  const sectionRef = useRef(null);
  const { videos } = useContext(VideoContext);

  return (
    <section className={classes.dark} ref={sectionRef}>
      <div>
        <Typography variant="h2">
          <Box letterSpacing={8} m={1}>
            WELCOME
          </Box>
        </Typography>
      </div>
      <VideoList videos={videos} parent={HOME_PAGE} />
    </section>
  );
}

export default HomePage;
