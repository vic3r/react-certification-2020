import React from 'react';
import { Grid } from '@material-ui/core';
import Video from '../Video';
import useStyles from './styles';

const VideoList = ({ videos, isHome }) => {
  const styles = useStyles();
  if (!videos) {
    return <div>Not Videos Found</div>;
  }

  const size = isHome ? 3 : 12;
  const spacing = isHome ? 1 : 0;

  const renderVideoList = videos.map((video) => (
    <Grid key={video.id.videoId} item xs={size}>
      <Video key={video.id.videoId} isHome={isHome} item={video} />
    </Grid>
  ));

  return (
    <Grid
      data-testid="videolist"
      className={styles.videoListClass}
      container
      spacing={spacing}
    >
      {renderVideoList}
    </Grid>
  );
};

export default VideoList;
