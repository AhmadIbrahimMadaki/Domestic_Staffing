import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';

const dummyReviews = [
  {
    id: 1,
    reviewer: 'Fatima Bello',
    rating: 4,
    comment: 'She was punctual and did an excellent job. Will hire again!',
    date: '2025-04-25',
    personnel: 'Aisha Umar'
  },
  {
    id: 2,
    reviewer: 'John Ade',
    rating: 5,
    comment: 'Amazing with the kids. Highly professional!',
    date: '2025-04-22',
    personnel: 'Daniel Okoro'
  },
  {
    id: 3,
    reviewer: 'Amina Musa',
    rating: 3,
    comment: 'Good work, but arrived a bit late.',
    date: '2025-04-20',
    personnel: 'Halima Sani'
  }
];

export default function PersonnelReviews() {
  const [sortBy, setSortBy] = useState('date');

  const sortedReviews = [...dummyReviews].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Ratings & Reviews
        </Typography>

        <FormControl size="small">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="date">Newest</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {sortedReviews.map((review) => (
          <Grid item xs={12} md={6} lg={4} key={review.id}>
            <Card elevation={2}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar sx={{ mr: 2 }}>
                    {review.reviewer[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1">{review.reviewer}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(review.date).toDateString()}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" mb={1}>
                  Feedback on <strong>{review.personnel}</strong>
                </Typography>

                <Rating value={review.rating} readOnly size="small" />

                <Typography variant="body2" mt={1}>
                  {review.comment}
                </Typography>

                <Button
                  variant="text"
                  size="small"
                  sx={{ mt: 1 }}
                  onClick={() => alert('Reply feature coming soon!')}
                >
                  Reply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
