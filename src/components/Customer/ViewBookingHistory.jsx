import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Rating,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const dummyBookings = [
  {
    id: 1,
    personnel: 'Aisha Bello',
    service: 'House Cleaning',
    date: 'April 25, 2025',
    status: 'Completed',
    rating: 4,
    reviewed: true
  },
  {
    id: 2,
    personnel: 'John Doe',
    service: 'Gardening',
    date: 'April 28, 2025',
    status: 'Completed',
    rating: null,
    reviewed: false
  },
  {
    id: 3,
    personnel: 'Mary Smith',
    service: 'Babysitting',
    date: 'May 1, 2025',
    status: 'Pending',
    rating: null,
    reviewed: false
  }
];

export default function ViewBookingHistory() {
  const navigate = useNavigate();

  const handleReview = (bookingId) => {
    // Navigate to review screen or open modal
    navigate('/view-feedback');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Booking History
      </Typography>

      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {dummyBookings.map((booking, index) => (
            <React.Fragment key={booking.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={`${booking.service} by ${booking.personnel}`}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        Date: {booking.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Status: {booking.status}
                      </Typography>
                      {booking.rating !== null && (
                        <Rating value={booking.rating} readOnly size="small" />
                      )}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  {booking.status === 'Completed' && !booking.reviewed && (
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleReview(booking.id)}
                    >
                      Leave Review
                    </Button>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
              {index < dummyBookings.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
