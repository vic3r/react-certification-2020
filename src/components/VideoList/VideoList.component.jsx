import React from 'react';
import { Grid } from '@material-ui/core';
import Video from '../Video';
import useStyles from './styles';
import { HOME_PAGE } from '../../utils/constants';

const VideoList = ({ videos, parent }) => {
  const styles = useStyles();
  if (!videos) {
    return <div>Not Videos Found</div>;
  }

  const size = parent === HOME_PAGE ? 3 : 12;
  const spacing = parent === HOME_PAGE ? 1 : 0;

  const renderVideoList = videos.map((video) => (
    <Grid key={video.id.videoId} item xs={size}>
      <Video key={video.id.videoId} parent={parent} item={video} />
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
