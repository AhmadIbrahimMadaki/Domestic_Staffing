import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

const mockBookings = [
  {
    id: 1,
    client: 'Sarah Johnson',
    serviceType: 'Nanny',
    status: 'Pending',
    date: '2025-04-20',
    notes: 'Requested night shift support.',
  },
  {
    id: 2,
    client: 'Michael Lee',
    serviceType: 'Driver',
    status: 'Completed',
    date: '2025-04-15',
    notes: 'Airport pick-up completed successfully.',
  },
  {
    id: 3,
    client: 'Aisha Bello',
    serviceType: 'House Help',
    status: 'Cancelled',
    date: '2025-04-10',
    notes: 'Client cancelled due to schedule change.',
  },
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

const TrackBookings = () => {
  const [statusFilter] = useState('');
  const [typeFilter] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [showDetail, setShowDetail] = useState(false);
  const [selected, setSelected] = useState(null);
  const [serviceType, setServiceType] = useState('');
  const [status, setStatus] = useState('');


  const filteredBookings = mockBookings.filter((booking) => {
    return (
      (!statusFilter || booking.status === statusFilter) &&
      (!typeFilter || booking.serviceType === typeFilter) &&
      (!fromDate || booking.date >= fromDate) &&
      (!toDate || booking.date <= toDate)
    );
  });

  const openBookingDetails = (booking) => {
    setSelected(booking);
    setShowDetail(true);
  };

  const closeModal = () => {
    setShowDetail(false);
    setSelected(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Track Bookings
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 2 }} alignItems="center">
      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
  <Box sx={{ minWidth: 150 }}>
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        label="Status"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
        <MenuItem value="Cancelled">Cancelled</MenuItem>
      </Select>
    </FormControl>
  </Box>

  <Box sx={{ minWidth: 150 }}>
    <FormControl fullWidth>
      <InputLabel>Service Type</InputLabel>
      <Select
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        label="Service Type"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Nanny">Nanny</MenuItem>
        <MenuItem value="Driver">Driver</MenuItem>
        <MenuItem value="Security">Security</MenuItem>
        <MenuItem value="House Help">House Help</MenuItem>
      </Select>
    </FormControl>
  </Box>
</Box>

        <TextField
          size="small"
          type="date"
          label="From"
          InputLabelProps={{ shrink: true }}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <TextField
          size="small"
          type="date"
          label="To"
          InputLabelProps={{ shrink: true }}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.client}</TableCell>
                <TableCell>{booking.serviceType}</TableCell>
                <TableCell>
                  <Chip
                    label={booking.status}
                    color={
                      booking.status === 'Completed'
                        ? 'success'
                        : booking.status === 'Cancelled'
                        ? 'error'
                        : 'warning'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => openBookingDetails(booking)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={showDetail} onClose={closeModal}>
        <Box sx={modalStyle}>
          {selected && (
            <>
              <Typography variant="h6" gutterBottom>
                Booking Details
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography><strong>Client:</strong> {selected.client}</Typography>
              <Typography><strong>Service:</strong> {selected.serviceType}</Typography>
              <Typography><strong>Date:</strong> {selected.date}</Typography>
              <Typography><strong>Status:</strong> {selected.status}</Typography>
              <Typography><strong>Notes:</strong> {selected.notes}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default TrackBookings;
