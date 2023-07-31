import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import * as T from '../constants';

type Scenes = T.MenuEnum | T.SceneEnum;

interface Router {
  scene: Scenes;

  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuReferral: () => void;
  switchToMenuSettings: () => void;

  switchToSceneGreeting: () => void;
  switchToSceneFeedback: () => void;
  switchToSceneRules: () => void;
  switchToSceneSettingsLanguage: () => void;
  switchToSceneSettingsReminders: () => void;
}

const RouterContext = createContext({} as Router);

type RouterProviderProps = {
  children: React.ReactNode;
};

const Router = ({ children }: RouterProviderProps) => {
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
    <RouterContext.Provider value={data}>
      {children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

export { Router, useRouter };
