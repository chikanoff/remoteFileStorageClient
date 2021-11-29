import React, { useState } from 'react';
import { Box } from '@mui/system';
import MainLayout from '../../common/MainLayout/MainLayout';
import Page from '../../common/Page';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const UploadPage = () => {
  const [file, setFile] = useState('');

  return (
    <Page pageTitle="UploadPage">
      <MainLayout>
        <Box>
          <label htmlFor="contained-button-file">
            <Input
              accept="*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={e => {
                setFile(e.target.files[0]);
                console.log(file);
              }}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
      </MainLayout>
    </Page>
  );
};

export default UploadPage;
