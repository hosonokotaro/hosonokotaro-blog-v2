import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import Date from './';

export default {
  component: Date,
  title: 'components/atoms/Date',
} as Meta;

type Props = ComponentProps<typeof Date>;

const Template: Story<Props> = (args) => <Date {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: '2021',
};
