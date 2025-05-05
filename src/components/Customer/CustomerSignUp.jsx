import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomerSignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(form.phone))
      newErrors.phone = 'Enter a valid phone number (10-14 digits)';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(form.email))
      newErrors.email = 'Enter a valid email address';
    if (!form.password) newErrors.password = 'Password is required';
    if (form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    console.log('Submitted:', form);
    // API call to register here
    navigate('/login'); // redirect after success
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh', backgroundColor: '#f4f6f8' }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '90%', maxWidth: 400 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Customer Sign Up
        </Typography>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={form.name}
          onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors.name}
        />

        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          margin="normal"
          value={form.phone}
          onChange={handleChange('phone')}
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <TextField
          label="Email Address"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={handleChange('email')}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={handleChange('password')}
          error={!!errors.password}
          helperText={errors.password}
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
          value={form.confirmPassword}
          onChange={handleChange('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Link href="/customer-login" underline="hover">
              Log in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
