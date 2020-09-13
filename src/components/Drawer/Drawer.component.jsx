import React from 'react';
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

const CustomDrawer = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
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
        {['Home', 'Favorites'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
