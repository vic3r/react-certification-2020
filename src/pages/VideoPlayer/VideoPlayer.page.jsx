import React, { useContext } from 'react';
import { Grid, GridList } from '@material-ui/core';
import VideoDisplay from '../../components/VideoDisplay';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import { VIDEO_PLAYER_PAGE } from '../../utils/constants';
import useStyles from './styles';

const VideoPlayer = () => {
  const classes = useStyles();
  const { videos, videoSelected } = useContext(VideoContext);

  return (
    <div>
      <Grid container direction="row" griGap="0px" spacing={1}>
        <Grid item xs={6}>
          <VideoDisplay video={videoSelected} />
        </Grid>
        <Grid item xs={6}>
          <GridList className={classes.videoListClass}>
            <Grid container spacing={1}>
              <VideoList videos={videos} parent={VIDEO_PLAYER_PAGE} />
            </Grid>
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
