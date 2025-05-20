import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; 
import EjecutarLlamadas from './pages/EjecutarLlamadas/EjecutarLlamadas';
import MonitoreoLlamadas from './pages/MonitoreoLlamadas/MonitoreoLlamadas';
import CrearAgente from './pages/CrearAgente/CrearAgente';
import Dashboard from './pages/Dashboard/Dashboard';
import IniciarSesion from './pages/GestionCuenta/IniciarSesion'; // Added import
import CambiarContrasena from './pages/GestionCuenta/CambiarContrasena'; // Added import
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
          <Route path="/iniciar-sesion" element={<IniciarSesion />} /> 
          <Route path="/cambiar-contrasena" element={<CambiarContrasena />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
