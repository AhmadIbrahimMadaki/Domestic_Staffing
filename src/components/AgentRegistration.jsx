import React from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

const AgentRegistration = () => {
  return (
    <Paper elevation={3} style={{ padding: 24, maxWidth: 600, margin: 'auto', marginTop: 40 }}>
      <Typography variant="h5" gutterBottom align="center">
        Agent Registration
      </Typography>

      <Grid container spacing={3} direction="column">
        <Grid item>
          <TextField fullWidth label="Agent Name" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Email Address" type="email" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Company Name" variant="outlined" />
        </Grid>
        {/* <Grid item>
          <TextField fullWidth label="Agent ID (optional)" variant="outlined" />
        </Grid> */}
        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Register Agent
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AgentRegistration;
