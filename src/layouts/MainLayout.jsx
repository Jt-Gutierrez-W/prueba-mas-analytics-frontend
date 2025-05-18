// src/layouts/MainLayout.jsx
import React from 'react';
import SideNav from '../components/layout/sidenav/SideNav';
import CollapsedSideNav from '../components/layout/sidenav/CollapsedSideNav'; // Import the new component

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Container for both SideNav versions */}
      <div className="fixed h-full w-16 hover:w-64 bg-[#13133A] text-white transition-all duration-300 ease-in-out z-20 overflow-x-hidden group">
        {/* Collapsed version - shown by default, hidden when group is hovered */}
        <div className="group-hover:hidden">
          <CollapsedSideNav />
        </div>
        {/* Expanded version - hidden by default, shown when group is hovered */}
        <div className="hidden group-hover:block">
          <SideNav />
        </div>
      </div>
      <div className="ml-16 group-hover:ml-64 flex flex-col min-h-screen transition-all duration-300 ease-in-out">
        <main className="flex-1 p-4 bg-yellow-300 overflow-y-auto">
          <h3 className="text-lg font-medium mb-4">Main Content Area</h3>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
