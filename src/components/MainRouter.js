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
import UserPage from './pages/UserPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SingInPage';

// const socket = io.connect('/');
const socket = {};
const MainRouter = () => {
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
          <ProtectedRoute path="/home">
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path="/userFiles">
            <UserPage />
          </ProtectedRoute>
          <ProtectedRoute path="/allFiles">
            <HomePage />
          </ProtectedRoute>
          <Route path="/">
            <button onClick={() => console.log(socket)}>socket</button>
            <button
              onClick={useCallback(
                () => authResource.login('user', 'password'),
                [],
              )}
            >
              login
            </button>
            <HomeBtn />
            <button onClick={authResource.testAuth}>testAuth</button>
            <button onClick={() => socket.emit('message', { text: 'hello' })}>
              message
            </button>
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
