import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import authResource from '../helpers/api/auth';
import HomePage from './pages/HomePage';
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
          {/* <ProtectedRoute path='/home'>
            <HomePage />
          </ProtectedRoute> */}
          <Route>
            <HomePage />
          </Route>
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

export default MainRouter;
