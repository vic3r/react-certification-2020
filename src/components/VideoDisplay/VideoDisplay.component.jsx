import React, { useContext } from 'react';
import { Typography, Button, Card } from '@material-ui/core';
import useStyles from './styles';
import { useAuth } from '../../providers/Auth';
import VideoContext from '../../state/VideoContext';

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
  const { colorState } = useContext(VideoContext);
  const classes = useStyles();
  const { authenticated, addVideo, removeVideo, videos } = useAuth();
  if (!video) {
    return <div id="video-not-found">Not video found</div>;
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  const colorClass = colorState ? classes.dark : classes.light;
  let canBeAdded = false;

  if (authenticated) {
    canBeAdded = isVideoInFavorites(videos, video);
  }
  const handleAddVideo = (videoSelected) => () => {
    addVideo(videoSelected);
  };
  const handleRemoveVideo = (videoSelected) => () => {
    removeVideo(videoSelected);
  };

  const interactiveButton = !canBeAdded ? (
    <Button
      data-testid="button-add"
      variant="contained"
      className={classes.button}
      color="primary"
      onClick={handleAddVideo(video)}
    >
      Agregar video
    </Button>
  ) : (
    <Button
      data-testid="button-remove"
      variant="contained"
      className={classes.button}
      color="secondary"
      onClick={handleRemoveVideo(video)}
    >
      Remover Video
    </Button>
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
          {video.snippet.title}
        </Typography>
        <Typography fontSize="2vw" variant="caption" display="block">
          {video.snippet.description}
        </Typography>
        {authenticated ? interactiveButton : <></>}
      </div>
    </Card>
  );
};

export default VideoDisplay;
