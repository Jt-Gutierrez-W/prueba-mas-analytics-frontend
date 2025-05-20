import React from 'react';
import { Paper, Typography } from '@mui/material';

const COLORS = {
  textPrimary: '#333333',
  paper: '#FFFFFF',
};

const ChartCard = ({ title, children }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      borderRadius: '12px',
      backgroundColor: COLORS.paper,
      height: '350px',
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: COLORS.textPrimary }}>
      {title}
    </Typography>
    {children}
  </Paper>
);

export default ChartCard;
