// src/pages/UserCreatePage.jsx
import React from 'react';

const UserCreatePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Crear Usuario</h1>
      <p className="text-gray-600">Esta página contendrá un formulario para crear un nuevo usuario.</p>
      {/* Aquí iría el formulario para crear un usuario (POST /users) */}
      <form className="mt-4 p-4 bg-white shadow rounded-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Guardar</button>
      </form>
    </div>
  );
};

export default UserCreatePage;
