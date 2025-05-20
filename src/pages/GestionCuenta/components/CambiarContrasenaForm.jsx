import React from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const CambiarContrasenaForm = () => {
  return (
    <Paper elevation={3} className="p-10 rounded-lg shadow-xl w-full max-w-lg">
      <Typography variant="h4" component="h1" className="text-center text-company-primary mb-10">
        Cambiar Contraseña
      </Typography>
      <form>
        <div className="mb-6">
          <TextField
            label="Contraseña Actual"
            type="password"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="mb-6">
          <TextField
            label="Nueva Contraseña"
            type="password"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="mb-8">
          <TextField
            label="Confirmar Nueva Contraseña"
            type="password"
            variant="outlined"
            fullWidth
          />
        </div>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#13133A',
            color: 'white',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            marginTop: '0.5rem',
            '&:hover': {
              backgroundColor: '#2A2A5A', 
            },
          }}
        >
          Cambiar Contraseña
        </Button>
      </form>
    </Paper>
  );
};

export default CambiarContrasenaForm;
