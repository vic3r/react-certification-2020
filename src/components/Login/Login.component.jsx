import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Modal, IconButton, MenuItem, Menu } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import ModalBody from './ModalBody.component';
import useStyles from './styles';
import { storage } from '../../utils/storage';
import { useAuth } from '../../providers/Auth';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const isAuth = storage.get(AUTH_STORAGE_KEY);
  const { logout } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const modalHandleOpen = () => {
    handleMenuClose();
    setOpenModal(true);
  };
  const modalHandleClose = () => {
    setOpenModal(false);
  };
  const handleLogOut = () => {
    logout();
    history.push('/');
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!isAuth ? (
        <MenuItem onClick={modalHandleOpen}>Iniciar sesion</MenuItem>
      ) : (
        <MenuItem onClick={handleLogOut}>Cerrar sesion</MenuItem>
      )}
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        {!isAuth ? (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={modalHandleOpen}
            >
              <AccountCircle />
            </IconButton>
            Iniciar sesion
          </>
        ) : (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleLogOut}
            >
              <AccountCircle />
            </IconButton>
            Cerrar sesion
          </>
        )}
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <div className={classes.sectionDesktop}>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderMenu}
      <Modal
        open={openModal}
        onClose={modalHandleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalBody closeModal={modalHandleClose} />
      </Modal>
    </div>
  );
};

export default Login;
