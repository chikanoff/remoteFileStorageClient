import { atom, selector } from 'recoil';

export const authState = atom({
  default: {
    isAuthenticated: false,
    user: null,
  },
  key: 'authState',
});

export const isAuthenticatedState = selector({
  get: ({ get }) => get(authState).isAuthenticated,
  set: ({ set }, newValue) =>
    set(authState, {
      ...authState,
      isAuthenticated: newValue,
      user: newValue ? authState.user : null,
    }),
});
