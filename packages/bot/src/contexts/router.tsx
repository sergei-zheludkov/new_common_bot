import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import * as T from '../constants';

type Scenes = T.MenuEnum | T.SceneEnum;

interface Router {
  scene: Scenes
  switchToMenuMain: () => void;
  switchToMenuAdmin: () => void;
  switchToMenuBalance: () => void;
  switchToMenuReferral: () => void;
  switchToMenuSettings: () => void;
  switchToMenuWallets: () => void;
  switchToMenuAdminStatistics: () => void;
  switchToMenuLinkGenerator: () => void;
  switchToMenuAffiliateStatistics: () => void;

  switchToSceneGreeting: () => void;
  switchToSceneFeedback: () => void;
  switchToSceneRules: () => void;
  switchToSceneInputMoney: () => void;
  switchToSceneAllPayments: () => void;
  switchToSceneLanguage: () => void;
  switchToSceneNotifications: () => void;
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
  const switchToMenuBalance = () => setScene(T.MenuEnum.BALANCE);
  const switchToMenuReferral = () => setScene(T.MenuEnum.REFERRAL);
  const switchToMenuSettings = () => setScene(T.MenuEnum.SETTINGS);
  const switchToMenuWallets = () => setScene(T.MenuEnum.WALLETS);
  const switchToMenuAdminStatistics = () => setScene(T.MenuEnum.ADMIN_STATISTICS);
  const switchToMenuLinkGenerator = () => setScene(T.MenuEnum.LINK_GENERATOR);
  const switchToMenuAffiliateStatistics = () => setScene(T.MenuEnum.AFFILIATE_STATISTICS);

  const switchToSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const switchToSceneFeedback = () => setScene(T.SceneEnum.FEEDBACK);
  const switchToSceneRules = () => setScene(T.SceneEnum.RULES);
  const switchToSceneInputMoney = () => setScene(T.SceneEnum.INPUT_MONEY);
  const switchToSceneAllPayments = () => setScene(T.SceneEnum.ALL_PAYMENTS);
  const switchToSceneLanguage = () => setScene(T.SceneEnum.LANGUAGE);
  const switchToSceneNotifications = () => setScene(T.SceneEnum.NOTIFICATIONS);

  const data = useMemo(() => ({
    scene,

    switchToMenuMain,
    switchToMenuAdmin,
    switchToMenuBalance,
    switchToMenuReferral,
    switchToMenuSettings,
    switchToMenuWallets,
    switchToMenuAdminStatistics,
    switchToMenuLinkGenerator,
    switchToMenuAffiliateStatistics,

    switchToSceneGreeting,
    switchToSceneFeedback,
    switchToSceneRules,
    switchToSceneInputMoney,
    switchToSceneAllPayments,
    switchToSceneLanguage,
    switchToSceneNotifications,
  }), [scene]);

  return (
    <RouterContext.Provider value={data}>
      {children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

export { Router, useRouter };
