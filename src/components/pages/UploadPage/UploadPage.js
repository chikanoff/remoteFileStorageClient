import React, { useState } from 'react';
import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { io } from 'socket.io-client';

const socket = io.connect('/');

const UploadPage = () => {
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);

  const uploadFile = async () => {
    await socket.emit('upload-file', {
      buf: await file.arrayBuffer(),
      name: name,
      ext: file.name.split('.')[file.name.split('.').length - 1],
      desc: desc,
      isPriv: isPrivate,
    });
  };

  return (
    <Page pageTitle="UploadPage">
      <MainLayout>
        <Box>
          <Box>
            <Button variant="contained" component="label">
              Upload File
              <input
                type="file"
                onChange={e => {
                  setFile(e.target.files[0]);
                }}
                hidden
              />
            </Button>
            <Typography></Typography>
          </Box>
          <Box>
            <Typography>File Name</Typography>
            <TextField
              onChange={e => {
                setName(e.target.value);
                console.log(name);
              }}
            />
          </Box>
          <Box>
            <Typography>Decription</Typography>
            <TextField
              onChange={e => {
                setDesc(e.target.value);
                console.log(desc);
              }}
            />
          </Box>
          <Box>
            <Typography>Is Private</Typography>
            <Checkbox
              onChange={e => {
                setIsPrivate(e.target.checked);
                console.log(isPrivate);
              }}
            />
          </Box>
          <Button
            onClick={() => {
              uploadFile();
            }}
          >
            Upload
          </Button>
        </Box>
      </MainLayout>
    </Page>
  );
};

export default UploadPage;
