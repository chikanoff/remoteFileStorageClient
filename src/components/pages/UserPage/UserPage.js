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
  const [fileRows, setFileRows] = useState([]);
  useEffect(async () => {
    const res = await filesResource.fromUser();
    setFileRows(res);
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={fileRows}
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
    <Page pageTitle="Home">
      <MainLayout>
        <Box>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Box>
        <Box>
          <DataTable />
        </Box>
      </MainLayout>
    </Page>
  );
};

export default UserPage;
