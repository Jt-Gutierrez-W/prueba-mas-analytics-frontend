import React, { useState } from 'react';
import { Box } from '@mui/material';

// Importación de componentes
import TitleSection from './components/TitleSection';
import MetricsCircles from './components/MetricsCircles';
import MainContainer from './components/MainContainer';
import AgentModal from './components/AgentModal';

const CrearAgente = () => {
  const [_agentName, _setAgentName] = useState('');
  const [_script, _setScript] = useState('');
  const [_voice, _setVoice] = useState('');
  const [openModal, setOpenModal] = useState(false); // Renamed for clarity

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false); // Function to close the modal
  
  return (
    <Box sx={{ 
      padding: 3, 
      backgroundColor: '#f4f6f8', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
    }}>
      <TitleSection />
      <MetricsCircles />
      <MainContainer onButtonClick={handleOpenModal} />
      <AgentModal open={openModal} onClose={handleCloseModal} /> {/* Render AgentModal and pass props */}
    </Box>
  );
};

export default CrearAgente;
