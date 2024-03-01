import { BotLanguageEnum } from '@common_bot/shared';

enum SceneEnum {
  GREETING = 'scene_greeting',
  RULES = 'scene_rules',

  FEEDBACK_WRITING = 'scene_feedback_writing',
  FEEDBACK_REQUESTS = 'scene_feedback_requests',
  SUPPORT_REQUESTS = 'scene_support_requests',

  SETTINGS_LANGUAGE = 'scene_settings_language',
  SETTINGS_TIMEZONE = 'scene_settings_timezone',
  SETTINGS_REMINDERS = 'scene_settings_reminders',

  RESET = 'scene_reset',
}

enum MenuEnum {
  MAIN = 'main_menu',
  ADMIN = 'admin_menu',
  SUPPORT = 'support_menu',
  REFERRAL = 'referral_menu',
  FEEDBACK = 'feedback_menu',
  SETTINGS = 'settings_menu',
}

const LANGUAGES = ['ru', 'en'] as Array<BotLanguageEnum>;

export { SceneEnum, MenuEnum, LANGUAGES };
