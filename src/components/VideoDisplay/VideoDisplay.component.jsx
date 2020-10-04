import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Card } from '@material-ui/core';
import useStyles from './styles';
import { useAuth } from '../../providers/Auth';
import { useFavoritesState } from '../../providers/Favorites';
import ColorContext from '../../state/ColorContext';
import InteractiveButton from './InteractiveButton.component';

const isVideoInFavorites = (videos, video) => {
  if (!videos || video.length === 0) {
    return false;
  }
  let isFound = false;
  videos.forEach((element) => {
    if (
      element &&
      element.id &&
      element.id.videoId &&
      element.id.videoId === video.id.videoId
    ) {
      isFound = true;
    }
  });

  return isFound;
};

const VideoDisplay = ({ video }) => {
  const { colorState } = useContext(ColorContext);
  const classes = useStyles();
  const { authenticated } = useAuth();
  const { videos } = useFavoritesState();
  const history = useHistory();
  if (!video) {
    history.push('/');
    return <div>Video Not Found</div>;
  }
  const renderVideoDisplay = (videoItem) => {
    const videoUrl = `https://www.youtube.com/embed/${videoItem.id.videoId}`;
    const colorClass = colorState ? classes.dark : classes.light;
    let canBeAdded = false;

    if (authenticated) {
      canBeAdded = isVideoInFavorites(videos, videoItem);
    }
    const interactiveButton = (
      <InteractiveButton canBeAdded={canBeAdded} video={videoItem} />
    );
    return (
      <Card className={colorClass} wrap="nowrap">
        <div className={classes.container}>
          <iframe
            className={classes.videoClass}
            allowFullScreen
            title="video player"
            src={videoUrl}
          />
        </div>
        <div className={classes.text}>
          <Typography fontSize="8vw" variant="h4">
            {videoItem.snippet.title}
          </Typography>
          <Typography fontSize="2vw" variant="caption" display="block">
            {videoItem.snippet.description}
          </Typography>
          {authenticated ? interactiveButton : <></>}
        </div>
      </Card>
    );
  };

  return renderVideoDisplay(video);
};

export default VideoDisplay;
