import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';

const Video = ({ item }) => {
  return (
    <CardActionArea>
      <img
        alt={item.snippet.title}
        className="ui image"
        src={item.snippet.thumbnails.medium.url}
      />
      <h2>{item.snippet.title}</h2>
    </CardActionArea>
  );
};

export default Video;
