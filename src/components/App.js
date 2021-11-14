import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { Box, CssBaseline } from '@mui/material';
import MainRouter from './MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { isAuthenticatedState } from '../atoms/auth';

function App() {
  const theme = createTheme();
  // the worst impl of pre-fetch I've come up with
  // eslint-disable-next-line no-unused-vars
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

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
