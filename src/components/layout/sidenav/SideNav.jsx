import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MasAnalyticsLogo from '../../../assets/logo-mas-analytics-color.svg';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const SideNav = () => {
  const menuItems = [
    { text: 'Ejecutar Llamadas', icon: <PhoneForwardedIcon /> },
    { text: 'Monitoreo de llamadas', icon: <PhoneInTalkIcon /> },
    { text: 'Crear Agente', icon: <PersonAddIcon /> },
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Gestión de cuenta', icon: <ManageAccountsIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, mb: 2 }}>
        <img src={MasAnalyticsLogo} alt="MAS Analytics Logo" style={{ height: '40px' }} />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={theme => ({
              paddingLeft: theme.spacing(2), // 16px
              paddingRight: theme.spacing(2), // 16px
            })}
          >
            <ListItemIcon
              sx={{
                color: '#00C5E9',
                minWidth: '56px', // Standard MUI width for icon + margin
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
