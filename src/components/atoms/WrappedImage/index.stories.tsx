import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import WrappedImage from './';

export default {
  component: WrappedImage,
  title: 'components/atoms/WrappedImage',
  argTypes: {
    handleLoad: { action: 'loaded' },
  },
} as Meta;

type Props = ComponentProps<typeof WrappedImage>;

const Template: Story<Props> = (args) => <WrappedImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://picsum.photos/800/600',
  alt: 'WrappedImage',
};
