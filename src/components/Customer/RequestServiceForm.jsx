import React, { useState } from 'react';
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography
} from '@mui/material';

const serviceCategories = [
  'House Cleaning',
  'Nanny Services',
  'Elderly Care',
  'Cooking',
  'Laundry'
];

export default function RequestServiceForm() {
  const [formData, setFormData] = useState({
    category: '',
    date: '',
    time: '',
    location: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log('Service Requested:', formData);
    alert('Service requested successfully!');
    // Navigate to next step: choose personnel
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh', backgroundColor: '#f4f6f8' }}>
      <Paper elevation={3} sx={{ p: 4, width: '90%', maxWidth: 500 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Request a Service
        </Typography>

        <TextField
          select
          fullWidth
          label="Service Category"
          value={formData.category}
          onChange={handleChange('category')}
          margin="normal"
          error={!!errors.category}
          helperText={errors.category}
        >
          {serviceCategories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Preferred Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange('date')}
          margin="normal"
          error={!!errors.date}
          helperText={errors.date}
        />

        <TextField
          label="Preferred Time"
          type="time"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formData.time}
          onChange={handleChange('time')}
          margin="normal"
          error={!!errors.time}
          helperText={errors.time}
        />

        <TextField
          label="Service Location"
          fullWidth
          multiline
          rows={2}
          value={formData.location}
          onChange={handleChange('location')}
          margin="normal"
          error={!!errors.location}
          helperText={errors.location}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Request Service
        </Button>
      </Paper>
    </Grid>
  );
}
