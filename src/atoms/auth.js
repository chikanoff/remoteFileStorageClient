import { atom, selector } from 'recoil';
import { testAuth, fetchCurrentUser } from '../helpers/api/auth';

export const currentUserState = atom({
  default: selector({
    get: async () => await fetchCurrentUser(),
    key: 'currentUser/Default',
  }),
  key: 'currentUser',
});

export const isAuthenticatedState = atom({
  default: selector({
    get: async () => await testAuth(),
    key: 'isAuthenticated/Default',
  }),
  key: 'isAuthenticated',
});
