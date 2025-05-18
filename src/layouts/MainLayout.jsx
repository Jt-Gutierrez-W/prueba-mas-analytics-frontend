// src/layouts/MainLayout.jsx
import React from 'react';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="fixed h-full w-16 hover:w-64 bg-red-500 text-white p-4 transition-all duration-300 ease-in-out z-20 overflow-x-hidden group">
        <h2 className="text-xl font-semibold mb-4 whitespace-nowrap">SN</h2>
      </div>
      <div className="ml-16 flex flex-col min-h-screen">
        <main className="flex-1 p-6 bg-yellow-300 overflow-y-auto">
          <h3 className="text-lg font-medium mb-4">Main Content Area</h3>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
