import React from 'react';
// import { Link } from 'react-router-dom';

import {
//   AppBar,
//   Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  Link,
  CardContent,
  CssBaseline,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      {/* Navbar */}
      {/* <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DomesticStaffPro
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </Toolbar>
      </AppBar> */}

      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1976d2', color: '#fff', py: 10 }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Hire Trusted Domestic Staff Easily
          </Typography>
          <Typography variant="h6" gutterBottom>
            Find house helps, nannies, cooks, and drivers with verified profiles.
          </Typography>
          <Button variant="contained" size="large" color="secondary">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          {[
            ['Verified Workers', 'Each staff is background checked and approved.'],
            ['Easy Booking', 'Hire in just a few clicks with our user-friendly platform.'],
            ['Customer Support', 'We support you every step of the way.'],
          ].map(([title, desc], index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography>{desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[
              ['Sign Up', 'Create an account as an employer or staff.'],
              ['Browse or Post Jobs', 'Find staff or job opportunities easily.'],
              ['Hire or Get Hired', 'Connect and finalize the job.'],
            ].map(([title, desc], index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{title}</Typography>
                    <Typography>{desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Start Your Journey Today
        </Typography>
        <Button variant="contained" size="large" color="primary">
          Join Now
          <Link component="button" onClick={() => navigate('/login')} underline="hover"></Link>
        </Button>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1976d2', color: '#fff', py: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} DomesticStaffPro. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default LandingPage;
