// src/pages/UserListPage.jsx
import React from 'react';

const UserListPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Usuarios</h1>
      <p className="text-gray-600">Esta página mostrará una lista de usuarios.</p>
      {/* Aquí iría la lógica para obtener y mostrar usuarios (GET /users) */}
      <div className="mt-4 p-4 bg-white shadow rounded-lg">
        <p className="text-sm text-gray-500">Contenido de ejemplo: Usuario 1, Usuario 2, ...</p>
      </div>
    </div>
  );
};

export default UserListPage;
