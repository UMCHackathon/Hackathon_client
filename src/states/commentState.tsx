import { atom } from 'recoil';
import { CommentProps } from '../types/comment';

export const commentState = atom<CommentProps[]>({
  key: 'missionState',
  default: [],
});