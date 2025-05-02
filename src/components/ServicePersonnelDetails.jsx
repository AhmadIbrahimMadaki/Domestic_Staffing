// components/ServicePersonnelRecord.jsx
import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Avatar,
  Divider,
  Chip,
  Box,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';


const ServicePersonnelRecord = ({ personnel }) => {
  const reviews = [
    {
      stars: 5,
      comment: 'Elizabeth is wonderful with our children. Highly recommend!',
      by: 'Jennifer Miller',
    },
    {
      stars: 5,
      comment: 'Very professional and caring. Reliable nanny.',
      date: 'February 18, 2020',
    },
    {
      stars: 5,
      comment: 'Great experience, Elizabeth is very trustworthy.',
      date: 'January 8, 2024',
    },
    {
      stars: 5,
      comment: 'Excellent service.',
      date: 'December 22, 2023',
    },
  ];

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Service Personnel Record
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar
              alt={personnel.name}
              src={personnel.avatar || 'https://randomuser.me/api/portraits/women/44.jpg'}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography variant="h6" align="center">{personnel.name}</Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary">{personnel.role}</Typography>

          <Box mt={2} pl={2}>
            <Typography><strong>Gender:</strong> {personnel.gender}</Typography>
            <Typography><strong>Contact:</strong> {personnel.phone}</Typography>
            <Typography><strong>Email:</strong> {personnel.email || 'N/A'}</Typography>
            <Typography><strong>ID & Verification:</strong> Verified</Typography>
            <Typography><strong>Assigned Agent:</strong> Marc J</Typography>
            <Typography><strong>Categories:</strong> {personnel.role}, Help</Typography>
            <Typography><strong>Availability:</strong> <Chip label="Available" color="success" size="small" /></Typography>
            <Typography><strong>Status:</strong> {personnel.status}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="subtitle1" gutterBottom><strong>Reviews</strong></Typography>
          <Box display="flex" alignItems="center" mb={1}>
            {[...Array(4)].map((_, i) => <StarIcon key={i} sx={{ color: 'gold' }} />)}
            <StarHalfIcon sx={{ color: 'gold' }} />
            <Typography variant="h6" sx={{ ml: 1 }}>4.5</Typography>
          </Box>
          {reviews.map((review, index) => (
            <Box key={index} mb={2}>
              {[...Array(review.stars)].map((_, i) => (
                <StarIcon key={i} sx={{ color: 'gold', fontSize: 20 }} />
              ))}
              <Typography variant="body2" mt={1}>{review.comment}</Typography>
              {review.by && <Typography variant="caption" color="text.secondary">{review.by}</Typography>}
              {review.date && <Typography variant="caption" color="text.secondary">{review.date}</Typography>}
              <Divider sx={{ mt: 1 }} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ServicePersonnelRecord;
