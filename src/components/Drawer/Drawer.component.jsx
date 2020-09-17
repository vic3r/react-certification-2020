import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

const CustomDrawer = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const history = useHistory();
  const isAuth = storage.get(AUTH_STORAGE_KEY);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const linkToHome = () => {
    history.push('/');
  };
  const linkToFavorites = () => {
    history.push('/favorites');
  };

  const renderItems = () => (
    <div
      className={clsx(classes.list, {
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
