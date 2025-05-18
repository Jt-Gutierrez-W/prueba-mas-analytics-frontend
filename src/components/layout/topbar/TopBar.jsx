
import React from 'react';

const TopBar = () => {
  return (
    <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-gray-700">Panel de Administración</div>
      <div>
        {/* Aquí podrías agregar información del usuario o un menú desplegable */}
        <span className="text-gray-600">Usuario: Admin</span>
      </div>
    </header>
  );
};

export default TopBar;
