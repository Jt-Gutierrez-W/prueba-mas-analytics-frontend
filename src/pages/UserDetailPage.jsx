// src/pages/UserDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Detalles del Usuario: {id}</h1>
      <p className="text-gray-600">Esta página mostrará los detalles del usuario con ID {id}. También permitirá la edición y eliminación.</p>
      {/* Aquí iría la lógica para GET /users/{id}, PUT /users/{id}, DELETE /users/{id} */}
      <div className="mt-4 p-4 bg-white shadow rounded-lg space-y-2">
        <p><span className="font-medium">ID:</span> {id}</p>
        <p><span className="font-medium">Nombre:</span> Nombre del Usuario {id}</p>
        <p><span className="font-medium">Email:</span> email{id}@example.com</p>
        <div className="mt-4 space-x-2">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Editar</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
