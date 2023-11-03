import type { ReactNode } from 'react';
import * as T from '../../constants';

type Scenes = T.MenuEnum | T.SceneEnum;

type ContextState = {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuReferral: () => void;
  switchToMenuSettings: () => void;

  switchToSceneGreeting: () => void;
  switchToSceneFeedback: () => void;
  switchToSceneRules: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneSettingsTimezone: () => void;
  switchToSceneSettingsReminders: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

export type { ContextState, ProviderProps, Scenes };
