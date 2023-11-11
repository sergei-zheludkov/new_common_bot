import { useEffect, useRef } from 'react';
import { hook } from '@common_bot/shared';

const { useToggleState } = hook;

const useRemoveKeyboard = () => {
  const ref = useRef(true);
  const { toggle, turnOff } = useToggleState(true);

  useEffect(() => {
    if (ref.current && toggle) {
      ref.current = false;
      setTimeout(turnOff, 300);
    }
  }, []);

  const shouldRemoveKeyboard = ref.current && toggle;

  return { shouldRemoveKeyboard };
};

export { useRemoveKeyboard };
