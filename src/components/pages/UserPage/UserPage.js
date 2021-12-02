import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { useEffect, useState } from 'react';
import filesResource from '../../../helpers/api/files';
import { socketState } from '../../../atoms/socket';

const fileColumns = [
  { field: 'name', headerName: 'File Name', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
  { field: 'mode', headerName: 'Mode', width: 170 },
];

const UserPage = () => {
  const [selectedRows, setSelctedRows] = useState([]);
  const [userFileRows, setUserFileRows] = useState([]);
  const socket = useRecoilValue(socketState);

  useEffect(async () => {
    const res = await filesResource.fromUser();
    setUserFileRows(res);
  }, []);

  const deleteSelectedFiles = useCallback(() => {
    filesResource.deleteFiles(selectedRows);
    setUserFileRows(
      userFileRows.filter(({ id }) => !selectedRows.includes(id)),
    );
    setSelctedRows([]);
  }, [selectedRows, setUserFileRows, setSelctedRows]);

  // eslint-disable-next-line no-unused-vars
  const downloadFiles = useCallback(() => {
    console.log('#qw2', socket);
    selectedRows.forEach(id => socket.emit('get_file', { data: id }));
  }, [selectedRows, setSelctedRows]);

  return (
    <Page pageTitle="User">
      <MainLayout>
        <Box>
          <Box>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={deleteSelectedFiles}
            >
              Delete
            </Button>
          </Box>
          <Box>
            <Button
              margin-left="15px"
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={downloadFiles}
            >
              Download
            </Button>
          </Box>
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
