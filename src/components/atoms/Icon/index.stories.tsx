import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import Icon from './';

export default {
  component: Icon,
  title: 'components/atoms/Icon',
  argTypes: {
    size: {
      options: ['16', '24', '32', '48'],
      control: { type: 'select' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof Icon>;

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  fillColor: 'default',
  iconName: 'OpenInNew',
  sideMargin: '0',
  size: '16',
};
