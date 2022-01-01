import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import TitleLink from './';

export default {
  component: TitleLink,
  title: 'components/molecules/TitleLink',
  argTypes: {
    marginTopSize: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof TitleLink>;

const Template: Story<Props> = (args) => {
  return <TitleLink {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  postId: 'testid',
  title: 'testtitle',
  released: true,
  createDate: '1634656164684',
  marginTopSize: '40px',
};
