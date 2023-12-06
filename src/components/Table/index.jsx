import * as React from 'react';
import styles from './styles.module.scss'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person'
import { DataGrid } from '@mui/x-data-grid';

const AvatarCell = () => (
  <Avatar>
    <PersonIcon />
  </Avatar>
);

const columns = [
  { field: 'avatar', headerName: '', width: 1, renderCell: AvatarCell },
  { field: 'name', headerName: 'Name', width: 230 },
  { field: 'company', headerName: 'Company', width: 230 },
  { field: 'role', headerName: 'Role', width: 230 },
  { field: 'verified', headerName: 'Verified', width: 230 },
  { field: 'status', headerName: 'Status', width: 230 },
];


const rows = [
  { 
    id: 1, 
    avatar: <AvatarCell />,
    name:' Adrienne Morar', 
    company: 'Runolfsson LLC', 
    role: 'Backend Developer', 
    verified: 'No', 
    status: 'Active' 
},
  { 
    id: 2, 
    avatar: <AvatarCell />,
    name: 'Becky Ernser', 
    company: 'Fadel-Torp', 
    role: 'Leader', 
    verified: 'No', 
    status: 'Active' 
},
  { 
    id: 3, 
    avatar: <AvatarCell />,
    name: 'Colin Osinski', 
    company: 'Spencer, Towne and Bogan', 
    role: 'Ul Designer', 
    verified: 'Yes', 
    status: 'Banned' 
},
  { 
    id: 4, 
    avatar: <AvatarCell />,
    name: 'Dan Lindgren', 
    company: 'Cummerata-Casper', 
    role: 'Full Stack Designer', 
    verified: 'Yes', 
    status: 'Active' 
},
  { 
    id: 5, 
    avatar: <AvatarCell />,
    name: 'Dennis O`Reilly', 
    company: 'Auer, Watsica and Roberts', 
    role: 'Ul/UX Designer', 
    verified: 'Yes', 
    status: 'Active'
},
   { 
    id: 6, 
    avatar: <AvatarCell />,
    name: 'Dennis Lindgren', 
    company: 'Auer, Roberts', 
    role: 'Ul Designer', 
    verified: 'No', 
    status: 'Active' 
},
   { 
    id: 7, 
    avatar: <AvatarCell />,
    name: 'Dennis Reilly', 
    company: 'Auer', 
    role: 'Ul/UX Designer', 
    verified: 'Yes', 
    status: 'Banned' 
},
  
];


export default function DataTable() {
  return (
    <div className={styles['container']}>
        <div className={styles['data-table']}>
      <DataGrid
        className={styles['grid-table']}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
  );
}