import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  MoveToInbox as InboxIcon,
  Dehaze as DehazeIcon,
  Mail as MailIcon,
} from '@material-ui/icons';
import useStyles from './styles';
import { useAuth } from '../../providers/Auth';
import ColorContext from '../../state/ColorContext';

const CustomDrawer = () => {
  const classes = useStyles();
  const { colorState } = useContext(ColorContext);
  const [isOpen, setOpen] = useState(false);
  const { authenticated } = useAuth();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };
  const colorClass = colorState ? classes.dark : classes.light;

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
        <Link data-testid="homepath" to="/" style={{ textDecoration: 'none' }}>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        {authenticated ? (
          <Link
            data-testid="favoritespath"
            to="/favorites"
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
          </Link>
        ) : (
          <></>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <DehazeIcon data-testid="test-icon-drawer" onClick={toggleDrawer(true)} />
        <Drawer
          data-testid="test-drawer"
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          {renderItems()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CustomDrawer;
