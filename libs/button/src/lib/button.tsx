import { ReactNode } from 'react';
import { css, SerializedStyles, Theme } from '@emotion/react';

type Variant = 'primaryLg' | 'primarySm' | 'secondary' | 'destructive';

export interface ButtonProps {
  onClick: () => void;
  variant: Variant;
  children: ReactNode;
};

const styleMap = (theme: Theme) => {
  return {
    primaryLg: {
      background: theme.colors.mainPurple,
      color: theme.colors.white,
      bgHover: theme.colors.hover.mainPurple,
      height: '48px',
      padding: '15px 24px',
    },
    primarySm: {
      background: theme.colors.mainPurple,
      color: theme.colors.white,
      bgHover: theme.colors.hover.mainPurple,
      height: '40px',
      padding: '10px 24px',
    },
    secondary: {
      background: theme.colors.secondaryButtonBg,
      color: theme.colors.mainPurple,
      bgHover: theme.colors.hover.mainPurple25,
      height: '40px',
      padding: '10px 24px',
    },
    destructive: {
      background: theme.colors.red,
      color: theme.colors.white,
      bgHover: theme.colors.hover.red,
      height: '40px',
      padding: '10px 24px',
    }
  };
};

const buttonStyles = (theme: Theme, variant: Variant): SerializedStyles => {
  return css`
    background: ${styleMap(theme)[variant].background};
    color: ${styleMap(theme)[variant].color};
    height: ${styleMap(theme)[variant].height};
    border: none;
    cursor: pointer;
    padding: ${styleMap(theme)[variant].padding};
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.938rem;
    transition: background 200ms ease;

    &:hover {
      background: ${styleMap(theme)[variant].bgHover};
    }
  `;
};

export const Button = ({ onClick, variant, children }: ButtonProps): JSX.Element => {
  return (
    <button css={theme => buttonStyles(theme, variant)} onClick={onClick}>
      {children}
    </button>
  );
}
