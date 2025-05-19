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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', paddingTop: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1, height: '40px' }}>
        <img 
          src={CollapsedLogo} 
          alt="MAS Analytics Collapsed Logo" 
          style={{ maxHeight: '35px', maxWidth: '35px', objectFit: 'contain' }} 
        />
      </Box>
      <List sx={{ width: '100%', marginTop: '65px', padding: 0 }}>
        {icons.map((icon, index) => (
          <ListItem
            button
            key={`collapsed-item-${index}`}
            sx={{
              justifyContent: 'center',
              paddingLeft: '4px', 
              paddingRight: '4px',
              marginBottom: 1, 
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
