import { useState, useCallback } from 'react';

const useToggleState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggleOn = useCallback(() => {
    setState(true);
  }, []);

  const toggleOff = useCallback(() => {
    setState(false);
  }, []);

  const toggleSwitch = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return {
    toggle: state,
    toggleOn,
    toggleOff,
    toggleSwitch,
    setState,
  };
};

export { useToggleState };
