import React from 'react';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box 
      className="flex flex-col h-[30%] m-4" 
      sx={{ 
        boxShadow: 2, 
        borderRadius: '8px', 
        p: 3, 
      }}
    >
      
      <div className="flex-grow flex flex-col justify-center"> 
        <div className="w-1/4 h-2 bg-gradient-to-r from-[#5EEEC1] to-[#02A8E1] mb-2"></div> 
        <h1 className="font-[300] text-[40px] text-[#13133A]">Gestiona tus llamadas</h1> 
        <h2 className="font-semibold text-[50px] bg-gradient-to-r from-[#5EEEC1] to-[#02A8E1] bg-clip-text text-transparent pt-1">Llamadas Individuales o Masivas</h2>
      </div>
    </Box>
  );
};

export default Header;
