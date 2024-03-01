import { UTILITIES } from '@common_bot/shared';
import * as T from '../../constants';
import type { ContextState } from './types';

const { empty } = UTILITIES;

const defaultState: ContextState = {
  scene: T.SceneEnum.RESET,

  switchToMenuMain: empty,
  switchToMenuAdmin: empty,
  switchToMenuSupport: empty,
  switchToMenuReferral: empty,
  switchToMenuFeedback: empty,
  switchToMenuSettings: empty,
  // -- -- -- -- -- -- -- -- -- -- -- -- --
  switchToSceneGreeting: empty,
  switchToSceneRules: empty,
  switchToSceneSettingsLanguage: empty,
  switchToSceneSettingsTimezone: empty,
  switchToSceneSettingsReminders: empty,
  switchToSceneFeedbackWriting: empty,
  switchToSceneFeedbackRequests: empty,
  switchToSceneSupportRequests: empty,
};

export { defaultState };
