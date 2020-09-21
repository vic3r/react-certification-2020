import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  MoveToInbox as InboxIcon,
  Dehaze as DehazeIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import useStyles from './styles';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import VideoContext from '../../state/VideoContext';

const CustomDrawer = () => {
  const classes = useStyles();
  const { colorState } = useContext(VideoContext);
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  const isAuth = storage.get(AUTH_STORAGE_KEY);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };
  const colorClass = colorState ? classes.dark : classes.light;

  const linkToHome = () => {
    history.push('/');
  };
  const linkToFavorites = () => {
    history.push('/favorites');
  };

  const renderItems = () => (
    <div
      className={clsx(colorClass, classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Home" onClick={linkToHome}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {isAuth ? (
          <>
            <ListItem button key="Favorites" onClick={linkToFavorites}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
          </>
        ) : (
          <></>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <DehazeIcon onClick={toggleDrawer(true)} />
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
          {renderItems()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CustomDrawer;
