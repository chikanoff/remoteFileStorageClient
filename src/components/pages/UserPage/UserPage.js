import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import filesResource from '../../../helpers/api/files';

const fileColumns = [
  { field: 'name', headerName: 'File Name', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
  { field: 'mode', headerName: 'Mode', width: 170 },
];

function DataTable() {
  const [userFileRows, setUserFileRows] = useState([]);
  useEffect(async () => {
    const res = await filesResource.fromUser();
    console.log(res);
    setUserFileRows(res);
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={userFileRows}
        columns={fileColumns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

const UserPage = () => {
  return (
    <Page pageTitle="User">
      <MainLayout>
        <Box>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Box>
        <Box height="100%">
          <DataTable />
        </Box>
      </MainLayout>
    </Page>
  );
};

export default UserPage;
