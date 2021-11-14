import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { Box, CssBaseline } from '@mui/material';
import MainRouter from './MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { currentUserState, isAuthenticatedState } from '../atoms/auth';
import axios from 'axios';

function App() {
  const theme = createTheme();
  // the worst impl of pre-fetch I've come up with
  useRecoilValue(isAuthenticatedState);
  useRecoilValue(currentUserState);
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

  return (
    <RecoilRoot>
      {console.log('rendering')}
      <ThemeProvider theme={theme}>
        <Box className="App">
          <CssBaseline />
          <MainRouter />
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
