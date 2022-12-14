import { ThemeProvider } from '@emotion/react';
import { ReactNode, useCallback } from 'react';
import { COLORS } from '../colors/colors';
import { BaseStyles } from '../base-styles/base-styles';
import { useDarkModeProvider } from './use-dark-mode-provider';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      black: string;
      mainPurple: string;
      darkGrey: string;
      mediumGrey: string;
      white: string;
      red: string;
      lines: string;
      background: string;
      secondaryButtonBg: string;
      hover: {
        mainPurple: string;
        mainPurple25: string;
        red: string;
      }
    };
  }
}

interface BaseThemeProviderProps {
  children: ReactNode;
}

export const BaseThemeProvider = ({ children }: BaseThemeProviderProps): JSX.Element => {
  const { isDarkModeEnabled } = useDarkModeProvider();

  const lightTheme = {
    colors: {
      ...COLORS.base,
      hover: { ...COLORS.hover },
      lines: COLORS.light.lines,
      background: COLORS.light.background,
      secondaryButtonBg: COLORS.light.secondaryButtonBg,
    }
  };

  const darkTheme = {
    colors: {
      ...COLORS.base,
      hover: { ...COLORS.hover },
      lines: COLORS.dark.lines,
      background: COLORS.dark.background,
      secondaryButtonBg: COLORS.dark.secondaryButtonBg,
    }
  };

  const defineTheme = useCallback(() => {
    return isDarkModeEnabled ? darkTheme : lightTheme;
  }, [isDarkModeEnabled]);

  return (
    <ThemeProvider theme={defineTheme()}>
      <BaseStyles />
      {children}
    </ThemeProvider>
  );
};
