import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/system';
import ProtectedRoute from '../components/common/ProtectedRoute';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
import UserPage from './pages/UserPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SingInPage';
import UploadPage from './pages/UploadPage';
import AdminRoute from './common/AdminRoute';

const MainRouter = () => (
  <Router>
    <Box className="App">
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
        <AdminRoute path="/adminFiles">qweqwe</AdminRoute>
        <ProtectedRoute path="/upload">
          <UploadPage />
        </ProtectedRoute>
      </Switch>
    </Box>
  </Router>
);

export default MainRouter;
