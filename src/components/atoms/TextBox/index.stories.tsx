import { Meta, StoryObj } from '@storybook/react';

import TextBox from './';

const meta: Meta<typeof TextBox> = {
  component: TextBox,
  argTypes: {
    as: {
      options: ['div', 'p'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    as: 'div',
    children:
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせすん',
  },
};
