import React, { useMemo, useState } from 'react';
import { useBotContext } from '@urban-bot/core';
import * as T from '../../constants';
import { Context } from './context';
import type { ProviderProps, Scenes } from './types';

const RouterProvider = ({ children }: ProviderProps) => {
  const { chat } = useBotContext();
  const [scene, setScene] = useState<Scenes>(T.SceneEnum.RESET);
  console.info(chat.id, 'Bot scene:', scene);

  const switchToMenuMain = () => setScene(T.MenuEnum.MAIN);
  const switchToMenuAdmin = () => setScene(T.MenuEnum.ADMIN);
  const switchToMenuSupport = () => setScene(T.MenuEnum.SUPPORT);
  const switchToMenuReferral = () => setScene(T.MenuEnum.REFERRAL);
  const switchToMenuFeedback = () => setScene(T.MenuEnum.FEEDBACK);
  const switchToMenuSettings = () => setScene(T.MenuEnum.SETTINGS);
  // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneRules = () => setScene(T.SceneEnum.RULES);
  const switchToSceneSettingsLanguage = () => setScene(T.SceneEnum.SETTINGS_LANGUAGE);
  const switchToSceneSettingsTimezone = () => setScene(T.SceneEnum.SETTINGS_TIMEZONE);
  const switchToSceneSettingsReminders = () => setScene(T.SceneEnum.SETTINGS_REMINDERS);
  const switchToSceneFeedbackWriting = () => setScene(T.SceneEnum.FEEDBACK_WRITING);
  const switchToSceneFeedbackRequests = () => setScene(T.SceneEnum.FEEDBACK_REQUESTS);
  const switchToSceneSupportRequests = () => setScene(T.SceneEnum.SUPPORT_REQUESTS);

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuSupport,
    switchToMenuReferral,
    switchToMenuFeedback,
    switchToMenuSettings,
    // -- -- -- -- -- -- -- -- --
    switchToSceneGreeting,
    switchToSceneRules,
    switchToSceneSettingsLanguage,
    switchToSceneSettingsTimezone,
    switchToSceneSettingsReminders,
    switchToSceneFeedbackWriting,
    switchToSceneFeedbackRequests,
    switchToSceneSupportRequests,
  }), [scene]);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { RouterProvider };
