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
  handleMenuMain: () => void;
  handleMenuAdmin: () => void;
  handleMenuBalance: () => void;
  handleMenuReferral: () => void;
  handleMenuSettings: () => void;
  handleMenuWallets: () => void;
  handleMenuStatistics: () => void;
  handleMenuLinkGenerator: () => void;
  handleMenuAffiliateStatistics: () => void;

  handleSceneGreeting: () => void;
  handleSceneFeedback: () => void;
  handleSceneRules: () => void;
  handleSceneInputMoney: () => void;
  handleSceneAllPayments: () => void;
}

const RouterContext = createContext({} as Router);

type RouterProviderProps = {
  children: React.ReactNode;
};

const Router = ({ children }: RouterProviderProps) => {
  const [scene, setScene] = useState<Scenes>(T.SceneEnum.RESET);
  console.info('Bot scene:', scene);

  const handleMenuMain = () => setScene(T.MenuEnum.MAIN);
  const handleMenuAdmin = () => setScene(T.MenuEnum.ADMIN);
  const handleMenuBalance = () => setScene(T.MenuEnum.BALANCE);
  const handleMenuReferral = () => setScene(T.MenuEnum.REFERRAL);
  const handleMenuSettings = () => setScene(T.MenuEnum.SETTINGS);
  const handleMenuWallets = () => setScene(T.MenuEnum.WALLETS);
  const handleMenuStatistics = () => setScene(T.MenuEnum.STATISTICS);
  const handleMenuLinkGenerator = () => setScene(T.MenuEnum.LINK_GENERATOR);
  const handleMenuAffiliateStatistics = () => setScene(T.MenuEnum.AFFILIATE_STATISTICS);

  const handleSceneGreeting = () => setScene(T.SceneEnum.GREETING);
  const handleSceneFeedback = () => setScene(T.SceneEnum.FEEDBACK);
  const handleSceneRules = () => setScene(T.SceneEnum.RULES);
  const handleSceneInputMoney = () => setScene(T.SceneEnum.INPUT_MONEY);
  const handleSceneAllPayments = () => setScene(T.SceneEnum.ALL_PAYMENTS);

  const data = useMemo(() => ({
    scene,

    handleMenuMain,
    handleMenuAdmin,
    handleMenuBalance,
    handleMenuReferral,
    handleMenuSettings,
    handleMenuWallets,
    handleMenuStatistics,
    handleMenuLinkGenerator,
    handleMenuAffiliateStatistics,

    handleSceneGreeting,
    handleSceneFeedback,
    handleSceneRules,
    handleSceneInputMoney,
    handleSceneAllPayments,
  }), [scene]);

  return (
    <RouterContext.Provider value={data}>
      {children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

export { Router, useRouter };
