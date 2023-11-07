import { BotLanguageEnum } from '@common_bot/shared';

enum SceneEnum {
  GREETING = 'scene_greeting',
  FEEDBACK = 'scene_feedback',
  RULES = 'scene_rules',

  SETTINGS_LANGUAGE = 'scene_settings_language',
  SETTINGS_TIMEZONE = 'scene_settings_timezone',
  SETTINGS_REMINDERS = 'scene_settings_reminders',

  RESET = 'scene_reset',
}

enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  REFERRAL = 'referral_menu',
  SETTINGS = 'settings_menu',
}

const LANGUAGES = ['ru', 'en'] as Array<BotLanguageEnum>;

export { SceneEnum, MenuEnum, LANGUAGES };
