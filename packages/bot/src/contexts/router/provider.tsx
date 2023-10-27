import React, { useMemo, useState } from 'react';
import * as T from '../../constants';
import { Context } from './context';
import type { ProviderProps, Scenes } from './types';

const RouterProvider = ({ children }: ProviderProps) => {
  const [scene, setScene] = useState<Scenes>(T.SceneEnum.RESET);
  console.info('Bot scene:', scene);

  const switchToMenuMain = () => setScene(T.MenuEnum.MAIN);
  const switchToMenuAdmin = () => setScene(T.MenuEnum.ADMIN);
  const switchToMenuReferral = () => setScene(T.MenuEnum.REFERRAL);
  const switchToMenuSettings = () => setScene(T.MenuEnum.SETTINGS);

  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneFeedback = () => setScene(T.SceneEnum.FEEDBACK);
  const switchToSceneRules = () => setScene(T.SceneEnum.RULES);
  const switchToSceneSettingsLanguage = () => setScene(T.SceneEnum.SETTINGS_LANGUAGE);
  const switchToSceneSettingsReminders = () => setScene(T.SceneEnum.SETTINGS_REMINDERS);

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuReferral,
    switchToMenuSettings,
    switchToSceneGreeting,

    switchToSceneFeedback,
    switchToSceneRules,
    switchToSceneSettingsLanguage,
    switchToSceneSettingsReminders,
  }), [scene]);

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
};

export { RouterProvider };
