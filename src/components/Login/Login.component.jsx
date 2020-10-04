import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Modal, IconButton, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import ModalBody from './ModalBody.component';
import useStyles from './styles';
import { useAuth } from '../../providers/Auth';
import { AVATAR_URL } from '../../utils/constants';
import { CustomMenu, CustomMobileMenu } from './Menu.component';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { logout, authenticated } = useAuth();

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
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleLogOut = () => {
    logout();
    history.push('/');
  };

  const CustomModal = React.forwardRef((props, reference) => (
    <ModalBody ref={reference} data-testid="login-modal" closeModal={handleCloseModal}>
      {props.children}
    </ModalBody>
  ));

  useEffect(() => {
    if (authenticated) {
      handleCloseModal();
    }
  }, [authenticated]);

  const ref = React.createRef();

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
          {authenticated ? (
            <Avatar alt="wz-avatar" src={AVATAR_URL} />
          ) : (
            <AccountCircle />
          )}
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
        authenticated={authenticated}
        handleModalOpen={handleModalOpen}
        handleLogOut={handleLogOut}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        mobileMenuId={mobileMenuId}
      />
      <CustomMenu
        authenticated={authenticated}
        handleLogOut={handleLogOut}
        handleModalOpen={handleModalOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        menuId={menuId}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CustomModal ref={ref} />
      </Modal>
    </div>
  );
};

export default Login;
