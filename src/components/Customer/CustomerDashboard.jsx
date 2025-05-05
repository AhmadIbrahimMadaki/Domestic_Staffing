import React from 'react';
import {
  Button,
  Grid,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomerDashboard() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      sx={{ minHeight: '100vh', backgroundColor: '#f4f6f8', p: 4 }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 800 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome, Customer
        </Typography>

        <Typography variant="body1" mb={4}>
          Select an action below to manage your services:
        </Typography>

        <Stack spacing={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavigate('/request-service')}
          >
            Request Service
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavigate('/choose-personnel')}
          >
            Choose Personnel
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavigate('/view-feedback')}
          >
            View & Give Feedback
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavigate('/booking-history')}
          >
            Booking History
          </Button>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => handleNavigate('/customer-login')}
          >
            Logout
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
}
