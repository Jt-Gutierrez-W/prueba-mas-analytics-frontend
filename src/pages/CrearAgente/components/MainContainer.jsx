import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import MasAnalyticsLogo from '../../../assets/logo-mas-analytics-color.svg';

const primaryColor = '#5F4EFC';
const secondaryColor = '#5EEEC1';

const StyledButton = styled(Button)(({ variant }) => ({
  backgroundColor: variant === 'contained' ? primaryColor : undefined,
  color: variant === 'contained' ? 'white' : primaryColor,
  borderColor: variant === 'outlined' ? primaryColor : undefined,
  '&:hover': {
    backgroundColor: variant === 'contained' ? '#4a3ac8' : undefined,
    borderColor: variant === 'outlined' ? '#4a3ac8' : undefined,
    color: variant === 'outlined' ? '#4a3ac8' : undefined,
  },
  marginTop: '20px',
}));

const MainContainer = ({ onButtonClick }) => {
  return (
    <Paper elevation={3} sx={{ 
      padding: 4, 
      borderRadius: '12px', 
      width: '100%', 
      maxWidth: '1100px',
      backgroundColor: '#13133A', 
      marginBottom: 4,
      border: '1px solid #019AD4'
    }}>
      <div className="flex w-full gap-x-4">
        <div className="w-[40%] flex justify-center items-center">
          <img src={MasAnalyticsLogo} alt="MAS Analytics Logo" style={{ height: '250px', width: 'auto' }} />
        </div>
        <div className="w-[60%]">
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            Agentes de voz con IA para ventas
          </Typography>
          <Typography variant="body1" sx={{ color: '#ffffff', marginBottom: 3, lineHeight: 1.7 }}>
            Califica prospectos, agenda citas y personaliza conversaciones fácilmente con agentes de llamadas IA disponibles 24/7.
          </Typography>
          <StyledButton 
            variant="contained" 
            onClick={onButtonClick} 
            sx={{ 
              backgroundColor: secondaryColor, 
              color: primaryColor, 
              '&:hover': { 
                backgroundColor: '#4cdbaf' 
              } 
            }}
          >
            Crear Agente Ahora
          </StyledButton>
        </div>
      </div>
    </Paper>
  );
};

export default MainContainer;
