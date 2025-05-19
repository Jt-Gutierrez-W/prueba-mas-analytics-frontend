import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const DragAndDropArea = ({ selectedFile, isDraggingOver, fileInputRef, handleFileChange, handleDragOver, handleDragLeave, handleDrop }) => {
  return (
    <>
      <input
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        style={{ display: 'none' }}
        id="upload-button-file-masiva"
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
      />
      <Box sx={{
        background: 'linear-gradient(to right, #5EEEC1, #02A8E1)',
        padding: '2px', 
        borderRadius: '8px', 
        mt: 'auto', 
        boxShadow: 1 
      }}>
        <Box
          sx={{
            background: 'background.paper',
            padding: 3, 
            borderRadius: '7px', 
            border: `2px dashed ${isDraggingOver ? '#02A8E1' : 'grey.400'}`,
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease-in-out',
            '&:hover': {
              borderColor: '#02A8E1' 
            }
          }}
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadFileIcon sx={{ fontSize: 48, color: isDraggingOver ? '#02A8E1' : 'grey.600', mb: 1, transition: 'color 0.2s ease-in-out' }} />
          <Typography variant="h6" sx={{ color: isDraggingOver ? '#02A8E1' : 'text.primary', transition: 'color 0.2s ease-in-out', fontWeight: 'medium' }}>
            Arrastra y suelta tu archivo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            o haz clic para seleccionar (CSV, Excel)
          </Typography>
        </Box>
      </Box>
      {selectedFile && (
        <Typography variant="caption" sx={{ mt: 1, textAlign: 'center', color: 'text.secondary' }}>
          Archivo seleccionado: {selectedFile.name}
        </Typography>
      )}
    </>
  );
};

export default DragAndDropArea;
