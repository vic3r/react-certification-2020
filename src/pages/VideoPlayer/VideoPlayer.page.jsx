import React, { useContext } from 'react';
import { Grid, GridList } from '@material-ui/core';
import VideoDisplay from '../../components/VideoDisplay';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import ColorContext from '../../state/ColorContext';
import useStyles from './styles';

const VideoPlayer = ({ location }) => {
  const classes = useStyles();
  const { pathname, selectedVideo } = location;
  const { videos } = useContext(VideoContext);
  const { colorState } = useContext(ColorContext);
  const colorClass = colorState ? classes.dark : classes.light;

  return (
    <div className={colorClass}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={6}>
          <VideoDisplay pathname={pathname} video={selectedVideo} />
        </Grid>
        <Grid item xs={6}>
          <GridList className={classes.videoListClass}>
            <Grid container spacing={1}>
              <VideoList videos={videos} isHome={false} />
            </Grid>
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
