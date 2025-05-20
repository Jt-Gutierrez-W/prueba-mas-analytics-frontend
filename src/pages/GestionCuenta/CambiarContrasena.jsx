import React from 'react';
import { Box } from '@mui/material';
import CambiarContrasenaForm from './components/CambiarContrasenaForm';

const CambiarContrasena = () => {
  return (
    <Box className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
      <CambiarContrasenaForm />
    </Box>
  );
};

export default CambiarContrasena;
