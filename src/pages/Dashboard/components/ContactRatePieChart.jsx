import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

const COLORS = {
  secondary: '#5EEEC1',
};

const secondaryPieColors = [COLORS.secondary, '#E0E0E0'];

const ContactRatePieChart = ({ contactRate }) => {
  const contactRateData = [
    { name: 'Contactado', value: contactRate },
    { name: 'No Contactado', value: 100 - contactRate },
  ];

  return (
    <ChartCard title="Distribución Tasa de Contacto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <Pie
            data={contactRateData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#82ca9d"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {contactRateData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={secondaryPieColors[index % secondaryPieColors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default ContactRatePieChart;
