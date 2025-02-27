import { useCallback, useEffect } from 'react';
import { AppDispatch, RootState, store } from './store';
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from './local-storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { deepMerge } from '../deep-merge';
import { initialResumeState, setResume } from './resumeSlice';
import { Resume } from './types';
import { Settings, initialSettings, setSettings } from './settingsSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSaveStateToLocalStorageOnChange = (): VoidFunction => {
  const unsubscribe = useCallback(() => {
    return store.subscribe(() => {
      saveStateToLocalStorage(store.getState());
    });
  }, []);

  useEffect(() => {
    return unsubscribe();
  }, [unsubscribe]);

  return unsubscribe;
};

export const useSetInitialStore = (): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const state = loadStateFromLocalStorage();
    if (!state) return;
    if (state.resume) {
      const mergedResumeState = deepMerge(
        initialResumeState,
        state.resume
      ) as Resume;
      dispatch(setResume(mergedResumeState));
    }
    if (state.settings) {
      const mergedSettingsState = deepMerge(
        initialSettings,
        state.settings
      ) as Settings;
      dispatch(setSettings(mergedSettingsState));
    }
  }, [dispatch]);
};
