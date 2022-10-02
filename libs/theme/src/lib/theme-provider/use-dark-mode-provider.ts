import { useContext } from 'react';
import { DarkModeContext } from './dark-mode-context';

export const useDarkModeProvider = () => {
  const { isDarkModeEnabled, toggleDarkMode } = useContext(DarkModeContext);

  return {
    isDarkModeEnabled,
    toggleDarkMode,
  };
};
