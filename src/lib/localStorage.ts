import { MMKV } from 'react-native-mmkv';

import { LocalStorageKeys } from '@/src/utils/localStorageKeys';

export const mmkvStorage = new MMKV();

export const localStorage = {
  setItem: (key: LocalStorageKeys, value: string) => {
    mmkvStorage.set(key, value);
  },
  getItem: (key: LocalStorageKeys) => mmkvStorage.getString(key),
  removeItem: (key: LocalStorageKeys) => {
    mmkvStorage.delete(key);
  },
  clear: () => {
    mmkvStorage.clearAll();
  },
};
