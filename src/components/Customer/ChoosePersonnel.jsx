import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Box,
  Rating
} from '@mui/material';

const dummyPersonnel = [
  {
    id: 1,
    name: 'Aisha Bello',
    role: 'House Cleaner',
    rating: 4.5,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Chinedu Okeke',
    role: 'Nanny',
    rating: 4.8,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Fatima Suleiman',
    role: 'Cook',
    rating: 4.2,
    photo: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

export default function ChoosePersonnel() {
  const [selected, setSelected] = useState(null);

  const handleAssign = (personnel) => {
    setSelected(personnel.id);
    alert(`Assigned ${personnel.name} successfully!`);
    // Navigate to booking confirmation or dashboard if needed
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Choose a Service Personnel
      </Typography>

      <Grid container spacing={3}>
        {dummyPersonnel.map((person) => (
          <Grid item xs={12} md={4} key={person.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: 'center',
                border: selected === person.id ? '2px solid #1976d2' : '1px solid #ccc'
              }}
            >
              <Avatar
                src={person.photo}
                alt={person.name}
                sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
              />
              <Typography variant="h6">{person.name}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {person.role}
              </Typography>
              <Rating value={person.rating} precision={0.1} readOnly />
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => handleAssign(person)}
              >
                Assign
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
