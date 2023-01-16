import { createEvent, createStore } from 'stadux';

export const toggleMusicEvent = createEvent();

const STORAGE_KEY = 'shouldMusicOn';
export const shouldMusicOnStore = (function () {
  const isOn =
    typeof window !== 'undefined'
      ? localStorage.getItem(STORAGE_KEY) === 'true'
      : true;
  return createStore(isOn);
})();

shouldMusicOnStore.on(toggleMusicEvent, (state) => !state);

shouldMusicOnStore.watch((v) => localStorage.setItem(STORAGE_KEY, v));
