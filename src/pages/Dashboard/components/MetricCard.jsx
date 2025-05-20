import React from 'react';
import { Paper, Typography, Avatar, Icon } from '@mui/material';


const COLORS = {
  primary: '#5F4EFC',
  secondary: '#5EEEC1',
  info: '#02A8E1',
  textPrimary: '#333333',
  textSecondary: '#777777',
  paper: '#FFFFFF',
};

const MetricCard = ({ title, value, icon, color, unit = '' }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px',
      backgroundColor: COLORS.paper,
      height: '100%', 
    }}
  >
    <Avatar sx={{ bgcolor: color, width: 56, height: 56, mb: 2 }}>
      <Icon component={icon} sx={{ color: 'white' }} />
    </Avatar>
    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: COLORS.textPrimary }}>
      {value}{unit}
    </Typography>
    <Typography variant="subtitle1" sx={{ color: COLORS.textSecondary }}>
      {title}
    </Typography>
  </Paper>
);

export default MetricCard;
