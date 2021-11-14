import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuthenticatedState } from '../../atoms/auth';

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default ProtectedRoute;
