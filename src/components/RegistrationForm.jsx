import React, { useState } from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";

const RegistrationForm = () => {
  const [role, setRole] = useState('');

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register as a Domestic Worker or Client
        </Typography>

        <form noValidate autoComplete="off">
          <Grid container spacing={3} direction="column">
            <Grid item>
              <TextField fullWidth label="Full Name" />
            </Grid>
            <Grid item>
              <TextField fullWidth label="Phone Number" />
            </Grid>
            <Grid item>
              <TextField fullWidth label="Email (Optional)" />
            </Grid>
            <Grid item>
              <TextField
                select
                fullWidth
                label="Registering As"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="worker">Domestic Worker</MenuItem>
                <MenuItem value="client">Client</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField fullWidth label="Password" type="password" />
            </Grid>
            <Grid item>
              
              <Button variant="contained" color="primary" fullWidth>
                Submit Registration
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
