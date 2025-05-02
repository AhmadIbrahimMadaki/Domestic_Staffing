import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Button,
  Stack,
  Modal,
//   IconButton,
} from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
import ServicePersonnelRecord from '../ServicePersonnelDetails';
import EditServicePersonnel from '../EditServicePersonnel';


const roles = ['Nanny', 'Driver', 'Security', 'House Help'];

const mockPersonnel = {
  Nanny: [
    { id: 1, name: 'Grace Adams', city: 'Lagos', status: 'Active', phone: '08012345678', age: 28, gender: 'Female' },
    { id: 2, name: 'Ada Obi', city: 'Abuja', status: 'Inactive', phone: '08087654321', age: 25, gender: 'Female' },
  ],
  Driver: [
    { id: 3, name: 'Mike James', city: 'Kano', status: 'Active', phone: '08111222333', age: 34, gender: 'Male' },
  ],
  Security: [],
  'House Help': [],
};

export default function ManagePersonnel() {
  const [tab, setTab] = useState(0);
  const [selectedPersonnel, setSelectedPersonnel] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [tabValue, setTabValue] = useState('view');

  const role = roles[tab];
  const personnelList = mockPersonnel[role] || [];

  const handleAction = (action, person) => {
    if (action === 'view-profile') {
      setSelectedPersonnel(person);
      setOpenModal(true);
    } else {
      console.log(`${action} personnel with ID: ${person.id}`);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPersonnel(null);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Manage Service Personnel
      </Typography>

      <Tabs value={tab} onChange={(e, newTab) => setTab(newTab)} sx={{ mb: 2 }}>
        {roles.map((role, index) => (
          <Tab label={role} key={index} />
        ))}
      </Tabs>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personnelList.length > 0 ? (
              personnelList.map((person) => (
                <TableRow key={person.id}>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.city}</TableCell>
                  <TableCell>{person.status}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="outlined"
                        size="small"
                        color={person.status === 'Active' ? 'error' : 'success'}
                        onClick={() => handleAction('toggle-status', person)}
                      >
                        {person.status === 'Active' ? 'Deactivate' : 'Approve'}
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="warning"
                        onClick={() => handleAction('blacklist', person)}
                      >
                        Blacklist
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleAction('view-profile', person)}
                      >
                        View Profile
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography textAlign="center">No personnel found for this role.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Profile */}
      <Modal open={openModal} onClose={handleCloseModal}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: 1000,
      maxHeight: '90vh',
      overflowY: 'auto',
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 2,
      p: 2,
    }}
  >
    {/* Tabs for View/Edit */}
    <Tabs
      value={tabValue}
      onChange={(e, newValue) => setTabValue(newValue)}
      textColor="primary"
      indicatorColor="primary"
      sx={{ mb: 2 }}
    >
      <Tab label="View Profile" value="view" />
      <Tab label="Edit Profile" value="edit" />
    </Tabs>

    {/* Conditional rendering */}
    {selectedPersonnel && (
  <>
    {tabValue === 'view' ? (
      <ServicePersonnelRecord personnel={selectedPersonnel} />
    ) : (
      <EditServicePersonnel
        personnel={selectedPersonnel}
        onSave={(updated) => {
          console.log('Updated Personnel:', updated);
          // optionally update state here
          setSelectedPersonnel(updated);
          setTabValue('view'); // return to view
        }}
      />
    )}
  </>
)}

  </Box>
</Modal>

    </Box>
  );
}
