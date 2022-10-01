import styled from '@emotion/styled';
import { Button } from '@kanban-task-management/button';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="kanban" />
      <Button />
    </StyledApp>
  );
}

export default App;
