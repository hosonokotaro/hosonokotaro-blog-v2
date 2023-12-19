import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import Title from './';

export default {
  component: Title,
  title: 'components/atoms/Title',
  argTypes: {
    as: {
      options: ['h2', 'h3', 'h4', 'span'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof Title>;

const Template: Story<Props> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'title',
  as: 'h2',
};
