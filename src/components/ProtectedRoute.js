import { Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../atoms/auth';

const ProtectedRoute = ({ children, ...rest }) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
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
