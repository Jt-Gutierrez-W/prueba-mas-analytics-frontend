import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, mb: 1 }}>
        <img src={MasAnalyticsLogo} alt="MAS Analytics Logo" style={{ height: '60px' }} />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link} // Use Link component
            to="#" // Placeholder link, replace with actual routes
            sx={theme => ({
              paddingLeft: theme.spacing(2), // 16px
              paddingRight: theme.spacing(2), // 16px
              '&:hover': {
                background: 'linear-gradient(to right, #019FDA, #13133A)',
                color: 'white', // Ensure text is visible on gradient
                '& .MuiListItemIcon-root': { // Target ListItemIcon for hover color
                  color: 'white',
                },
              },
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
