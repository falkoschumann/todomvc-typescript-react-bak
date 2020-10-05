import React from 'react';
import { Story, Meta } from '@storybook/react';

import TodoAppPage from './TodoAppPage';

export default {
  title: 'TodoAppPage',
  component: TodoAppPage,
} as Meta;

const Template: Story = (args) => <TodoAppPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
