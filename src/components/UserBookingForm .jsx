import React from 'react';
import {
  Paper,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Button,
} from '@mui/material';

const UserBookingForm = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [genderPreference, setGenderPreference] = React.useState('Any');

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: 'auto',
        mt: 5,
        p: 4,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        User Booking Form
      </Typography>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <FormLabel>Required</FormLabel>
        <RadioGroup
          row
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <FormControlLabel value="Nanny" control={<Radio />} label="Nanny" />
          <FormControlLabel value="Driver" control={<Radio />} label="Driver" />
          <FormControlLabel value="Security" control={<Radio />} label="Security" />
        </RadioGroup>
      </FormControl>

      <TextField fullWidth label="Location" variant="outlined" margin="normal" />
      <TextField
        fullWidth
        label="Preferred start date/time"
        type="datetime-local"
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <FormControl fullWidth sx={{ mt: 2 }}>
        <FormLabel>Gender preference</FormLabel>
        <RadioGroup
          row
          value={genderPreference}
          onChange={(e) => setGenderPreference(e.target.value)}
        >
          <FormControlLabel value="Any" control={<Radio />} label="Any" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      <TextField
        fullWidth
        label="Duration (e.g., Hourly, Daily, Monthly)"
        variant="outlined"
        margin="normal"
      />

      <Button fullWidth variant="contained" sx={{ mt: 3 }} color="primary">
        Submit Request
      </Button>
    </Paper>
  );
};

export default UserBookingForm;
