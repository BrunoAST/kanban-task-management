import { Button } from '@kanban-task-management/button';
import { BaseThemeProvider } from '@kanban-task-management/theme';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: {
      description: 'Button click event',
      table: {
        category: 'Events'
      }
    },
    variant: {
      control: { type: 'select' },
      description: 'Changes the color of the button and its size',
      table: {
        category: 'Property'
      }
    },
    children: {
      control: { type: 'text' },
      description: 'Renders a child content',
      table: {
        category: 'Property'
      }
    },
  },
  args: {
    variant: 'primaryLg',
    children: 'Button',
  },
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ variant, children }) => {
  return (
    <BaseThemeProvider>
      <Button
        onClick={() => console.log('onClick trigged')}
        variant={variant}
      >
        {children}
      </Button>
    </BaseThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
