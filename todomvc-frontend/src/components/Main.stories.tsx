import React from 'react';
import { Story, Meta } from '@storybook/react';

import Main, { MainProps } from './Main';

export default {
  title: 'Main',
  component: Main,
} as Meta;

const Template: Story<MainProps> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: [
    { id: '1', title: 'Taste JavaScript', completed: true },
    { id: '2', title: 'Buy a unicorn', completed: false },
  ],
};
