import React, { useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { login, testAuth } from '../helpers/api/auth';
import axios from 'axios';
import io from 'socket.io-client';
import SignInPage from './pages/SingInPage';
import SignUpPage from './pages/SignUpPage';

const socket = io.connect('/');
// const socket = {};
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/'>
            <button onClick={() => console.log(socket)}>socket</button>
            <button onClick={useCallback(() => login('user', 'password'), [])}>
              login
            </button>
            <button onClick={testAuth}>testAuth</button>
            <button onClick={() => socket.emit('message', { text: 'hello' })}>
              message
            </button>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
