import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0F6292' }}>
        <Toolbar>
          <div className="navbar__links">
            <Button color="inherit" sx={{ mr: 2 }}>
              HOME
            </Button>
            <Button color="inherit" sx={{ mr: 2 }}>
              ABOUT US
            </Button>
            <Button color="inherit" sx={{ mr: 2 }}>
              CONTACT
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
