import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { CardActionArea, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import ColorContext from '../../state/ColorContext';

const Video = ({ item, isHome }) => {
  const classes = useStyles();
  const { colorState } = useContext(ColorContext);
  const colorClass = colorState ? classes.dark : classes.light;

  const renderVideo = !isHome ? (
    <>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <img
            className={classes.img}
            alt={item.snippet.title}
            src={item.snippet.thumbnails.medium.url}
          />
        </Grid>
        <Grid item xs={8}>
          <div>
            <h3 className={classes.text}>{item.snippet.title}</h3>
            <p className={classes.text}>{item.snippet.description}</p>
          </div>
        </Grid>
      </Grid>
      <Divider />
    </>
  ) : (
    <>
      <img
        className={classes.img}
        alt={item.snippet.title}
        src={item.snippet.thumbnails.medium.url}
      />
      <div>
        <h3 className={classes.text} fontSize="4vw">
          {item.snippet.title}
        </h3>
        <p className={clsx(classes.text, classes.textDescription)} fontSize="2vw">
          {item.snippet.description}
        </p>
      </div>
    </>
  );

  return (
    <Link
      to={{
        pathname: item.id.videoId,
        selectedVideo: item,
      }}
    >
      <div id="video-container" className={colorClass}>
        <CardActionArea className={classes.videoHomeClass}>{renderVideo}</CardActionArea>
      </div>
    </Link>
  );
};

export default Video;
