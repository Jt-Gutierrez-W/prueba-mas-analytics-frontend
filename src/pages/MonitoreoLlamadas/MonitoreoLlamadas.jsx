import React from 'react';
import CallLogTable from './components/CallLogTable'; // Import the new table component

const MonitoreoLlamadas = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Monitoreo de Llamadas</h1>
      <CallLogTable /> 
    </div>
  );
};

export default MonitoreoLlamadas;
