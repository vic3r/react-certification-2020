import React from 'react';
import useStyles from './styles';

const VideoDisplay = ({ video }) => {
  const styles = useStyles();
  if (!video) {
    return <div>Not video found</div>;
  }
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe className={styles.videoClass} title="video player" src={videoUrl} />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDisplay;
