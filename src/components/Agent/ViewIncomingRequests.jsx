import React, { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Chip
} from '@mui/material';

export default function ViewIncomingRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching dummy data
  useEffect(() => {
    setTimeout(() => {
      const dummyData = [
        {
          id: 1,
          title: 'Clean 3-bedroom apartment',
          client_name: 'John Doe',
          created_at: '2025-04-26T10:00:00Z',
          status: 'Pending'
        },
        {
          id: 2,
          title: 'Cook for birthday event',
          client_name: 'Maryam Yusuf',
          created_at: '2025-04-25T15:30:00Z',
          status: 'Assigned'
        },
        {
          id: 3,
          title: 'Nanny for weekend',
          client_name: 'Aliyu Musa',
          created_at: '2025-04-24T08:20:00Z',
          status: 'Completed'
        }
      ];
      setRequests(dummyData);
      setLoading(false);
    }, 1500); // Simulate network delay
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Incoming Service Requests
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {requests.map((req) => (
            <Grid item xs={12} sm={6} md={4} key={req.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {req.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Client: {req.client_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Date: {new Date(req.created_at).toLocaleDateString()}
                  </Typography>
                  <Box mt={1}>
                    <Chip
                      label={req.status}
                      color={
                        req.status === 'Completed'
                          ? 'success'
                          : req.status === 'Assigned'
                          ? 'primary'
                          : 'warning'
                      }
                      variant="outlined"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
