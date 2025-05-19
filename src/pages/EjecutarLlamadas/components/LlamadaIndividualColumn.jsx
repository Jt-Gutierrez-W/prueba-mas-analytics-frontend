import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const LlamadaIndividualColumn = ({ handleOpenModal }) => {
  return (
    <Box 
      className="w-1/2 flex flex-col" 
      sx={{
        p: 3,
        boxShadow: 2,
        borderRadius: '8px',
        bgcolor: 'background.paper' 
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 'semibold' }}>
        Ejecutar Llamada Individual
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', textAlign: 'justify', mt: 2 }}>
        Potencia la gestión de tu negocio y destaca entre la competencia mediante la ejecución de llamadas individuales. Esta herramienta te permite establecer una comunicación directa y personalizada con cada cliente o prospecto, adaptando el mensaje y la interacción a sus necesidades específicas. Al configurar y monitorear cada llamada de forma individual, obtienes insights valiosos, mejoras la calidad del servicio y construyes relaciones más sólidas, lo que se traduce en una mayor fidelización y oportunidades de crecimiento. Aprovecha el poder de la atención individualizada para optimizar tus estrategias de ventas, soporte y marketing.
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleOpenModal} 
        sx={{
          mt: 'auto', 
          background: 'linear-gradient(to right, #5EEEC1, #02A8E1)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(to right, #4DDDB0, #0297D0)', // Slightly darker gradient on hover
          }
        }}
      >
        Ejecutar Llamada
      </Button>
    </Box>
  );
};

export default LlamadaIndividualColumn;
