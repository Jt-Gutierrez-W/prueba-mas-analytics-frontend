// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import SideNav from '../components/layout/sidenav/SideNav';
import CollapsedSideNav from '../components/layout/sidenav/CollapsedSideNav'; // Import the new component

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="fixed h-full w-16 hover:w-64 bg-[#13133A] text-white transition-all duration-[400ms] ease-in-out z-20 overflow-x-hidden group">
        <div className="group-hover:hidden">
          <CollapsedSideNav />
        </div>
        <div className="hidden group-hover:block">
          <SideNav />
        </div>
      </div>
      <div className="ml-16 group-hover:ml-64 flex flex-col min-h-screen transition-all duration-[400ms] ease-in-out">
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
