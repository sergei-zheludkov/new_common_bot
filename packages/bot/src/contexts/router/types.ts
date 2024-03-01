import type { ReactNode } from 'react';
import * as T from '../../constants';

type Scenes = T.MenuEnum | T.SceneEnum;

type ContextState = {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuSupport: () => void;
  switchToMenuReferral: () => void;
  switchToMenuFeedback: () => void;
  switchToMenuSettings: () => void;
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneGreeting: () => void;
  switchToSceneRules: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneSettingsTimezone: () => void;
  switchToSceneSettingsReminders: () => void;
  switchToSceneFeedbackWriting: () => void;
  switchToSceneFeedbackRequests: () => void;
  switchToSceneSupportRequests: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

export type { ContextState, ProviderProps, Scenes };
