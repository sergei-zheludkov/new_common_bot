import { useEffect } from 'react';
import { hook } from '@common_bot/shared';
import { useUser } from '../../../contexts';
import { TIMEZONES } from '../../../constants';
import { useSettingsPatchUser } from '../use-settings-patch-user';

const { useToggleState } = hook;

const useSettingsTimezone = () => {
  const { user, getUser } = useUser();
  const { patchUser, isPatchSuccess: isSaved } = useSettingsPatchUser();
  const {
    toggle: isChanging,
    toggleOn: handleChangingOn,
    toggleOff: handleChangingOff,
  } = useToggleState();

  const { timezone: currentTimezone } = user;
  const availableTimezones = TIMEZONES.filter((timezone) => timezone !== currentTimezone);

  const handleSave = (timezone: number) => async () => {
    await patchUser({ id: user.id, timezone });

    handleChangingOff();
  };

  useEffect(() => {
    if (isSaved) {
      // Necessary to send request to event_loop
      setTimeout(getUser, 300);
    }
  }, [isSaved]);

  return {
    currentTimezone,
    availableTimezones,

    isChanging,
    isSaved,

    handleSave,
    handleChangingOn,
    handleChangingOff,
  };
};

export { useSettingsTimezone };
