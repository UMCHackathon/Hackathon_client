import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const nickNameState = atom({
  key: 'nickNameState',
  default: '',
  effects_UNSTABLE: [persistAtom]
});
