import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import VideoDisplay from '../../components/VideoDisplay';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/VideoContext';
import { VIDEO_PLAYER_PAGE } from '../../utils/constants';

const VideoPlayer = () => {
  const { videos, videoSelected } = useContext(VideoContext);

  return (
    <div>
      <Grid container direction="row" griGap="0px" spacing={1}>
        <Grid item xs={6}>
          <VideoDisplay video={videoSelected} />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <VideoList videos={videos} parent={VIDEO_PLAYER_PAGE} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
