import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { isAuthenticatedState, currentUserState } from '../atoms/auth';
import authResource from '../helpers/api/auth';

const useLogout = () => {
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
  const setCurrentUserState = useSetRecoilState(currentUserState);
  const logout = useCallback(async () => {
    setIsAuthenticated(null);
    setCurrentUserState(null);
    await authResource.logout();
  });

  return logout;
};

export default useLogout;
