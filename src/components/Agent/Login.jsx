import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SuperAdminLogin() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10,14}$/;

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Enter a valid phone number (10-14 digits)';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;

    if (phone === '08108324239' && password === '87654321') {
      navigate('/agent/dashboard');
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
          Login As Agent
        </Typography>

        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
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
          Login
        </Button>

        <Typography variant="body2" align="center" mt={2}>
          New here?{' '}
          <Link
            component="button"
            onClick={() => navigate('/agent-registration')}
            underline="hover"
          >
            Register here
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
