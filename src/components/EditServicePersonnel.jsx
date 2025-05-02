import React, { useState } from 'react';
import {
  Box,
  Stack,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

const EditServicePersonnel = ({ personnel, onSave }) => {
  const [formData, setFormData] = useState({ ...personnel });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ open: false, type: '', text: '' });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      try {
        onSave(formData);
        setMessage({ open: true, type: 'success', text: 'Profile updated successfully' });
      } catch (err) {
        setMessage({ open: true, type: 'error', text: 'Something went wrong' });
      }
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        <TextField
          label="Full Name"
          value={formData.name || ''}
          onChange={handleChange('name')}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
        />

        <FormControl fullWidth error={!!errors.role}>
          <InputLabel>Role</InputLabel>
          <Select
            value={formData.role || ''}
            label="Role"
            onChange={handleChange('role')}
          >
            <MenuItem value="Nanny">Nanny</MenuItem>
            <MenuItem value="Driver">Driver</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="House Help">House Help</MenuItem>
          </Select>
        </FormControl>
        {errors.role && <Box color="error.main" fontSize={13}>{errors.role}</Box>}

        <TextField
          label="City"
          value={formData.city || ''}
          onChange={handleChange('city')}
          error={!!errors.city}
          helperText={errors.city}
          fullWidth
        />

        <TextField
          label="Phone"
          value={formData.phone || ''}
          onChange={handleChange('phone')}
          error={!!errors.phone}
          helperText={errors.phone}
          fullWidth
        />

        <TextField
          label="Email"
          value={formData.email || ''}
          onChange={handleChange('email')}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />

        <Button variant="contained" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Stack>

      <Snackbar
        open={message.open}
        autoHideDuration={4000}
        onClose={() => setMessage({ ...message, open: false })}
      >
        <Alert
          severity={message.type}
          onClose={() => setMessage({ ...message, open: false })}
          variant="filled"
        >
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditServicePersonnel;
