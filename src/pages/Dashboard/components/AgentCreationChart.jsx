import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

const COLORS = {
  secondary: '#5EEEC1',
  textSecondary: '#777777',
};

const generateMonthlyAgentData = () => {
  const data = [];
  const currentDate = new Date(2025, 4, 19);
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  for (let i = 23; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    data.push({
      month: `${month} '${year}`,
      agentsCreated: Math.floor(Math.random() * 20) + 5,
    });
  }
  return data;
};
const monthlyAgentCreationData = generateMonthlyAgentData();

const AgentCreationChart = () => (
  <ChartCard title="Agentes Creados por Mes (Últimos 24 Meses)">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlyAgentCreationData} margin={{ top: 20, right: 30, left: 20, bottom: 25 }}>
        <XAxis dataKey="month" stroke={COLORS.textSecondary} />
        <YAxis stroke={COLORS.textSecondary} />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="agentsCreated" name="Agentes Creados" stroke={COLORS.secondary} strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default AgentCreationChart;
