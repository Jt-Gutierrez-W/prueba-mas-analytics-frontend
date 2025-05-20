import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ChartCard from './ChartCard';

// Brand colors
const COLORS = {
  primary: '#5F4EFC',
  info: '#02A8E1',
  textSecondary: '#777777',
};

const dailyCallsData = [
  { day: 'Lun', calls: 200, answeredCalls: 150 }, 
  { day: 'Mar', calls: 250, answeredCalls: 180 }, 
  { day: 'Mié', calls: 180, answeredCalls: 120 }, 
  { day: 'Jue', calls: 300, answeredCalls: 250 }, 
  { day: 'Vie', calls: 220, answeredCalls: 170 }, 
  { day: 'Sáb', calls: 100, answeredCalls: 60 }, 
  { day: 'Dom', calls: 50, answeredCalls: 30 },  
].map(d => ({ ...d, unansweredCalls: d.calls - d.answeredCalls }));

const DailyCallsChart = () => (
  <ChartCard title="Llamadas por Día (Realizadas vs. Contestadas)">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={dailyCallsData} margin={{ top: 5, right: 20, left: -20, bottom: 25 }}>
        <XAxis dataKey="day" stroke={COLORS.textSecondary} />
        <YAxis stroke={COLORS.textSecondary} />
        <Tooltip />
        <Bar dataKey="answeredCalls" stackId="a" fill={COLORS.primary} name="Contestadas" radius={[0, 0, 4, 4]} />
        <Bar dataKey="unansweredCalls" stackId="a" fill={COLORS.info} name="No Contestadas" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default DailyCallsChart;
