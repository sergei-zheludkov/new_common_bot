import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import * as T from '../constants';

type Scenes = T.MenusEnum | T.ScenesEnum;

interface Router {
  scene: Scenes
  handleMenuMain: () => void;
  handleMenuAdmin: () => void;
  handleMenuBalance: () => void;
  handleMenuReferral: () => void;
  handleMenuSettings: () => void;
  handleMenuWallets: () => void;
  handleMenuStatistics: () => void;

  handleSceneGreeting: () => void;
  handleSceneFeedback: () => void;
  handleSceneRules: () => void;
}

const RouterContext = createContext({} as Router);

type RouterProviderProps = {
  children: React.ReactNode;
};

const Router = ({ children }: RouterProviderProps) => {
  const [scene, setScene] = useState<Scenes>(T.ScenesEnum.RESET);
  console.info('Bot scene:', scene);

  const handleMenuMain = () => setScene(T.MenusEnum.MAIN);
  const handleMenuAdmin = () => setScene(T.MenusEnum.ADMIN);
  const handleMenuBalance = () => setScene(T.MenusEnum.BALANCE);
  const handleMenuReferral = () => setScene(T.MenusEnum.REFERRAL);
  const handleMenuSettings = () => setScene(T.MenusEnum.SETTINGS);
  const handleMenuWallets = () => setScene(T.MenusEnum.WALLETS);
  const handleMenuStatistics = () => setScene(T.MenusEnum.STATISTICS);

  const handleSceneGreeting = () => setScene(T.ScenesEnum.GREETING);
  const handleSceneFeedback = () => setScene(T.ScenesEnum.FEEDBACK);
  const handleSceneRules = () => setScene(T.ScenesEnum.RULES);

  const data = useMemo(() => ({
    scene,

    handleMenuMain,
    handleMenuAdmin,
    handleMenuBalance,
    handleMenuReferral,
    handleMenuSettings,
    handleMenuWallets,
    handleMenuStatistics,

    handleSceneGreeting,
    handleSceneFeedback,
    handleSceneRules,
  }), [scene]);

  return (
    <RouterContext.Provider value={data}>
      {children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

export { Router, useRouter };
