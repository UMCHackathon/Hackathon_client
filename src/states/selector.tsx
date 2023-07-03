import { selector, DefaultValue } from 'recoil';
import { commentState } from './commentState';
import { CommentProps } from '../types/comment';

export const addCommentItem = selector({
  key: 'addCommentItem',
  get: ({ get }) => get(commentState),
  set: ({ set }, newItem: CommentProps[] | DefaultValue) => {
    if (newItem instanceof DefaultValue) return;
    set(commentState, (prevComment: CommentProps[]) => [
      ...prevComment,
      ...newItem
    ]);
  }
});
