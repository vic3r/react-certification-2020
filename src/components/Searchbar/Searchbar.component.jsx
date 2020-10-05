import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  InputBase,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles, { CustomSwitch } from './styles';
import CustomDrawer from '../Drawer';
import ColorContext from '../../state/ColorContext';
import Login from '../Login';

const Searchbar = ({ onTermSubmit }) => {
  const classes = useStyles();

  const { colorState, setColorState } = useContext(ColorContext);

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      onTermSubmit(event.target.value);
    }
  };

  const handleColorChange = (event) => {
    setColorState(event.target.checked);
  };
  const colorClass = colorState ? classes.dark : classes.light;

  return (
    <div className={classes.grow}>
      <AppBar className={colorClass} position="fixed">
        <Toolbar>
          <CustomDrawer />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              data-testid="inputbase"
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
          <FormGroup>
            <FormControlLabel
              control={
                <CustomSwitch
                  checked={colorState}
                  onChange={handleColorChange}
                  name="checkedColor"
                />
              }
              label="color"
            />
          </FormGroup>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Searchbar;
