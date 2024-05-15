import { RootState } from './store';

const LOCAL_STORAGE_KEY = 'qa-octuple-resume-builder-parser-state';

export const saveStateToLocalStorage = (state: RootState): void => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringifiedState);
  } catch (e) {
    console.error('Failed to save state to local storage:', e);
  }
};

export const loadStateFromLocalStorage = (): RootState | undefined => {
  try {
    const stringifiedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stringifiedState) return undefined;
    return JSON.parse(stringifiedState);
  } catch (e) {
    console.error('Failed to load state from local storage:', e);
    return undefined;
  }
};

export const getHasUsedAppBefore = (): boolean => Boolean(loadStateFromLocalStorage());