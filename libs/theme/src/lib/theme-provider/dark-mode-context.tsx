import { createContext, useEffect, useState } from 'react';

interface DarkMode {
  isDarkModeEnabled: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkMode>({
  isDarkModeEnabled: false,
  toggleDarkMode: () => {}
});

export const DarkModeProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);

  const getTheme = (): string | null => {
    return localStorage.getItem('theme');
  };

  const updateDarkModeState = (): void => {
    setIsDarkModeEnabled(getTheme() === 'dark');
  };

  useEffect(() => {
    updateDarkModeState();
  }, []);

  const toggleDarkMode = (): void => {
    const theme = isDarkModeEnabled ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateDarkModeState();
  };

  return (
    <DarkModeContext.Provider value={{ isDarkModeEnabled, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
