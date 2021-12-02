import { atom, selector } from 'recoil';
import { currentUserState } from './auth';

export const allFilesState = atom({
  default: [],
  key: 'allFiles',
});

export const currentUserFilesState = selector({
  get: ({ get }) =>
    get(allFilesState).filter(
      f => f.owner.username === get(currentUserState)?.username,
    ),
  key: 'userFiles',
});
