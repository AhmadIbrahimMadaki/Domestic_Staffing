import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';

export default function AssignServicePersonnel() {
  const [selectedRequest, setSelectedRequest] = useState('');
  const [selectedPersonnel, setSelectedPersonnel] = useState('');

  // Example data - replace with API data
  const serviceRequests = [
    { id: 1, name: 'Request #101 - Cleaning' },
    { id: 2, name: 'Request #102 - Babysitting' },
  ];

  const personnelList = [
    { id: 'p1', name: 'Aisha Bello' },
    { id: 'p2', name: 'John Yusuf' },
  ];

  const handleAssign = () => {
    if (!selectedRequest || !selectedPersonnel) {
      alert('Please select both request and personnel');
      return;
    }

    // Assign logic here
    console.log(`Assigned ${selectedPersonnel} to ${selectedRequest}`);
    alert('Personnel successfully assigned!');
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, width: '90%', maxWidth: 600 }}>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Assign Service Personnel to Request
        </Typography>

        <FormControl fullWidth margin="normal">
          <InputLabel>Select Request</InputLabel>
          <Select
            value={selectedRequest}
            label="Select Request"
            onChange={(e) => setSelectedRequest(e.target.value)}
          >
            {serviceRequests.map((req) => (
              <MenuItem key={req.id} value={req.id}>
                {req.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Select Personnel</InputLabel>
          <Select
            value={selectedPersonnel}
            label="Select Personnel"
            onChange={(e) => setSelectedPersonnel(e.target.value)}
          >
            {personnelList.map((person) => (
              <MenuItem key={person.id} value={person.id}>
                {person.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAssign}
          >
            Assign Personnel
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}
