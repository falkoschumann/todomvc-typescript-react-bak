import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer, { FooterProps, Showing } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const NoItemsLeft = Template.bind({});
NoItemsLeft.args = {
  count: 0,
};

export const OneItemLeft = Template.bind({});
OneItemLeft.args = {
  count: 1,
};

export const MultipleItemsLeft = Template.bind({});
MultipleItemsLeft.args = {
  count: 2,
};

export const ShowingAllTodos = Template.bind({});
ShowingAllTodos.args = {
  nowShowing: Showing.ALL_TODOS,
};

export const ShowingActiveTodos = Template.bind({});
ShowingActiveTodos.args = {
  nowShowing: Showing.ACTIVE_TODOS,
};

export const ShowingCompletedTodos = Template.bind({});
ShowingCompletedTodos.args = {
  nowShowing: Showing.COMPLETED_TODOS,
};

export const HasCompletedTodos = Template.bind({});
HasCompletedTodos.args = {
  completedCount: 1,
};
