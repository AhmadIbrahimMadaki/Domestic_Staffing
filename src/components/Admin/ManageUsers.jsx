import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';

const users = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'John Smith', email: 'john@example.com', role: 'User', status: 'Inactive' },
];

export default function ManageUsers() {
  const handleToggleStatus = (id) => {
    console.log(`Toggling status for user ID: ${id}`);
    // Add status update logic here (e.g., API call)
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Manage Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={user.status === 'Active' ? 'error' : 'success'}
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
