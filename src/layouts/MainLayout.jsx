// src/layouts/MainLayout.jsx
import React from 'react';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100"> {/* Main flex container, full screen height */}
      {/* SideNav Wrapper */}
      <div className="w-64 bg-red-500 text-white p-4"> {/* Tailwind: Sidenav styling */}
        <h2 className="text-xl font-semibold mb-4">SideNav</h2>
        {/* SideNav component will go here */}
      </div>

      {/* Content Area Flex Column */}
      <div className="flex-1 flex flex-col overflow-hidden"> {/* flex-1 to take remaining space, overflow-hidden for safety */}
        {/* TopBar Wrapper */}
        <div className="bg-green-500 text-white p-4 shadow-md"> {/* Tailwind: Topbar styling */}
          <h2 className="text-xl font-semibold">TopBar</h2>
          {/* TopBar component will go here */}
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-yellow-300 overflow-y-auto"> {/* Tailwind: Content area styling */}
          <h3 className="text-lg font-medium mb-4">Main Content Area</h3>
          {/* Outlet component will render content here */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
