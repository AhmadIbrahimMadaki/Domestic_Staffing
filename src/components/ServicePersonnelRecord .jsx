import React from 'react';
import CenteredLayout from '../components/CenteredLayout';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Chip,
  Stack,
} from '@mui/material';

const ServicePersonnelRecord = () => {
  const personnel = {
    name: 'James Anderson',
    gender: 'Male',
    phone: '+1 224 567 8800',
    assignedAgent: 'Nanny, Driver, Security, House Help , Cook',
    categories: ['View', 'Add'],
    status: 'Available',
    image: 'https://i.pravatar.cc/100?img=12', // Placeholder avatar
  };

  return (
    <CenteredLayout>
        <Card
      elevation={3}
      sx={{
        maxWidth: 500,
        margin: 'auto',
        mt: 5,
        p: 2,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              src={personnel.image}
              alt={personnel.name}
              sx={{ width: 64, height: 64 }}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{personnel.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {personnel.gender}
            </Typography>
            <Typography variant="body2">{personnel.phone}</Typography>
          </Grid>
        </Grid>

        <Stack spacing={1} mt={2}>
          <Typography variant="subtitle2">
            Assigned Agent: {personnel.assignedAgent}
          </Typography>

          <Typography variant="subtitle2">Categories:</Typography>
          <Stack direction="row" spacing={1}>
            {personnel.categories.map((cat, idx) => (
              <Chip key={idx} label={cat} variant="outlined" />
            ))}
          </Stack>

          <Typography variant="subtitle2" mt={1}>
            Availability Status: <strong>{personnel.status}</strong>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
    </CenteredLayout>
    
  );
};

export default ServicePersonnelRecord;
