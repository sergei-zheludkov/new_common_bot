import React from 'react';
import { useRouter } from './contexts';

import * as Menu from './menus';
// import * as Scene from './scenes';
import * as T from './types';

export const SceneSwitcher = () => {
  const {
    scene,
    // handleMenuMain,
    handleMenuAdmin,
    handleMenuBalance,
    handleMenuReferral,
    handleMenuSettings,
    // handleMenuWallets,
    // handleMenuStatistics,

    handleSceneFeedback,
    handleSceneRules,
  } = useRouter();

  switch (scene) {
  case T.ScenesEnum.UPDATE_BOT:
    return (
      <Menu.Main
        useMain={Menu.hooks.useUpdatedMain}
        onAdmin={handleMenuAdmin}
        onBalance={handleMenuBalance}
        onReferral={handleMenuReferral}
        onSettings={handleMenuSettings}
        onFeedback={handleSceneFeedback}
        onRules={handleSceneRules}
      />
    );
  // -------------------------------------AUTHENTICATION-------------------------------------
  // case T.ScenesEnum.AUTH:
  //   return (
  //     <Scene.Authentication
  //       onSuccess={handleMenuMain}
  //       onFailed={handleSceneRegistration}
  //     />
  //   );
  // case T.ScenesEnum.REG:
  //   return (
  //     <Scene.Registration
  //       refId={refId || null}
  //       onExit={handleMenuMain}
  //     />
  //   );
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
  case T.MenusEnum.MAIN:
    return (
      <Menu.Main
        useMain={Menu.hooks.useCommonMain}
        onAdmin={handleMenuAdmin}
        onBalance={handleMenuBalance}
        onReferral={handleMenuReferral}
        onSettings={handleMenuSettings}
        onFeedback={handleSceneFeedback}
        onRules={handleSceneRules}
      />
    );

    // case T.Menu.ADMIN:
    //   return (
    //     <Provider.User>
    //       <Menu.Admin
    //         onWallets={handleMenuWallets}
    //         onStatistic={handleMenuStatistics}
    //         onBack={handleMenuMain}
    //       />
    //     </Provider.User>
    //   );

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
    // case T.Menu.BALANCE:
    //   return (
    //     <Provider.User>
    //       <Menu.Balance
    //         onInputMoney={handleSceneInputMoney}
    //         onAllPayments={handleSceneAllPayments}
    //         onBack={handleMenuMain}
    //       />
    //     </Provider.User>
    //   );
    //
    // case T.Menu.REFERRAL:
    //   return (
    //     <Provider.User>
    //       <Menu.Referral onBack={handleMenuMain} />
    //     </Provider.User>
    //   );
    //
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
