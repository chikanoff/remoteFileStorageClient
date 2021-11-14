import { atom, selector } from 'recoil';
import { testAuth } from '../helpers/api/auth';

export const isAuthenticatedState = atom({
  default: selector({
    get: async () => await testAuth(),
    key: 'isAuthenticatedState/Default',
  }),
  key: 'isAuthenticatedState',
});
