import { Typography, Box } from '@mui/material';

const primaryColor = '#5F4EFC';

const TitleSection = () => {
  return (
    <div> 
      
      <div className="w-full max-w-[900px] my-12 flex justify-center">
        <div 
          className="h-2 w-1/2 rounded-full" 
          style={{ 
            background: `linear-gradient(90deg, #02A8E1 0%, #5EEEC1 100%)`,
            boxShadow: '0 2px 6px rgba(2, 168, 225, 0.3)'
          }}
        ></div>
      </div>
      
      
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        sx={{ 
          color: primaryColor, 
          fontWeight: 'bold', 
          mb: 2,
          width: '100%',
          maxWidth: '900px'
        }}
      >
        Llamadas automáticas adaptadas a ti
      </Typography>

      
      <Typography 
        variant="subtitle1" 
        align="center" 
        sx={{ 
          color: '#13133A', 
          mb: 5,
          width: '100%',
          maxWidth: '750px',
          lineHeight: 1.6
        }}
      >
        Configura tu agente de IA con el contexto de tu empresa y lanza llamadas simultáneas y ricas en contexto en cuestión de minutos.
      </Typography>
    </div>
  );
};

export default TitleSection;
