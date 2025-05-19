import React from 'react';
import { Typography } from '@mui/material';

const secondaryColor = '#5EEEC1';

const MetricsCircles = () => {
  return (
    <div className="flex w-full max-w-[900px] mb-6" style={{ 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr',
      columnGap: '100px'
    }}>
      
      <div className="flex-1">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-60 w-60 flex items-center justify-center" style={{ backgroundColor: '#13133A', border: '2px solid #019AD4' }}>
            <div className="text-center">
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>95%</Typography>
              <Typography variant="subtitle1" sx={{ color: secondaryColor }}>de respuestas</Typography>
            </div>
          </div>
          <Typography variant="body1" sx={{ color: '#555', mt: 2, textAlign: 'center' }}>
            Tasa de respuesta con agentes IA
          </Typography>
        </div>
      </div>
      
      
      <div className="flex-1">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-60 w-60 flex items-center justify-center" style={{ backgroundColor: '#13133A', border: '2px solid #019AD4' }}>
            <div className="text-center">
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>10+</Typography>
              <Typography variant="subtitle1" sx={{ color: secondaryColor }}>idiomas</Typography>
            </div>
          </div>
          <Typography variant="body1" sx={{ color: '#555', mt: 2, textAlign: 'center' }}>
            Idiomas disponibles
          </Typography>
        </div>
      </div>
      
      
      <div className="flex-1">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-60 w-60 flex items-center justify-center" style={{ backgroundColor: '#13133A', border: '2px solid #019AD4' }}>
            <div className="text-center">
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>600+</Typography>
              <Typography variant="subtitle1" sx={{ color: secondaryColor }}>clientes</Typography>
            </div>
          </div>
          <Typography variant="body1" sx={{ color: '#555', mt: 2, textAlign: 'center' }}>
            Empresas confían en nosotros
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MetricsCircles;
