import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const primaryColor = '#5F4EFC';


const StyledModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: 24,
  padding: theme.spacing(4),
  borderRadius: '8px',
}));

const StyledFormControl = styled(FormControl)({
  marginBottom: '20px',
  minWidth: '100%',
});

const StyledButton = styled(Button)(({ variant }) => ({
  backgroundColor: variant === 'contained' ? primaryColor : undefined,
  color: variant === 'contained' ? 'white' : primaryColor,
  borderColor: variant === 'outlined' ? primaryColor : undefined,
  '&:hover': {
    backgroundColor: variant === 'contained' ? '#4a3ac8' : undefined,
    borderColor: variant === 'outlined' ? '#4a3ac8' : undefined,
    color: variant === 'outlined' ? '#4a3ac8' : undefined,
  },
  marginTop: '10px',
}));

const AgentModal = ({ open, onClose }) => {
  const [agentName, setAgentName] = useState('');
  const [script, setScript] = useState('');
  const [voice, setVoice] = useState('');

  const handleSubmit = () => {
    
    console.log({ agentName, script, voice });
    onClose(); 
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-agent-modal-title"
      aria-describedby="create-agent-modal-description"
    >
      <StyledModalBox>
        <Typography id="create-agent-modal-title" variant="h6" component="h2" sx={{ color: primaryColor, fontWeight: 'bold', mb: 2 }}>
          Crear Nuevo Agente Virtual
        </Typography>
        
        <StyledFormControl fullWidth>
          <TextField
            label="Nombre del Agente"
            variant="outlined"
            value={agentName}
            onChange={(e) => setAgentName(e.target.value)}
            fullWidth
          />
        </StyledFormControl>

        <StyledFormControl fullWidth>
          <TextField
            label="Script o Prompt"
            variant="outlined"
            multiline
            rows={4}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            fullWidth
          />
        </StyledFormControl>

        <StyledFormControl fullWidth>
          <InputLabel id="voice-select-label">Voz a Utilizar</InputLabel>
          <Select
            labelId="voice-select-label"
            id="voice-select"
            value={voice}
            label="Voz a Utilizar"
            onChange={(e) => setVoice(e.target.value)}
          >
            <MenuItem value="voz1">Voz Profesional Femenina</MenuItem>
            <MenuItem value="voz2">Voz Amable Masculina</MenuItem>
            <MenuItem value="voz3">Voz Neutral Asistente</MenuItem>
          </Select>
        </StyledFormControl>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <StyledButton variant="outlined" onClick={onClose} sx={{ mr: 1 }}>
            Cancelar
          </StyledButton>
          <StyledButton variant="contained" onClick={handleSubmit}>
            Crear Agente
          </StyledButton>
        </Box>
      </StyledModalBox>
    </Modal>
  );
};

export default AgentModal;