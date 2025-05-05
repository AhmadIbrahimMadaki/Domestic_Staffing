import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Rating,
  Divider
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function ViewAndReview() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (rating === 0 || feedback.trim() === '') {
      alert('Please provide a rating and feedback.');
      return;
    }

    // Submit review logic goes here
    console.log({ rating, feedback });
    alert('Thank you for your feedback!');
    setRating(0);
    setFeedback('');
  };

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Leave a Review
      </Typography>

      <Paper elevation={4} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Service Summary
        </Typography>
        <Typography color="text.secondary">
          <strong>Personnel:</strong> Aisha Bello (House Cleaner)
        </Typography>
        <Typography color="text.secondary">
          <strong>Date:</strong> April 30, 2025
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          <strong>Location:</strong> Abuja, Nigeria
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            How would you rate the service?
          </Typography>
          <Rating
            name="service-rating"
            value={rating}
            onChange={(_, newValue) => setRating(newValue)}
            precision={1}
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarIcon fontSize="inherit" />}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Your Feedback
          </Typography>
          <TextField
            placeholder="Tell us how the service went..."
            multiline
            rows={4}
            fullWidth
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            variant="outlined"
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
          fullWidth
        >
          Submit Feedback
        </Button>
      </Paper>
    </Box>
  );
}
