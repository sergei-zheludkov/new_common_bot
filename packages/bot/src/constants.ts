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

const TIMEZONES = [
  -720, // (UTC−12)
  -660, // (UTC−11)
  -600, // (UTC−10)
  -570, // (UTC−9:30)
  -540, // (UTC−9)
  -480, // (UTC−8)
  -420, // (UTC−7)
  -360, // (UTC−6)
  -300, // (UTC−5)
  -240, // (UTC−4)
  -210, // (UTC−3:30)
  -180, // (UTC−3)
  -120, // (UTC−2)
  -60, // (UTC−1)
  0, // (UTC+0)
  60, // (UTC+1)
  120, // (UTC+2)
  180, // (UTC+3)
  210, // (UTC+3:30)
  240, // (UTC+4)
  270, // (UTC+4:30)
  300, // (UTC+5)
  330, // (UTC+5:30)
  345, // (UTC+5:45)
  360, // (UTC+6)
  390, // (UTC+6:30)
  420, // (UTC+7)
  480, // (UTC+8)
  525, // (UTC+8:45)
  540, // (UTC+9)
  570, // (UTC+9:30)
  600, // (UTC+10)
  630, // (UTC+10:30)
  660, // (UTC+11)
  720, // (UTC+12)
  765, // (UTC+12:45)
  780, // (UTC+13)
  840, // (UTC+14)
];

export {
  SceneEnum, MenuEnum, LANGUAGES, TIMEZONES,
};
