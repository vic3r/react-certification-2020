import React from 'react';
import { Typography, Button, Card } from '@material-ui/core';
import useStyles from './styles';
import { useAuth } from '../../providers/Auth';

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
  const styles = useStyles();
  const { authenticated, addVideo, removeVideo, videos } = useAuth();
  if (!video) {
    return <div>Not video found</div>;
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
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
      variant="contained"
      className={styles.button}
      color="primary"
      onClick={handleAddVideo(video)}
    >
      Agregar video
    </Button>
  ) : (
    <Button
      variant="contained"
      className={styles.button}
      color="secondary"
      onClick={handleRemoveVideo(video)}
    >
      Remover Video
    </Button>
  );

  return (
    <Card className={styles.dark} wrap="nowrap">
      <div className={styles.container}>
        <iframe
          className={styles.videoClass}
          allowFullScreen
          title="video player"
          src={videoUrl}
        />
      </div>
      <div className={styles.text}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="caption" display="block">
          {video.snippet.description}
        </Typography>
        {authenticated ? interactiveButton : <></>}
      </div>
    </Card>
  );
};

export default VideoDisplay;
