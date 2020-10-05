import React from 'react';
import { Story, Meta } from '@storybook/react';

import TodoList from './TodoList';

export default {
  title: 'TodoList',
  component: TodoList,
} as Meta;

const Template: Story = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: [
    { id: '1', title: 'Taste JavaScript', completed: true },
    { id: '2', title: 'Buy a unicorn', completed: false },
  ],
};
