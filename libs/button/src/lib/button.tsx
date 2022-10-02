import styled from '@emotion/styled';

export interface ButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  background: ${props => props.theme.colors.background};
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={props.onClick}>
      Toggle
    </StyledButton>
  );
}

export default Button;
