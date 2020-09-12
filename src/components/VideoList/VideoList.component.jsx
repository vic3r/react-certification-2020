import React from 'react';
import Grid from '@material-ui/core/Grid';
import Video from '../Video';

const VideoList = ({ videos }) => {
  const renderVideoList = videos.map((video) => (
    <Grid item xs={3}>
      <Video key={video.id.videoId} item={video} />
    </Grid>
  ));

  return (
    <Grid container spacing={1}>
      {renderVideoList}
    </Grid>
  );
};

export default VideoList;
