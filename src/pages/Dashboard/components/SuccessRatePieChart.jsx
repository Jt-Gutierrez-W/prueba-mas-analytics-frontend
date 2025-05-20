import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';


const COLORS = {
  primary: '#5F4EFC',
};

const pieColors = [COLORS.primary, '#E0E0E0'];

const SuccessRatePieChart = ({ successRate }) => {
  const successRateData = [
    { name: 'Éxito', value: successRate },
    { name: 'Fallo', value: 100 - successRate },
  ];

  return (
    <ChartCard title="Distribución Tasa de Éxito">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Pie
            data={successRateData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {successRateData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default SuccessRatePieChart;
