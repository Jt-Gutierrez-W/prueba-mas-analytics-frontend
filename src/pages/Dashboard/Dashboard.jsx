import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import MetricCard from './components/MetricCard';
import DailyCallsChart from './components/DailyCallsChart';
import SuccessRatePieChart from './components/SuccessRatePieChart';
import ContactRatePieChart from './components/ContactRatePieChart';
import AgentCreationChart from './components/AgentCreationChart';


const COLORS = {
  primary: '#5F4EFC',
  secondary: '#5EEEC1',
  info: '#02A8E1',
  background: '#F4F6F8',
};


const metrics = {
  callsMade: 1250,
  answeredCalls: 980,
  contactRate: 75, 
  avgDuration: 180, 
  avgCallCost: 1.56, 
};


metrics.successRate = metrics.callsMade > 0 ? Math.round((metrics.answeredCalls / metrics.callsMade) * 100) : 0;

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: COLORS.background, minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold', color: COLORS.primary }}>
        Dashboard de Analíticas
      </Typography>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <MetricCard title="Llamadas Realizadas" value={metrics.callsMade} icon={PhoneIcon} color={COLORS.primary} />
        <MetricCard title="Llamadas Contestadas" value={metrics.answeredCalls} icon={PhoneCallbackIcon} color={COLORS.info} />
        <MetricCard title="Tasa de Contacto" value={metrics.contactRate} unit="%" icon={CheckCircleIcon} color={COLORS.secondary} />
        <MetricCard title="Duración Promedio" value={`${Math.floor(metrics.avgDuration / 60)}m ${metrics.avgDuration % 60}s`} icon={HourglassEmptyIcon} color={COLORS.info} />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <MetricCard title="Tasa de Éxito" value={metrics.successRate} unit="%" icon={TrendingUpIcon} color={COLORS.primary} />
        <MetricCard title="Costo Promedio por Llamada" value={metrics.avgCallCost} unit=" USD" icon={MonetizationOnIcon} color={COLORS.secondary} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SuccessRatePieChart successRate={metrics.successRate} />
        <ContactRatePieChart contactRate={metrics.contactRate} />
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8"> {/* Added mb-8 for spacing */}
        <DailyCallsChart />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-8">
        <AgentCreationChart />
      </div>

    </Box>
  );
};

export default Dashboard;
