import React from 'react';
import { RecoilRoot } from 'recoil';
import { Box, CssBaseline } from '@mui/material';
import MainRouter from './MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

function App() {
  const theme = createTheme();

  return (
    <RecoilRoot>
      <React.Suspense fallback={'loading...'}>
        <ThemeProvider theme={theme}>
          <Box className="App">
            <CssBaseline />
            <MainRouter />
          </Box>
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
