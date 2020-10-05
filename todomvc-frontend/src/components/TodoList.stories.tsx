import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Todo } from 'todomvc-contract';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

export default {
  title: 'Todo List',
  component: TodoList,
  subcomponents: { TodoItem },
} as Meta;

const Template: Story = ({ data }) => (
  <TodoList>
    {data.map((it: Todo) => (
      <TodoItem key={it.id} todo={it} />
    ))}
  </TodoList>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: '1', title: 'Taste JavaScript', completed: true },
    { id: '2', title: 'Buy a unicorn', completed: false },
  ],
};
