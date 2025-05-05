import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Link,
  InputLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AgentRegistration = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    idCard: null,
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field) => (e) => {
    const value = field === 'idCard' ? e.target.files[0] : e.target.value;
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!form.idCard) {
      alert('Please upload a government-issued ID');
      return;
    }

    // Handle registration logic here
    console.log(form);
    alert('Agent registered successfully!');
    navigate('/agent/login');
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: 24, maxWidth: 600, margin: 'auto', marginTop: 40 }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Agent Registration
      </Typography>

      <Grid container spacing={3} direction="column">
        <Grid item>
          <TextField
            fullWidth
            label="Agent Name"
            variant="outlined"
            value={form.name}
            onChange={handleChange('name')}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            value={form.email}
            onChange={handleChange('email')}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            value={form.phone}
            onChange={handleChange('phone')}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            value={form.company}
            onChange={handleChange('company')}
          />
        </Grid>

        <Grid item>
          <InputLabel>Government Issued ID Card</InputLabel>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleChange('idCard')}
            style={{ marginTop: 8 }}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={form.password}
            onChange={handleChange('password')}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={form.confirmPassword}
            onChange={handleChange('confirmPassword')}
          />
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Register Agent
          </Button>

          <Typography variant="body2" align="center" mt={2}>
            Already have an account?{' '}
            <Link component="button" onClick={() => navigate('/agent/login')} underline="hover">
              Login here
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AgentRegistration;
