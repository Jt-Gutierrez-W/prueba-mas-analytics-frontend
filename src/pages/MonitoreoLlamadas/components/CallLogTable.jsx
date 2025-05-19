import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { callsData } from './callData';

const theme = createTheme({

  palette: {
    primary: {
      main: '#5F4EFC', 
    },
    secondary: {
      main: '#5EEEC1', 
    },
    info: {
      main: '#02A8E1', 
    },
  },
});

const getStatusChipProps = (status) => {
  switch (status) {
    case 'En curso':
      return { label: status, sx: { backgroundColor: '#5F4EFC', color: 'white' } };
    case 'Planificada':
      return { label: status, sx: { backgroundColor: '#5EEEC1', color: 'black' } };
    case 'Finalizada':
      return { label: status, sx: { backgroundColor: '#02A8E1', color: 'white' } };
    default:
      return { label: status, sx: { backgroundColor: 'gray', color: 'white' } };
  }
};

const columns = [
  { field: 'time', headerName: 'Hora', width: 130 },
  { field: 'number', headerName: 'Número', width: 150 },
  {
    field: 'status',
    headerName: 'Estado',
    width: 150,
    renderCell: (params) => (
      <Chip {...getStatusChipProps(params.value)} />
    ),
  },
  { field: 'agent', headerName: 'Agente', width: 150 },
  { field: 'duration', headerName: 'Duración', width: 130 },
  { field: 'cost', headerName: 'Costo', width: 130 },
  { field: 'note', headerName: 'Nota', width: 250, editable: true }, // Added Nota column
];

const CallLogTable = () => {
  const sortedCalls = [...callsData].sort((a, b) => new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time));

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 650, width: '100%' }} className="bg-white shadow-md rounded-lg">
        <DataGrid
          rows={sortedCalls}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </ThemeProvider>
  );
};

export default CallLogTable;
