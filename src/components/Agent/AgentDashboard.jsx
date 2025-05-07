import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailIcon from '@mui/icons-material/Mail';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import StarRateIcon from '@mui/icons-material/StarRate';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';

import ManageServicePersonnel from './AddServicePersonnel';
import AssignServicePersonnel from './AssignServicePersonnel';
import ViewIncomingRequests from './ViewIncomingRequests';
import ManageBookingStatus from './ManageBookingStatus';
import Ratings from './Ratings';

const drawerWidth = 240;

const AgentDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const navigate = useNavigate();

  const navItems = [
    // { text: 'Register', icon: <AssignmentIcon /> },
    { text: 'Add Service Personnel', icon: <PeopleIcon /> },
    { text: 'Assign Service Personnel', icon: <AssignmentIcon /> },
    { text: 'Incoming Requests', icon: <MailIcon /> },
    { text: 'My Bookings', icon: <MailIcon /> },
    // { text: 'Assign Staff', icon: <AssignmentTurnedInIcon /> },
    { text: 'Ratings', icon: <StarRateIcon /> },
    { text: 'Logout', icon: <LogoutIcon /> },
  ];
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (itemText) => {
    if (itemText === 'Logout') {
      localStorage.removeItem('agentToken');
      navigate('/login');
    } else {
      setSelectedPage(itemText);
    }
  };

  const renderContent = () => {
    switch (selectedPage) {
      case 'Dashboard':
        return <Typography>Welcome to the Agent Dashboard!</Typography>;
      case 'Add Service Personnel':
        return <ManageServicePersonnel />;
      case 'Assign Service Personnel':
         return <AssignServicePersonnel />;
       case 'Incoming Requests':
         return <ViewIncomingRequests />;
      case 'My Bookings':
        return <ManageBookingStatus />;
      case 'Ratings':
        return <Ratings />
      default:
        return <Typography>Coming soon...</Typography>;
    }
  };

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6">Agent Panel</Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            selected={selectedPage === item.text}
            onClick={() => handleNavigation(item.text)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Agent Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default AgentDashboard;
