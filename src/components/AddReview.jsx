import React from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Rating
} from '@mui/material';

const AddReview = () => {
  const [rating, setRating] = React.useState(0);

  return (
    <Paper elevation={3} style={{ padding: 24, maxWidth: 700, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom align="center">
        Add Review
      </Typography>

      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField fullWidth label="Your Name" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Review Title" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Review Description"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="review-rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Submit Review
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddReview;
