import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { Box, CssBaseline } from '@mui/material';
import MainRouter from './MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { currentUserState, isAuthenticatedState } from '../atoms/auth';
import { socketState } from '../atoms/socket';
import { saveAs } from 'file-saver';
import { testAuth, fetchCurrentUser } from '../helpers/api/auth';

function App() {
  const theme = createTheme();
  const socket = useRecoilValue(socketState);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    socket.on('your-file', function (dt) {
      const { data, ext, name } = dt;
      console.log(ext);
      console.log(name);
      console.log(data);
      if (ext == '.jpg' || ext == '.jpeg') {
        saveAs(
          new File([data], name + ext, {
            type: 'image/jpeg',
          }),
        );
      } else {
        saveAs(
          new File([data], name + ext, {
            type: 'text/plain;charset=utf-8',
          }),
        );
      }
    });

    return () => socket.removeListener('your-file');
  }, []);

  useEffect(async () => {
    const [isAuthenticated, currentUser] = await Promise.all([
      testAuth(),
      fetchCurrentUser(),
    ]);

    setIsAuthenticated(isAuthenticated);
    setCurrentUser(currentUser);
  }, []);
  // the worst impl of pre-fetch I've come up with

  return (
    <RecoilRoot>
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
