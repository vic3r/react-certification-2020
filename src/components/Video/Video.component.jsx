import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import useStyles from './styles';
import VideoContext from '../../state/VideoContext';

const Video = ({ item }) => {
  const classes = useStyles();
  const { setVideoSelected } = useContext(VideoContext);

  const changeVideoSelected = () => {
    setVideoSelected(item);
  };

  return (
    <Link to={item.id.videoId} onClick={changeVideoSelected}>
      <CardActionArea className={classes.videoClass}>
        <img alt={item.snippet.title} src={item.snippet.thumbnails.medium.url} />
        <div className={classes.videoTitle}>
          <h3>{item.snippet.title}</h3>
          <p>{item.snippet.description}</p>
        </div>
      </CardActionArea>
    </Link>
  );
};

export default Video;
