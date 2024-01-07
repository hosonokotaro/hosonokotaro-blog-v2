import { Meta, StoryObj } from '@storybook/react';

import LoadingImage from './';

const meta: Meta<typeof LoadingImage> = {
  component: LoadingImage,
};

export default meta;

type Story = StoryObj<typeof LoadingImage>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'image',
  },
};
