import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { Box, CssBaseline } from '@mui/material';
import MainRouter from './MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { currentUserState, isAuthenticatedState } from '../atoms/auth';

function App() {
  const theme = createTheme();
  // the worst impl of pre-fetch I've come up with
  useRecoilValue(isAuthenticatedState);
  useRecoilValue(currentUserState);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Box className="App">
          x
          <CssBaseline />
          <MainRouter />
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
