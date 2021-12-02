import { io } from 'socket.io-client';
import { atom } from 'recoil';

export const socketState = atom({
  key: 'socket',
  default: io.connect('/'),
});
