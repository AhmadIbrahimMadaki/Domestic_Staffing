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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';

const initialReviews = [
  {
    id: 1,
    reviewer: 'Fatima Bello',
    rating: 4,
    comment: 'She was punctual and did an excellent job. Will hire again!',
    date: '2025-04-25',
    personnel: 'Aisha Umar',
    reply: 'Thank you for the feedback. We’re glad you were satisfied.'
  },
  {
    id: 2,
    reviewer: 'John Ade',
    rating: 5,
    comment: 'Amazing with the kids. Highly professional!',
    date: '2025-04-22',
    personnel: 'Daniel Okoro',
    reply: ''
  },
  {
    id: 3,
    reviewer: 'Amina Musa',
    rating: 3,
    comment: 'Good work, but arrived a bit late.',
    date: '2025-04-20',
    personnel: 'Halima Sani',
    reply: ''
  }
];

export default function PersonnelReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState('date');
  const [openReply, setOpenReply] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [replyText, setReplyText] = useState('');

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return new Date(b.date) - new Date(a.date);
  });

  const handleOpenReply = (review) => {
    setSelectedReview(review);
    setReplyText(review.reply || '');
    setOpenReply(true);
  };

  const handleCloseReply = () => {
    setOpenReply(false);
    setSelectedReview(null);
  };

  const handleSubmitReply = () => {
    const updated = reviews.map((rev) =>
      rev.id === selectedReview.id ? { ...rev, reply: replyText } : rev
    );
    setReviews(updated);
    handleCloseReply();
  };

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
                  <Avatar sx={{ mr: 2 }}>{review.reviewer[0]}</Avatar>
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
                <Typography variant="body2" mt={1}>{review.comment}</Typography>

                {review.reply && (
                  <Box mt={2} p={1} bgcolor="#f1f1f1" borderRadius={1}>
                    <Typography variant="subtitle2" color="primary">
                      Admin Reply:
                    </Typography>
                    <Typography variant="body2">{review.reply}</Typography>
                  </Box>
                )}

                <Button
                  variant="text"
                  size="small"
                  sx={{ mt: 1 }}
                  onClick={() => handleOpenReply(review)}
                >
                  {review.reply ? 'Edit Reply' : 'Reply'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Reply Dialog */}
      <Dialog open={openReply} onClose={handleCloseReply}>
        <DialogTitle>Reply to {selectedReview?.reviewer}</DialogTitle>
        <DialogContent>
          <TextField
            label="Your Reply"
            multiline
            rows={4}
            fullWidth
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReply}>Cancel</Button>
          <Button onClick={handleSubmitReply} variant="contained">
            Submit Reply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
