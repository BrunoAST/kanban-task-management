import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
}

const StyledButton = styled.div`
  color: pink;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      <h1>Welcome to Button! {props.title}</h1>
    </StyledButton>
  );
}

export default Button;
