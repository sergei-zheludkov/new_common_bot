import React from 'react';
import { Button, ButtonGroup } from '@urban-bot/core';
import { useTranslation } from '@common_bot/i18n';
import { date } from '@common_bot/shared';
import { useRouter } from '../../../contexts';
import { useSettingsTimezone } from './use-settings-timezone';
import { getTimezoneButtonLines } from './helpers';

const { getTimezone } = date;
const DEFAULT_BUTTONS_ARRAY = [[]];

const SettingsTimezone = () => {
  const { switchToMenuSettings } = useRouter();
  const { t } = useTranslation('settings');
  const {
    currentTimezone,
    availableTimezones,
    isChanging,
    handleSave,
    handleChangingOn,
    handleChangingOff,
  } = useSettingsTimezone();

  const timezoneButtons = availableTimezones
    .map((timezone) => (
      <Button key={timezone} onClick={handleSave(timezone)}>{getTimezone(timezone)}</Button>
    ))
    .reduce(getTimezoneButtonLines, DEFAULT_BUTTONS_ARRAY);

  const changeButton = [(
    <Button key="change-timezone" onClick={handleChangingOn}>
      {t('buttons:change')}
    </Button>
  )];

  const backToTimezoneSettingsButton = [(
    <Button key="back-to-timezone-settings" onClick={handleChangingOff}>
      {t('buttons:back')}
    </Button>
  )];

  const backToSettingsButton = [(
    <Button key="back-to-settings" onClick={switchToMenuSettings}>
      {t('buttons:back')}
    </Button>
  )];

  const activeTimezone = currentTimezone
    ? `${t('timezone.selected')}${getTimezone(currentTimezone)}`
    : t('timezone.not_selected');

  const title = isChanging
    ? t('timezone.choose')
    : activeTimezone;

  const buttons = isChanging
    ? [...timezoneButtons, backToTimezoneSettingsButton]
    : [changeButton, backToSettingsButton];

  return (
    <ButtonGroup title={title} isNewMessageEveryRender={false}>
      {buttons}
    </ButtonGroup>
  );
};

export { SettingsTimezone };
