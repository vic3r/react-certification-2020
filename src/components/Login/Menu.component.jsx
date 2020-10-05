import React from 'react';
import { MenuItem, Menu, IconButton, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AVATAR_URL } from '../../utils/constants';

const CustomMenu = ({
  authenticated,
  handleLogOut,
  handleModalOpen,
  anchorEl,
  handleMenuClose,
  menuId,
}) => {
  const isMenuOpen = Boolean(anchorEl);

  return (
    <Menu
      data-testid="menu-component"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!authenticated ? (
        <MenuItem data-testid="menu-item-login" onClick={handleModalOpen}>
          Iniciar sesion
        </MenuItem>
      ) : (
        <MenuItem data-testid="menu-item-logout" onClick={handleLogOut}>
          Cerrar sesion
        </MenuItem>
      )}
    </Menu>
  );
};

const CustomMobileMenu = ({
  authenticated,
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
      data-testid="mobile-menu-component"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        {!authenticated ? (
          <>
            <IconButton
              data-testid="mobile-menu-item-login"
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
              data-testid="mobile-menu-item-logout"
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
