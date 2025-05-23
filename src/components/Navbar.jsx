import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

const navLinks = [
    { label: 'Landing Page', path: '/', icon: <HomeIcon /> },
    // { label: 'Register', path: '/register', icon: <HowToRegIcon /> },
    { label: 'Login', path: '/login', icon: <LoginIcon /> },
    

  ];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Domestic Staffing
          </Typography>

          {!isMobile &&
            navLinks.map((item, index) => (
              <Button key={index} color="inherit" component={Link} to={item.path}>
                {item.label}
              </Button>
            ))}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} role="presentation">
        <List>
            {navLinks.map((item, index) => (
                <ListItem button key={index} component={Link} to={item.path}>
                {item.icon}
                <ListItemText primary={item.label} sx={{ ml: 2 }} />
                </ListItem>
            ))}
        </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
