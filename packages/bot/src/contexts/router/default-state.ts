import { utilities } from '@common_bot/shared';
import * as T from '../../constants';
import type { ContextState } from './types';

const { empty } = utilities;

const defaultState: ContextState = {
  scene: T.SceneEnum.RESET,

  switchToMenuMain: empty,
  switchToMenuAdmin: empty,
  switchToMenuReferral: empty,
  switchToMenuSettings: empty,
  switchToSceneGreeting: empty,
  switchToSceneFeedback: empty,
  switchToSceneRules: empty,
  switchToSceneSettingsLanguage: empty,
  switchToSceneSettingsTimezone: empty,
  switchToSceneSettingsReminders: empty,
};

export { defaultState };
