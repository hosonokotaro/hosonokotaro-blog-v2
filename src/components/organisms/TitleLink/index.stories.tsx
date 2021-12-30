import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import TitleLink from './';

export default {
  component: TitleLink,
  title: 'components/organisms/TitleLink',
} as Meta;

type Props = ComponentProps<typeof TitleLink>;

const Template: Story<Props> = (args) => {
  return <TitleLink {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  postId: 'testid',
  title: 'testtitle',
  release: true,
  createDate: '1634656164684',
};
