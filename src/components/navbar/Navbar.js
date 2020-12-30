import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h6">Pixabay Image Finder</Typography>
      </Toolbar>
    </AppBar>
  );
};
