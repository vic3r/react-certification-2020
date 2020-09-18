import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
    <Button onClick={handleAddVideo(video)}>Agregar video</Button>
  ) : (
    <Button onClick={handleRemoveVideo(video)}>Remover Video</Button>
  );

  return (
    <div>
      <div>
        <iframe
          className={styles.videoClass}
          allowFullScreen
          title="video player"
          src={videoUrl}
        />
      </div>
      <div>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="caption" display="block">
          {video.snippet.description}
        </Typography>
        {authenticated ? interactiveButton : <></>}
      </div>
    </div>
  );
};

export default VideoDisplay;
