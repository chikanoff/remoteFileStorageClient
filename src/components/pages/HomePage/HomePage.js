import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import { DataGrid } from '@mui/x-data-grid';
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
    const res = await filesResource.allPublic();
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

const HomePage = () => {
  return (
    <Page pageTitle="Home">
      <MainLayout>
        <Box>Home page</Box>
        <DataTable />
      </MainLayout>
    </Page>
  );
};

export default HomePage;
