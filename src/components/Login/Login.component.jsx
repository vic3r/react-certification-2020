import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Modal, IconButton, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import ModalBody from './ModalBody.component';
import useStyles from './styles';
import { storage } from '../../utils/storage';
import { useAuth } from '../../providers/Auth';
import { AUTH_STORAGE_KEY, AVATAR_URL } from '../../utils/constants';
import { CustomMenu, CustomMobileMenu } from './Menu.component';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const isAuth = storage.get(AUTH_STORAGE_KEY);
  const { logout } = useAuth();

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

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

  const handleModalOpen = () => {
    handleMenuClose();
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleLogOut = () => {
    logout();
    history.push('/');
  };

  return (
    <div>
      <div className={classes.sectionDesktop}>
        <IconButton
          data-testid="login-icon-button"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          {isAuth ? <Avatar alt="wz-avatar" src={AVATAR_URL} /> : <AccountCircle />}
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          data-testid="login-icon-mobile-button"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      <CustomMobileMenu
        isAuth={isAuth}
        handleModalOpen={handleModalOpen}
        handleLogOut={handleLogOut}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        mobileMenuId={mobileMenuId}
      />
      <CustomMenu
        isAuth={isAuth}
        handleLogOut={handleLogOut}
        handleModalOpen={handleModalOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        menuId={menuId}
      />
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalBody data-testid="login-modal" closeModal={handleModalClose} />
      </Modal>
    </div>
  );
};

export default Login;
