import React from 'react';
import { useRouter } from './contexts';
import { SceneWrapper } from './components';

import * as Menu from './menus';
import * as Scene from './scenes';
import * as T from './constants';

export const SceneSwitcher = () => {
  const { scene } = useRouter();

  switch (scene) {
    case T.SceneEnum.GREETING:
      return <Scene.Greeting />;
      // ----------------------------------------MAIN MENU---------------------------------------
      //
      // case T.Scene.RULES:
      //   return <Scene.Rules />;
      // ----------------------------------------ADMIN MENU--------------------------------------

    // ----------------------------------------SETTINGS----------------------------------------
    case T.SceneEnum.SETTINGS_LANGUAGE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsLanguage />
        </SceneWrapper>
      );

    case T.SceneEnum.SETTINGS_TIMEZONE:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsTimezone />
        </SceneWrapper>
      );

    case T.SceneEnum.SETTINGS_REMINDERS:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.SettingsReminder />
        </SceneWrapper>
      );

    // ----------------------------------------FEEDBACK----------------------------------------
    case T.SceneEnum.FEEDBACK_WRITING:
      return <Scene.FeedbackWriting />;

    case T.SceneEnum.FEEDBACK_REQUESTS:
      return (
        <SceneWrapper type="remove-keyboard">
          <Scene.FeedbackRequests />
        </SceneWrapper>
      );

    // case T.SceneEnum.SUPPORT_REQUESTS:
    //   return (
    //     <SceneWrapper type="remove-keyboard">
    //       <Scene.SupportRequests />
    //     </SceneWrapper>
    //   );
    // ----------------------------------------------------------------------------------------
    case T.MenuEnum.MAIN:
      return <Menu.Main />;

    case T.MenuEnum.ADMIN:
      return <Menu.Admin />;

    case T.MenuEnum.SUPPORT:
      return <Menu.Support />;

    case T.MenuEnum.REFERRAL:
      return <Menu.Referral />;

    case T.MenuEnum.FEEDBACK:
      return <Menu.Feedback />;

    case T.MenuEnum.SETTINGS:
      return <Menu.Settings />;

    // ----------------------------------------------------------------------------------------
    default:
      return null;
  }
};
