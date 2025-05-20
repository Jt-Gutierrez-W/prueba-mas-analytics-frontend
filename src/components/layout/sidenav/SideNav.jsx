import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MasAnalyticsLogo from '../../../assets/logo-mas-analytics-color.svg';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SideNav = () => {
  const [openGestionCuenta, setOpenGestionCuenta] = useState(false);
  const navigate = useNavigate();

  const handleGestionCuentaClick = () => {
    setOpenGestionCuenta(!openGestionCuenta);
  };

  const handleSubMenuClick = (path) => {
    navigate(path);
  };

  const menuItems = [
    { text: 'Ejecutar Llamadas', icon: <PhoneForwardedIcon />, link: 'ejecutar-llamadas' },
    { text: 'Monitoreo de llamadas', icon: <PhoneInTalkIcon />, link: 'monitoreo-llamadas' },
    { text: 'Crear Agente', icon: <PersonAddIcon />, link: 'crear-agente' },
    { text: 'Dashboard', icon: <DashboardIcon />, link: 'dashboard' },
    {
      text: 'Gestión de cuenta',
      icon: <ManageAccountsIcon />,
      onClick: handleGestionCuentaClick,
      open: openGestionCuenta,
      subItems: [
        { text: 'Iniciar sesión', icon: <LockOpenIcon />, link: '/iniciar-sesion' },
        { text: 'Cambiar contraseña', icon: <LockIcon />, link: '/cambiar-contrasena' },
        { text: 'Cerrar sesión', icon: <ExitToAppIcon />, action: () => console.log('Cerrar sesión') },
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, mb: 1 }}>
        <img src={MasAnalyticsLogo} alt="MAS Analytics Logo" style={{ height: '60px' }} />
      </Box>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItemButton
              onClick={item.onClick || (() => item.link && handleSubMenuClick(item.link))}
              sx={theme => ({
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                cursor: 'pointer',
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
              {item.subItems && (item.open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {item.subItems && (
              <Collapse in={item.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItemButton
                      key={subItem.text}
                      onClick={() => subItem.link ? handleSubMenuClick(subItem.link) : subItem.action()}
                      sx={theme => ({
                        paddingLeft: theme.spacing(4),
                        cursor: 'pointer',
                        '&:hover': {
                          background: 'rgba(1, 159, 218, 0.1)',
                        },
                      })}
                    >
                      <ListItemIcon
                        sx={{
                          color: '#00C5E9',
                          minWidth: '40px',
                        }}
                      >
                        {subItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SideNav;
