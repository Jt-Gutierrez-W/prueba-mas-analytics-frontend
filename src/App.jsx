import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; // Adjust the import path as necessary
import EjecutarLlamadas from './pages/EjecutarLlamadas';
import MonitoreoLlamadas from './pages/MonitoreoLlamadas';
import CrearAgente from './pages/CrearAgente';
import Dashboard from './pages/Dashboard';
import GestionCuenta from './pages/GestionCuenta';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/ejecutar-llamadas" element={<EjecutarLlamadas />} />
          <Route path="/monitoreo-llamadas" element={<MonitoreoLlamadas />} />
          <Route path="/crear-agente" element={<CrearAgente />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gestion-cuenta" element={<GestionCuenta />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
