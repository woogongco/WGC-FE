import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'localStorage', // 고유한 key 값
	storage: localStorage,
});
export const myInfo = atom({
	key: 'myInfo',
	default: undefined,
	effects_UNSTABLE: [persistAtom],
});
