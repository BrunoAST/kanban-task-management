import { Button } from '@kanban-task-management/button';

import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template = ({ title }) => <Button title={title} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Ola',
};
