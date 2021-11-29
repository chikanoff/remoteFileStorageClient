import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import authResource from '../helpers/api/auth';
import ProtectedRoute from '../components/common/ProtectedRoute';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
import UserPage from './pages/UserPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SingInPage';
import UploadPage from './pages/UploadPage';
import { io } from 'socket.io-client';
import { saveAs } from 'file-saver';
import useLogout from '../hooks/useLogout';

const socket = io.connect('/');
const MainRouter = () => {
  // const logout = useLogout();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={['/signin', '/login']}>
            <SignInPage />
          </Route>
          <Route path={['/signup', '/register']}>
            <SignUpPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <ProtectedRoute path="/userFiles">
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute path="/allFiles">
            <PublicPage />
          </ProtectedRoute>
          <ProtectedRoute>
            <UploadPage />
          </ProtectedRoute>
          <Route path="/">
            <button onClick={() => console.log(socket)}>socket</button>
            <button
              onClick={useCallback(
                () => authResource.login('amostyn3', 'R0tkwSvmA'),
                [],
              )}
            >
              login
            </button>
            <HomeBtn />
            <button onClick={authResource.testAuth}>testAuth</button>

            <button
              onClick={() => {
                socket.emit('get_file', { data: 12 });
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
              }}
            >
              download file
            </button>
            <button
              onClick={() => {
                socket.emit('get_file', { data: 12 });
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
              }}
            >
              upload file
            </button>
            <button
              onClick={() => {
                socket.emit('message', { text: 'message' });
              }}
            >
              message
            </button>
            <button onClick={useLogout()}>logout</button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const HomeBtn = () => {
  const history = useHistory();

  return <button onClick={() => history.push('/home')}>go home</button>;
};

export default MainRouter;
