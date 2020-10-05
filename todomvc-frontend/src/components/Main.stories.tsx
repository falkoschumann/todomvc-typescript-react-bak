import React from 'react';
import { Story, Meta } from '@storybook/react';

import Main from './Main';

export default {
  title: 'Main',
  component: Main,
} as Meta;

const Template: Story = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {};
