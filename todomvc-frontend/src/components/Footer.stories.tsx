import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const NoItemsLeft = Template.bind({});
NoItemsLeft.args = {
  itemsLeft: 0,
};

export const OneItemsLeft = Template.bind({});
OneItemsLeft.args = {
  itemsLeft: 1,
};

export const MultipleItemsLeft = Template.bind({});
MultipleItemsLeft.args = {
  itemsLeft: 2,
};
