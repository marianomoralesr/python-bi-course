import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserSettings } from '../types';

interface SettingsState extends UserSettings {
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: UserSettings = {
  theme: 'dark',
  fontSize: 'medium',
  codeEditorTheme: 'vs-dark',
  showLineNumbers: true,
  autoSave: true,
  quizMode: 'one-at-time',
  showImmediateFeedback: true,
  // Reading mode defaults
  readingModeEnabled: false,
  narrationEnabled: true,
  narrationSpeed: 1,
  narrationVoiceLang: 'es-ES',
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      ...defaultSettings,

      updateSettings: (newSettings: Partial<UserSettings>) => {
        set((state) => ({
          ...state,
          ...newSettings,
        }));
      },

      resetSettings: () => {
        set(defaultSettings);
      },
    }),
    {
      name: 'python-bi-settings',
    }
  )
);
