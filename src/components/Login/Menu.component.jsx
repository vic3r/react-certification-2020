import React from 'react';
import { MenuItem, Menu, IconButton, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AVATAR_URL } from '../../utils/constants';

const CustomMenu = ({
  isAuth,
  handleLogOut,
  handleModalOpen,
  anchorEl,
  handleMenuClose,
  menuId,
}) => {
  const isMenuOpen = Boolean(anchorEl);

  return (
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
        <MenuItem data-testid="menu-item-login" onClick={handleModalOpen}>
          Iniciar sesion
        </MenuItem>
      ) : (
        <MenuItem onClick={handleLogOut}>Cerrar sesion</MenuItem>
      )}
    </Menu>
  );
};

const CustomMobileMenu = ({
  isAuth,
  handleModalOpen,
  handleLogOut,
  mobileMoreAnchorEl,
  handleProfileMenuOpen,
  handleMobileMenuClose,
  mobileMenuId,
}) => {
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  return (
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
              onClick={handleModalOpen}
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
              <Avatar alt="wz-avatar" src={AVATAR_URL} />
            </IconButton>
            Cerrar sesion
          </>
        )}
      </MenuItem>
    </Menu>
  );
};

export { CustomMenu, CustomMobileMenu };
