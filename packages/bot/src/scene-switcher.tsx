import React from 'react';
import { useRouter } from './contexts';
import { useCommonMainMenu } from './menus';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const {
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

    handleSceneFeedback,
    handleSceneRules,
    handleSceneInputMoney,
    handleSceneAllPayments,
  } = useRouter();

  switch (scene) {
    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;
      // return (
      //   <Menu.Main
      //     useMain={useUpdatedMain}
      //     onAdmin={handleMenuAdmin}
      //     onBalance={handleMenuBalance}
      //     onReferral={handleMenuReferral}
      //     onSettings={handleMenuSettings}
      //     onFeedback={handleSceneFeedback}
      //     onRules={handleSceneRules}
      //   />
      // );
      // ----------------------------------------MAIN MENU----------------------------------------
      // case T.Scene.INPUT_MONEY:
      //   return <Scene.InputMoney onExit={handleMenuBalance} />;
      //
      // case T.Scene.ALL_PAYMENTS:
      //   return <Scene.Payments onExit={handleMenuBalance} />;
      //
      // case T.Scene.FEEDBACK:
      //   return <Scene.Feedback onExit={handleMenuMain} />;
      //
      // case T.Scene.RULES:
      //   return <Scene.Rules onExit={handleMenuMain} />;
      // ----------------------------------------ADMIN MENU----------------------------------------
      // case T.Scene.ADD_WALLETS:
      //   return <Scene.Wallets.Add onExit={handleMenuWallets} />;
      //
      // case T.Scene.MANAGEMENT_WALLETS:
      //   return (
      //     <Provider.Wallets>
      //       <Scene.Wallets.Management onExit={handleMenuWallets} />
      //     </Provider.Wallets>
      //   );
      //
      // case T.Scene.STATISTICS:
      //   return (
      //     <Provider.Statistics>
      //       <Scene.Statistics type={statisticsType} onExit={handleMenuStatistics} />
      //     </Provider.Statistics>
      //   );
      // ----------------------------------------SETTINGS----------------------------------------
      // case T.Scene.LANGUAGE:
      //   return (
      //     <Provider.User>
      //       <Scene.Language onExit={handleMenuSettings} />
      //     </Provider.User>
      //   );
      //
      // case T.Scene.NOTIFICATIONS:
      //   return (
      //     <Provider.User>
      //       <Scene.Notifications onExit={handleMenuSettings} />
      //     </Provider.User>
      //   );
      // -----------------------------------------------------------------------------------------
    case T.MenuEnum.MAIN:
      return (
        <Menu.Main
          useMain={useCommonMainMenu}
          onAdmin={handleMenuAdmin}
          onBalance={handleMenuBalance}
          onReferral={handleMenuReferral}
          onSettings={handleMenuSettings}
          onFeedback={handleSceneFeedback}
          onRules={handleSceneRules}
        />
      );

    case T.MenuEnum.ADMIN:
      return (
        <Menu.Admin
          onWallets={handleMenuWallets}
          onStatistic={handleMenuStatistics}
          onBack={handleMenuMain}
        />
      );

      // case T.Menu.WALLETS:
      //   return (
      //     <Menu.Wallets
      //       onAdd={handleSceneAddWallets}
      //       onManagement={handleSceneManagementWallets}
      //       onBack={handleMenuAdmin}
      //     />
      //   );
      //
      // case T.Menu.STATISTICS:
      //   return (
      //     <Provider.Statistics>
      //       <Menu.Statistics
      //         onUsers={handleStatisticsUsers}
      //         onPayments={handleStatisticsPayments}
      //         onBack={handleMenuAdmin}
      //       />
      //     </Provider.Statistics>
      //   );
      //
    case T.MenuEnum.BALANCE:
      return (
        <Menu.Balance
          onInputMoney={handleSceneInputMoney}
          onAllPayments={handleSceneAllPayments}
          onBack={handleMenuMain}
        />
      );

    case T.MenuEnum.REFERRAL:
      return (
        <Menu.Referral
          onLinkGenerator={handleMenuLinkGenerator}
          onStatistic={handleMenuAffiliateStatistics}
          onBack={handleMenuMain}
        />
      );

      // case T.Menu.SETTINGS:
      //   return (
      //     <Menu.Settings
      //       onLanguage={handleSceneLanguage}
      //       onNotifications={handleSceneNotifications}
      //       onBack={handleMenuMain}
      //     />
      //   );

      // -----------------------------------------------------------------------------------------

    default:
      return null;
  }
};
