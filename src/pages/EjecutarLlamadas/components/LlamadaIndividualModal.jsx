import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const agents = [
  { id: 'agent1', name: 'Agente GPT-3.5 Turbo' },
  { id: 'agent2', name: 'Agente Analítico Avanzado' },
  { id: 'agent3', name: 'Agente de Soporte Rápido' },
];

const LlamadaIndividualModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="ejecutar-llamada-modal-title"
      aria-describedby="ejecutar-llamada-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: '70%', md: '500px' },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '12px',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '90vh',
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="ejecutar-llamada-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#13133A' }}>
            Programar Llamada Individual
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Box component="form" sx={{ overflowY: 'auto', pr: 1, pt: 1, flexGrow: 1, mb: 2 }}>
          <Stack spacing={1} sx={{mb:3}}>
            <TextField label="Nombres" fullWidth variant="outlined" />
            <TextField label="Apellidos" fullWidth variant="outlined" />
            <TextField
              label="Fecha y Hora"
              type="datetime-local"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              sx={{ mt: 1 }}
            />
            <TextField label="RUT" fullWidth variant="outlined" placeholder="Ej: 12345678-9" />
            <TextField label="Teléfono" type="tel" fullWidth variant="outlined" placeholder="Ej: +56912345678" />
            <TextField label="Email" type="email" fullWidth variant="outlined" />
            <FormControl fullWidth variant="outlined">
              <InputLabel id="agente-select-label">Agente a Utilizar</InputLabel>
              <Select
                labelId="agente-select-label"
                id="agente-select"
                defaultValue=""
                label="Agente a Utilizar"
              >
                {agents.map((agent) => (
                  <MenuItem key={agent.id} value={agent.id}>
                    {agent.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1, pt:2, borderTop: '1px solid #e0e0e0' }}>
          <Button onClick={handleClose} sx={{ color: 'grey.700' }}>
            Cancelar
          </Button>
          <Button 
            variant="contained" 
            sx={{
              background: 'linear-gradient(to right, #5EEEC1, #02A8E1)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(to right, #4DDDB0, #0297D0)',
              }
            }}
          >
            Programar Llamada
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LlamadaIndividualModal;
