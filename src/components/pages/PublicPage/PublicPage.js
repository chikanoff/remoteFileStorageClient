import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import { DataGrid } from '@mui/x-data-grid';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import filesResource from '../../../helpers/api/files';
import { socketState } from '../../../atoms/socket';

const fileColumns = [
  { field: 'name', headerName: 'File Name', width: 250 },
  { field: 'description', headerName: 'Description', width: 350 },
  { field: 'mode', headerName: 'Mode', width: 170 },
  { field: 'owner', headerName: 'File Owner', width: 230 },
];

const PublicPage = () => {
  const [selectedRows, setSelctedRows] = useState([]);
  const [fileRows, setFileRows] = useState([]);
  const socket = useRecoilValue(socketState);

  useEffect(async () => {
    const res = await filesResource.allPublic();
    setFileRows(res.map(i => ({ ...i, owner: i.owner.username })));
  }, []);

  const downloadSelectedFiles = useCallback(() => {
    selectedRows.forEach(id => socket.emit('get_file', { data: id }));
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
