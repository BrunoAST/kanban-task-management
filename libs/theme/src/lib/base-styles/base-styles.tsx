import { css, Global } from '@emotion/react';

export const BaseStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
      :root {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
    />
  );
};
