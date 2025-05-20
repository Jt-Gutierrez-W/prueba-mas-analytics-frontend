import React from 'react';
import { Box } from '@mui/material';
import IniciarSesionForm from './components/IniciarSesionForm';

const IniciarSesion = () => {
  return (
    <Box className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
      <IniciarSesionForm />
    </Box>
  );
};

export default IniciarSesion;
