import React, { useCallback } from 'react';
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

const UserPage = () => {
  const [selectedRows, setSelctedRows] = useState([]);
  const [userFileRows, setUserFileRows] = useState([]);

  useEffect(async () => {
    const res = await filesResource.fromUser();
    console.log(res);
    setUserFileRows(res);
  }, []);

  const deleteSelectedFiles = useCallback(() => {
    // filesResource.deleteFiles(selectedRows);
    setUserFileRows(
      userFileRows.filter(({ id }) => !selectedRows.includes(id)),
    );
    setSelctedRows([]);
  }, [selectedRows, setUserFileRows, setSelctedRows]);

  return (
    <Page pageTitle="User">
      <MainLayout>
        <Box>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={deleteSelectedFiles}
          >
            Delete
          </Button>
        </Box>
        <Box height="100%">
          <DataGrid
            rows={userFileRows}
            columns={fileColumns}
            pageSize={8}
            checkboxSelection
            onSelectionModelChange={ids => setSelctedRows(ids)}
          />
        </Box>
      </MainLayout>
    </Page>
  );
};

export default UserPage;
