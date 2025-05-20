import React from 'react';
import CallLogTable from './components/CallLogTable'; 

const MonitoreoLlamadas = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4 text-company-primary">Monitoreo de Llamadas</h1> 
      <CallLogTable /> 
    </div>
  );
};

export default MonitoreoLlamadas;
