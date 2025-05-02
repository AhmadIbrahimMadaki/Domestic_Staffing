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
  Grid,
  Card,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';

import { useNavigate } from 'react-router-dom';

import ManageAgents from './ManageAgents';
import ManageUsers from './ManageUsers';
import ManagePersonnel from './ManagePersonnel';
import TrackBooking from './TrackBooking';
import ConfigureSystemData from './ConfigureSystemData';


const drawerWidth = 240;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Manage Agents', icon: <PeopleIcon /> },
  { text: 'Manage Users', icon: <PersonIcon /> },
  { text: 'Manage Personnel', icon: <AssignmentIndIcon /> },
  { text: 'Track Bookings', icon: <ListAltIcon /> },
  { text: 'Configuration', icon: <SettingsIcon /> },
  { text: 'Logout', icon: <LogoutIcon /> },
];

export default function SuperAdminDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const navigate = useNavigate(); // <-- Add this

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (itemText) => {
    if (itemText === 'Logout') {
      localStorage.removeItem('adminToken'); // Adjust key as needed
      navigate('/admin/login'); // Redirect to login page
    } else {
      setSelectedPage(itemText);
    }
  };

  const renderContent = () => {
    switch (selectedPage) {
      case 'Manage Agents':
        return <ManageAgents />;
      case 'Manage Users':
        return <ManageUsers />;
      case 'Manage Personnel':
        return <ManagePersonnel />;
      case 'Track Bookings':
        return <TrackBooking />;
      case 'Configuration':
        return <ConfigureSystemData />;
      case 'Dashboard':
        return (
          <>
            <Typography variant="h5">Welcome, Super Admin 👋</Typography>
            <Typography>Start managing your platform here...</Typography>
            <Grid container spacing={2} mt={2}>
              {[
                { title: 'Total Agents', value: 12, bg: '#e3f2fd' },
                { title: 'Total Users', value: 120, bg: '#fce4ec' },
                { title: 'Personnel', value: 35, bg: '#e8f5e9' },
                { title: 'Bookings', value: 56, bg: '#fff3e0' },
              ].map((item, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Card sx={{ p: 2, backgroundColor: item.bg }}>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="h4" mt={1}>
                      {item.value}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        );
      default:
        return <Typography>Coming soon...</Typography>;
    }
  };

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Super Admin
        </Typography>
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
          <Typography variant="h6" noWrap component="div">
            Super Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
}
