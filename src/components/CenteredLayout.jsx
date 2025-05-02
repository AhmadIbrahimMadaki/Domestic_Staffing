import React from 'react';
import { Box } from '@mui/material';

const CenteredLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        p: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredLayout;
