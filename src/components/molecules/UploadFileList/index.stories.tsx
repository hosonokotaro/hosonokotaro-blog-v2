import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';

import UploadFileList from './';

export default {
  component: UploadFileList,
  title: 'components/molecules/UploadFileList',
  argTypes: {
    deleteImage: { action: 'deleteImage' },
    marginTopSize: {
      options: ['0px', '10px', '20px', '40px', '80px'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Props = ComponentProps<typeof UploadFileList>;

const Template: Story<Props> = (args) => <UploadFileList {...args} />;

export const Default = Template.bind({});

Default.args = {
  imagePathList: [
    {
      fullPath: 'https://picsum.photos/800/600',
      fileName: '800/600',
    },
    {
      fullPath: 'https://picsum.photos/600/400',
      fileName: '600/400',
    },
    {
      fullPath: 'https://picsum.photos/300/400',
      fileName: '300/400',
    },
  ],
  marginTopSize: '20px',
};
