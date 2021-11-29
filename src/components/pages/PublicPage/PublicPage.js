import React, { useCallback } from 'react';
import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import { DataGrid } from '@mui/x-data-grid';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import filesResource from '../../../helpers/api/files';
import { io } from 'socket.io-client';
import { saveAs } from 'file-saver';

const fileColumns = [
  { field: 'name', headerName: 'File Name', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
  { field: 'mode', headerName: 'Mode', width: 170 },
  { field: 'owner', headerName: 'File Owner', width: 230 },
];

const socket = io.connect('/');

const saveFiles = id => {
  socket.emit('get_file', { data: id });
  socket.on('your-file', function (data) {
    const buf = data['data'];
    const name = data['name'];
    const ext = data['ext'];
    if (ext == '.jpg' || ext == '.jpeg') {
      saveAs(
        new File([buf], name + ext, {
          type: 'image/jpeg',
        }),
      );
    } else {
      saveAs(
        new File([buf], name + ext, {
          type: 'text/plain;charset=utf-8',
        }),
      );
    }
  });
};

const PublicPage = () => {
  const [selectedRows, setSelctedRows] = useState([]);
  const [fileRows, setFileRows] = useState([]);

  useEffect(async () => {
    const res = await filesResource.allPublic();
    setFileRows(res.map(i => ({ ...i, owner: i.owner.username })));
  }, []);

  const downloadSelectedFiles = useCallback(() => {
    Promise.all(selectedRows.map(i => saveFiles(i)));
    setSelctedRows([]);
  }, [selectedRows, setSelctedRows]);

  return (
    <Page pageTitle="PublicPage">
      <MainLayout>
        <Box>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={downloadSelectedFiles}
          >
            Download
          </Button>
        </Box>
        <Box height="100%">
          <DataGrid
            rows={fileRows}
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

export default PublicPage;
