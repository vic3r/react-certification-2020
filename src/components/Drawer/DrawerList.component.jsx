import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons';
import { useAuth } from '../../providers/Auth';

const DrawerList = () => {
  const { authenticated } = useAuth();

  return (
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
  );
};

export default DrawerList;
