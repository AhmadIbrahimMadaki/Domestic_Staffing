import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
//   CardContent,
  Avatar,
  Grid,
  IconButton
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const personnelData = {
  All: [
    { name: 'Maryam', role: 'Nanny', Date: 'April 10, 2025', img: '/images/mary.jpg' },
    { name: 'Fatima', role: 'Nanny', Date: 'Nov 10, 2025', img: '/images/emma.jpg' }
  ],
  Completed: [
    { name: 'Ahmad', role: 'Driver', Date: 'Mar 10, 2025', img: '/images/sarah.jpg' },
  ],
  Pending: [
    { name: 'Sadiq', role: 'Security', Date: 'AprJanil 10, 2025', img: '/images/susan.jpg' },
  ],
};

const categories = Object.keys(personnelData);

export default function AvailablePersonnel() {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Service Requests
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
        sx={{ mb: 3 }}
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((cat) => (
          <Tab
            key={cat}
            value={cat}
            label={cat}
            sx={{
              textTransform: 'none',
              fontWeight: 'medium'
            }}
          />
        ))}
      </Tabs>

      <Grid container spacing={2}>
        {personnelData[selectedTab].map((person, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
              <Avatar src={person.img} alt={person.name} sx={{ width: 56, height: 56, mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.Date}
                </Typography>
              </Box>
              <IconButton>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
