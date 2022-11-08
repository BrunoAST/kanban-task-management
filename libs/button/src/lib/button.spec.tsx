import { ThemeProvider } from '@emotion/react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button, ButtonProps } from './button';

const renderButton = ({ onClick = jest.fn(), children }: Partial<ButtonProps>): void => {
  render(
    <ThemeProvider theme={() => ({ colors: { ...jest.fn(), hover: jest.fn() } })}>
      <Button variant='destructive' onClick={onClick}>
        {children}
      </Button>
    </ThemeProvider>
  );
};

describe('<Button />', () => {
  test('Should emit a click event when the button receives a click', () => {
    const onClickSpy = jest.fn();

    renderButton({ onClick: onClickSpy });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickSpy).toHaveBeenCalled();
  });

  test('Should render children content', () => {
    renderButton({ children: 'Im a children content' });

    expect(screen.queryByText('Im a children content')).not.toBeNull();
  });
});
