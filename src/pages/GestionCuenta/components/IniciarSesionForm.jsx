import React from 'react';
import { TextField, Button, Paper, Typography, Box, Link } from '@mui/material';

const IniciarSesionForm = () => {
  return (
    <Paper elevation={3} className="p-10 rounded-lg shadow-xl w-full max-w-lg">
      <Typography variant="h4" component="h1" className="text-center text-company-primary mb-10">
        Iniciar Sesión
      </Typography>
      <form>
        <div className="mb-6">
          <TextField
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="mb-8">
          <TextField
            label="Contraseña"
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
            marginTop: '1.5rem', 
            '&:hover': {
              backgroundColor: '#2A2A5A',
            },
          }}
        >
          Iniciar Sesión
        </Button>
        <Box className="mt-4 text-center">
          <Link href="#" variant="body2" className="text-company-secondary hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
      </form>
    </Paper>
  );
};

export default IniciarSesionForm;
