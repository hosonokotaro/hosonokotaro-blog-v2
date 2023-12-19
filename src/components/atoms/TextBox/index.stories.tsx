import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import TextBox from './';

export default {
  component: TextBox,
  title: 'components/atoms/TextBox',
  argTypes: {
    as: {
      options: ['div', 'p'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof TextBox>;

const Template: Story<Props> = (args) => <TextBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  as: 'div',
  children:
    'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせすん',
};
