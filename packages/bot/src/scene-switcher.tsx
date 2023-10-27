import React from 'react';
import { useRouter } from './contexts';
import { useCommonMainMenu } from './menus';
import { RemoveKeyboard } from './components';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;
      // ----------------------------------------MAIN MENU----------------------------------------
      // case T.Scene.FEEDBACK:
      //   return <Scene.Feedback />;
      //
      // case T.Scene.RULES:
      //   return <Scene.Rules />;
      // ----------------------------------------ADMIN MENU----------------------------------------

      // ----------------------------------------SETTINGS----------------------------------------
    case T.SceneEnum.SETTINGS_LANGUAGE:
      return (
        <RemoveKeyboard>
          <Scene.SettingsLanguage />
        </RemoveKeyboard>
      );

    case T.SceneEnum.SETTINGS_REMINDERS:
      return (
        <RemoveKeyboard>
          <Scene.SettingsReminder />
        </RemoveKeyboard>
      );
      // -----------------------------------------------------------------------------------------
    case T.MenuEnum.MAIN:
      return <Menu.Main useMain={useCommonMainMenu} />;

    case T.MenuEnum.ADMIN:
      return <Menu.Admin />;

    case T.MenuEnum.REFERRAL:
      return <Menu.Referral />;

    case T.MenuEnum.SETTINGS:
      return <Menu.Settings />;

      // -----------------------------------------------------------------------------------------

    default:
      return null;
  }
};
