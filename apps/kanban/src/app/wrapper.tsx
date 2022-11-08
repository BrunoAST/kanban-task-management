import { Button } from '@kanban-task-management/button';
import { useDarkModeProvider } from '@kanban-task-management/theme';

export const Wrapper = (): JSX.Element => {
  const { toggleDarkMode } = useDarkModeProvider();

  return (
    <Button variant='secondary' onClick={() => toggleDarkMode()}>
      Toggle Theme
    </Button>
  );
}
