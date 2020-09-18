import React from 'react';
import Grid from '@material-ui/core/Grid';
import Video from '../Video';
import useStyles from './styles';

const VideoList = ({ videos, parent }) => {
  const styles = useStyles();
  if (!videos) {
    return <div>Not Videos Found</div>;
  }

  const classes =
    parent === 'homepage'
      ? styles.videoListClass.Home
      : styles.videoListClass.VideoPlayer;
  const size = parent === 'homepage' ? 3 : 3;
  const spacing = parent === 'homepage' ? 1 : 0;

  const renderVideoList = videos.map((video) => (
    <Grid item xs={size}>
      <Video key={video.id.videoId} item={video} />
    </Grid>
  ));

  return (
    <Grid className={classes} container spacing={spacing}>
      {renderVideoList}
    </Grid>
  );
};

export default VideoList;
