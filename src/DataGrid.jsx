import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 15 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 12 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 15 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 18 },
  { id: 6, lastName: 'Melisandre', firstName: 'Manan', age: 15 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 14 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 16 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 15 },
];

export default function DataGridDemo() {
  return (
    <div className='dataGrid'>
    <Box className='box'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
  );
}