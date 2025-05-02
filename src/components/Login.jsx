import React from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Stack
} from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom align="center" fontWeight="bold">
          Welcome Back
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" mb={2}>
          Please enter your login details
        </Typography>

        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}
        >
          Login
        </Button>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mt={3}>
          <Typography variant="body2" color="text.secondary">
            New here?
          </Typography>
          <Button variant="text" size="small" color="primary" component={Link} to="/register">
            Sign Up
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
