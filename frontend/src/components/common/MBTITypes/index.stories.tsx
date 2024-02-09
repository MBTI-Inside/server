import type { Meta, StoryObj } from '@storybook/react';

import MBTITypes from './index';

const meta = {
  title: 'components/common/MBTITypes',
  component: MBTITypes,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MBTITypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMBTITypes: Story = {
  args: {}
};
