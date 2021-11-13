import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';

import Header from './';

export default {
  component: Header,
  title: 'components/organisms/Header',
} as Meta;

type Props = ComponentProps<typeof Header>;

const Template: Story<Props> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  linkPath: '/',
};
