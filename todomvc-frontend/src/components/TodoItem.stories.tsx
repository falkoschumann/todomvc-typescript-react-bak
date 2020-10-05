import React from 'react';
import { Story, Meta } from '@storybook/react';

import TodoList from './TodoList';
import TodoItem, { TodoItemProps } from './TodoItem';

export default {
  title: 'Todo Item',
  component: TodoItem,
  decorators: [
    (Story) => (
      <div className="todoapp">
        <TodoList>
          <Story />
        </TodoList>
      </div>
    ),
  ],
} as Meta;

const Template: Story<TodoItemProps> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: { id: '2', title: 'Buy a unicorn', completed: false },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: { id: '1', title: 'Taste JavaScript', completed: true },
};

export const Editing = Template.bind({});
Editing.args = {
  todo: { id: '2', title: 'Buy a unicorn', completed: false },
  editing: true,
};

export const CompletedAndEditing = Template.bind({});
CompletedAndEditing.args = {
  todo: { id: '1', title: 'Taste JavaScript', completed: true },
  editing: true,
};
