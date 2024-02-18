import type { Meta, StoryObj } from '@storybook/react';

import Comment from '@/components/pages/Memo/Comment';

const meta = {
  title: 'components/pages/Memo/Comment',
  component: Comment,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultComment: Story = {
  args: {}
};

export const MBTIComment: Story = {
  args: {}
};
