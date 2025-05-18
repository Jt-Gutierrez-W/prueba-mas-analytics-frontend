// src/components/layout/sidenav/CollapsedSideNav.jsx
import React from 'react';
import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import CollapsedLogo from '../../../assets/logo.png';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const CollapsedSideNav = () => {
  const icons = [
    <PhoneForwardedIcon />,
    <PhoneInTalkIcon />,
    <PersonAddIcon />,
    <DashboardIcon />,
    <ManageAccountsIcon />,
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', paddingTop: 2 /* Add some top padding */ }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, height: '40px' }}>
        <img 
          src={CollapsedLogo} 
          alt="MAS Analytics Collapsed Logo" 
          style={{ maxHeight: '28px', maxWidth: '28px', objectFit: 'contain' }} 
        />
      </Box>
      <List sx={{ width: '100%' }}>
        {icons.map((icon, index) => (
          <ListItem
            button
            key={`collapsed-item-${index}`}
            sx={{
              justifyContent: 'center',
              paddingLeft: '4px', // Minimal padding
              paddingRight: '4px',
              marginBottom: 1, // Add some space between icons
            }}
          >
            <ListItemIcon sx={{ color: '#00C5E9', minWidth: 'auto', display: 'flex', justifyContent: 'center' }}>
              {icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CollapsedSideNav;
