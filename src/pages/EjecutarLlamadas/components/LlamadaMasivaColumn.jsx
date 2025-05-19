import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DragAndDropArea from './DragAndDropArea';

const LlamadaMasivaColumn = ({ selectedFile, isDraggingOver, fileInputRef, handleFileChange, handleDragOver, handleDragLeave, handleDrop }) => {
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
        Llamada Masiva
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', textAlign: 'justify', mt:2 }}>
        Ejecuta campañas de llamadas a gran escala de forma eficiente. Carga un archivo con la información de tus contactos (e.g., CSV, Excel) y define los parámetros de la campaña. Esta funcionalidad es ideal para notificaciones masivas, encuestas de satisfacción, recordatorios de citas o campañas de marketing directo, permitiéndote alcanzar a una amplia audiencia con un mensaje consistente. Por favor, consulta el PDF para detalles específicos sobre el formato del archivo y las opciones de configuración.
      </Typography>
      <DragAndDropArea 
        selectedFile={selectedFile}
        isDraggingOver={isDraggingOver}
        fileInputRef={fileInputRef}
        handleFileChange={handleFileChange}
        handleDragOver={handleDragOver}
        handleDragLeave={handleDragLeave}
        handleDrop={handleDrop}
      />
    </Box>
  );
};

export default LlamadaMasivaColumn;
