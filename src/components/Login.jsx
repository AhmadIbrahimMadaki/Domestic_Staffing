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

export default function CustomerLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ phone: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10,14}$/;

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = 'Enter a valid phone number (10-14 digits)';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
  
    const users = [
      {
        role: 'admin',
        phone: '08000000000',
        password: 'admin123',
        redirect: '/superadmin-dashboard',
      },
      {
        role: 'agent',
        phone: '08100000000',
        password: 'agent123',
        redirect: '/agent-dashboard',
      },
      {
        role: 'customer',
        phone: '08200000000',
        password: 'customer123',
        redirect: '/customer-dashboard',
      },
    ];
  
    const matchedUser = users.find(
      (user) => user.phone === form.phone && user.password === form.password
    );
  
    if (matchedUser) {
      console.log(`${matchedUser.role} login successful`);
      navigate(matchedUser.redirect);
    } else {
      alert('Invalid credentials');
    }
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
            Login
        </Typography>

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
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={form.password}
          onChange={handleChange('password')}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Link href="#" variant="body2" underline="hover">
            Forgot Password?
          </Link>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Log In
        </Button>

        <Box textAlign="center" mt={3}>
  <Typography variant="body2" mb={1}>
    Don't have an account?
  </Typography>
  <Grid container spacing={2} justifyContent="center">
    <Grid item>
      <Link href="/agent-registration" underline="hover" color="primary">
        Register as Agent
      </Link>
    </Grid>
    <Grid item>
      <Link href="/customer-registration" underline="hover" color="primary">
        Register as Customer
      </Link>
    </Grid>
  </Grid>
</Box>

      </Paper>
    </Grid>
  );
}
