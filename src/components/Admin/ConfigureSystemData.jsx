import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Paper,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ConfigureSystemData = () => {
  const [tab, setTab] = useState(0);
  const [categories, setCategories] = useState(['Nanny', 'Driver', 'Security', 'House Help']);
  const [serviceTypes, setServiceTypes] = useState(['Full-Time', 'Part-Time']);

  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [itemType, setItemType] = useState(''); // 'category' or 'service'
  const [currentValue, setCurrentValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenDialog = (type, value = '', index = null) => {
    setItemType(type);
    setEditMode(index !== null);
    setCurrentValue(value);
    setEditIndex(index);
    setOpenDialog(true);
  };

  const handleSave = () => {
    if (!currentValue.trim()) return;

    if (itemType === 'category') {
      const updated = [...categories];
      editMode ? (updated[editIndex] = currentValue) : updated.push(currentValue);
      setCategories(updated);
    } else {
      const updated = [...serviceTypes];
      editMode ? (updated[editIndex] = currentValue) : updated.push(currentValue);
      setServiceTypes(updated);
    }

    setOpenDialog(false);
    setCurrentValue('');
    setEditIndex(null);
    setEditMode(false);
  };

  const handleDelete = (type, index) => {
    if (type === 'category') {
      const updated = [...categories];
      updated.splice(index, 1);
      setCategories(updated);
    } else {
      const updated = [...serviceTypes];
      updated.splice(index, 1);
      setServiceTypes(updated);
    }
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Configure System Data
      </Typography>
      <Tabs value={tab} onChange={(e, newTab) => setTab(newTab)} sx={{ mb: 2 }}>
        <Tab label="Manage Categories" />
        <Tab label="Manage Service Types" />
      </Tabs>

      {/* Category Tab */}
      {tab === 0 && (
        <>
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="contained" onClick={() => handleOpenDialog('category')}>Add Category</Button>
          </Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((cat, index) => (
                <TableRow key={index}>
                  <TableCell>{cat}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleOpenDialog('category', cat, index)}><EditIcon /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete('category', index)}><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}

      {/* Service Type Tab */}
      {tab === 1 && (
        <>
          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="contained" onClick={() => handleOpenDialog('service')}>Add Service Type</Button>
          </Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Service Type</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceTypes.map((type, index) => (
                <TableRow key={index}>
                  <TableCell>{type}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleOpenDialog('service', type, index)}><EditIcon /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete('service', index)}><DeleteIcon /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}

      {/* Dialog for Add/Edit */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editMode ? 'Edit' : 'Add'} {itemType === 'category' ? 'Category' : 'Service Type'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin="normal"
            label={itemType === 'category' ? 'Category Name' : 'Service Type Name'}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ConfigureSystemData;
