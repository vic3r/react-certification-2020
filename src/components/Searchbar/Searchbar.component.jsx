import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import CustomDrawer from '../Drawer';
import VideoContext from '../../state/VideoContext';
import Login from '../Login';

const Searchbar = () => {
  const classes = useStyles();

  const { onTermSubmit } = useContext(VideoContext);

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      onTermSubmit(event.target.value);
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.dark} position="fixed">
        <Toolbar>
          <CustomDrawer />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="wizeline"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown={onEnter}
            />
          </div>
          <div className={classes.grow} />
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Searchbar;
