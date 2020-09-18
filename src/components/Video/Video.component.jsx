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
      <div className={classes.dark}>
        <CardActionArea className={classes.videoClass}>
          <img
            className={classes.img}
            alt={item.snippet.title}
            src={item.snippet.thumbnails.medium.url}
          />
          <div>
            <h3 className={classes.text}>{item.snippet.title}</h3>
            <p className={classes.text}>{item.snippet.description}</p>
          </div>
        </CardActionArea>
      </div>
    </Link>
  );
};

export default Video;
