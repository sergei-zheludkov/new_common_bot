import React from 'react';
import { useRouter } from './contexts';
import { useCommonMainMenu } from './menus';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;
      // return <Menu.Main useMain={useUpdatedMain} />;
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
      return <Menu.Main useMain={useCommonMainMenu} />;

    case T.MenuEnum.ADMIN:
      return <Menu.Admin />;

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
      return <Menu.Balance />;

    case T.MenuEnum.REFERRAL:
      return <Menu.Referral />;

    case T.MenuEnum.SETTINGS:
      return <Menu.Settings />;

      // -----------------------------------------------------------------------------------------

    default:
      return null;
  }
};
