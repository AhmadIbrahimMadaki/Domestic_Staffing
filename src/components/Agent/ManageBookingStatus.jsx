import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip
} from '@mui/material';

export default function ManageBookingStatus() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      title: 'House Cleaning',
      client: 'Fatima Bello',
      date: '2025-04-25',
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Babysitting Service',
      client: 'John Ade',
      date: '2025-04-23',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Weekend Chef',
      client: 'Amina Musa',
      date: '2025-04-22',
      status: 'Pending'
    }
  ]);

  const toggleStatus = (id) => {
    const updated = bookings.map((job) =>
      job.id === id
        ? { ...job, status: job.status === 'Pending' ? 'Completed' : 'Pending' }
        : job
    );
    setBookings(updated);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Update Booking Status
      </Typography>

      <Grid container spacing={3}>
        {bookings.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Client: {job.client}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Date: {job.date}
                </Typography>

                <Box mt={1}>
                  <Chip
                    label={job.status}
                    color={job.status === 'Completed' ? 'success' : 'warning'}
                    variant="outlined"
                  />
                </Box>

                <Button
                  variant="contained"
                  color={job.status === 'Pending' ? 'success' : 'warning'}
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => toggleStatus(job.id)}
                >
                  Mark as {job.status === 'Pending' ? 'Completed' : 'Pending'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
