import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; 
import MasAnalyticsLogo from '../../../assets/logo-mas-analytics-color.svg';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const SideNav = () => {
  const menuItems = [
    { text: 'Ejecutar Llamadas', icon: <PhoneForwardedIcon />, link: 'ejecutar-llamadas' },
    { text: 'Monitoreo de llamadas', icon: <PhoneInTalkIcon />, link: 'monitoreo-llamadas' },
    { text: 'Crear Agente', icon: <PersonAddIcon />, link: 'crear-agente' },
    { text: 'Dashboard', icon: <DashboardIcon />, link: 'dashboard' },
    { text: 'Gestión de cuenta', icon: <ManageAccountsIcon />, link: 'gestion-cuenta' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, mb: 1 }}>
        <img src={MasAnalyticsLogo} alt="MAS Analytics Logo" style={{ height: '60px' }} />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link} 
            to={item.link} 
            sx={theme => ({
              paddingLeft: theme.spacing(2), 
              paddingRight: theme.spacing(2), 
              '&:hover': {
                background: 'linear-gradient(to right, #019FDA, #13133A)',
                color: 'white', 
                '& .MuiListItemIcon-root': { 
                  color: 'white',
                },
              },
            })}
          >
            <ListItemIcon
              sx={{
                color: '#00C5E9',
                minWidth: '56px', 
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                whiteSpace: 'nowrap',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideNav;
