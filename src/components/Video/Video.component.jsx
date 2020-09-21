import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CardActionArea, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import VideoContext from '../../state/VideoContext';
import { VIDEO_PLAYER_PAGE } from '../../utils/constants';

const Video = ({ item, parent }) => {
  const classes = useStyles();
  const { setVideoSelected, colorState } = useContext(VideoContext);

  const changeVideoSelected = () => {
    setVideoSelected(item);
  };

  const colorClass = colorState ? classes.dark : classes.light;

  const renderVideo = () => {
    if (parent === VIDEO_PLAYER_PAGE) {
      return (
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
      );
    }
    return (
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
          <p className={classes.text} fontSize="2vw">
            {item.snippet.description}
          </p>
        </div>
      </>
    );
  };

  return (
    <Link to={item.id.videoId} onClick={changeVideoSelected}>
      <div className={colorClass}>
        <CardActionArea className={classes.videoHomeClass}>
          {renderVideo()}
        </CardActionArea>
      </div>
    </Link>
  );
};

export default Video;
