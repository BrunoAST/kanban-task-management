import { BaseThemeProvider, DarkModeProvider } from '@kanban-task-management/theme';
import { Wrapper } from './wrapper';

export function App() {
  return (
    <DarkModeProvider>
      <BaseThemeProvider>
        <Wrapper />
      </BaseThemeProvider>
    </DarkModeProvider>
  );
}

export default App;
