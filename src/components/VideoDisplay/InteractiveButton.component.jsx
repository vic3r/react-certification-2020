import React from 'react';
import { Button } from '@material-ui/core';
import { useFavoritesState } from '../../providers/Favorites';
import useStyles from './styles';

const InteractiveButton = ({ canBeAdded, video }) => {
  const classes = useStyles();
  const { addVideo, removeVideo } = useFavoritesState();
  const handleAddVideo = (videoSelected) => () => {
    addVideo(videoSelected);
  };
  const handleRemoveVideo = (videoSelected) => () => {
    removeVideo(videoSelected);
  };

  const button = !canBeAdded ? (
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
  return button;
};

export default InteractiveButton;
