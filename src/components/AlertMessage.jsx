import React from 'react';
import { Box, Typography } from '@mui/material';

const AlertMessage = ({ message, onClose }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        padding: '10px',
        backgroundColor: '#f44336',
        color: 'white',
        borderRadius: '4px',
        boxShadow: 2,
      }}
    >
      <Typography variant="body1">{message}</Typography>
      <Typography
        variant="body2"
        sx={{ cursor: 'pointer', textDecoration: 'underline' }}
        onClick={onClose}
      >
        Fechar
      </Typography>
    </Box>
  );
};

export default AlertMessage;
