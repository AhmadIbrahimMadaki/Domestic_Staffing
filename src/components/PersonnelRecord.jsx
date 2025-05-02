import React, { useState } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material';

const PersonnelRecord = () => {
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [availability, setAvailability] = useState('');
  const [setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 24, maxWidth: 600, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom align="center">
        Service Personnel Record
      </Typography>

      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Avatar src={preview} sx={{ width: 80, height: 80 }} />
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            hidden
            onChange={handleImageUpload}
          />
          <label htmlFor="icon-button-file">
            <Tooltip title="Upload Profile Picture">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </Tooltip>
          </label>
        </Grid>

        <Grid item sx={{ width: '100%' }}>
          <TextField fullWidth label="Full Name" variant="outlined" />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
          <TextField fullWidth label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
          <TextField fullWidth label="Email Address" type="email" variant="outlined" />
        </Grid>

        <Grid item sx={{ width: '100%' }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={(e) => setGender(e.target.value)} label="Gender">
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sx={{ width: '100%' }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
              <MenuItem value="nanny">Nanny</MenuItem>
              <MenuItem value="driver">Driver</MenuItem>
              <MenuItem value="househelp">Househelp</MenuItem>
              <MenuItem value="security">Security</MenuItem>
              <MenuItem value="cook">Cook</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sx={{ width: '100%' }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Availability</InputLabel>
            <Select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              label="Availability"
            >
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="not_available">Not Available</MenuItem>
              <MenuItem value="assigned">Assigned to a Job</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Work Experience / Background"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>

        <Grid item sx={{ width: '100%' }}>
          <Button variant="contained" color="primary" fullWidth>
            Save Record
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PersonnelRecord;
