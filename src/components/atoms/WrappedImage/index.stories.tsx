import { Meta, StoryObj } from '@storybook/react';

import WrappedImage from './';

const meta: Meta<typeof WrappedImage> = {
  component: WrappedImage,
  argTypes: {
    handleLoad: { action: 'loaded' },
  },
};

export default meta;

type Story = StoryObj<typeof WrappedImage>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'WrappedImage',
  },
};
