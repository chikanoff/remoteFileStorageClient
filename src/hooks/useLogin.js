import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router';
import { isAuthenticatedState, currentUserState } from '../atoms/auth';
import authResource from '../helpers/api/auth';

const useLogin = () => {
  const history = useHistory();
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const setCurrentUserState = useSetRecoilState(currentUserState);

  const login = useCallback(async (username, password, remember) => {
    const data = await authResource.login(username, password, remember);
    if (data) {
      setIsAuthenticated(true);
      setCurrentUserState(data);
      history.push('/userFiles');
    } else {
      setIsAuthenticated(null);
      setCurrentUserState(null);
    }
  });

  return login;
};

export default useLogin;
