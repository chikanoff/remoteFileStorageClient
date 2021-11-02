import { atom } from 'recoil';

export const authState = atom({
  default: {
    isAuthenticated: false,
    user: null,
  },
  key: 'authState',
});
