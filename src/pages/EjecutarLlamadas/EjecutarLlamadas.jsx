import React, { useState, useRef } from 'react';
import Header from './components/Header';
import LlamadaIndividualColumn from './components/LlamadaIndividualColumn';
import LlamadaMasivaColumn from './components/LlamadaMasivaColumn';
import LlamadaIndividualModal from './components/LlamadaIndividualModal';

const EjecutarLlamadas = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const processFile = (file) => {
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileChange = (event) => {
    processFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      processFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
  };

  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="flex flex-row flex-grow p-4 space-x-4">
        <LlamadaIndividualColumn handleOpenModal={handleOpenModal} />
        <LlamadaMasivaColumn 
          selectedFile={selectedFile}
          isDraggingOver={isDraggingOver}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
        />
      </div>
      <LlamadaIndividualModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default EjecutarLlamadas;
