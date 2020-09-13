import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import useStyles from './styles';

const Video = ({ item }) => {
  const classes = useStyles();
  return (
    <CardActionArea className={classes.videoClass}>
      <img
        alt={item.snippet.title}
        className="ui image"
        src={item.snippet.thumbnails.medium.url}
      />
      <div className={classes.videoTitle}>
        <h3>{item.snippet.title}</h3>
        <p>{item.snippet.description}</p>
      </div>
    </CardActionArea>
  );
};

export default Video;
