import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Button,
  TextField,
  Grid,
  Chip
} from '@mui/material';

const initialAgents = [
  { id: 1, name: 'Aisha Bello', phone: '08012345678', status: 'Pending', date: '2025-04-01' },
  { id: 2, name: 'David Okoro', phone: '08098765432', status: 'Active', date: '2025-04-02' },
  { id: 3, name: 'Fatima Yusuf', phone: '08123456789', status: 'Inactive', date: '2025-04-03' },
];

export default function ManageAgents() {
  const [agents, setAgents] = useState(initialAgents);
  const [search, setSearch] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setAgents((prev) =>
      prev.map((agent) =>
        agent.id === id ? { ...agent, status: newStatus } : agent
      )
    );
  };

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.phone.includes(search)
  );

  return (
    <Box p={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Manage Agents
      </Typography>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search by name or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Added</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAgents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell>{agent.name}</TableCell>
                <TableCell>{agent.phone}</TableCell>
                <TableCell>
                  <Chip
                    label={agent.status}
                    color={
                      agent.status === 'Active'
                        ? 'success'
                        : agent.status === 'Pending'
                        ? 'warning'
                        : 'default'
                    }
                  />
                </TableCell>
                <TableCell>{agent.date}</TableCell>
                <TableCell>
                  {agent.status !== 'Active' && (
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => handleStatusChange(agent.id, 'Active')}
                      sx={{ mr: 1 }}
                    >
                      Approve
                    </Button>
                  )}
                  {agent.status !== 'Inactive' && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() => handleStatusChange(agent.id, 'Inactive')}
                    >
                      Deactivate
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {filteredAgents.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No agents found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
