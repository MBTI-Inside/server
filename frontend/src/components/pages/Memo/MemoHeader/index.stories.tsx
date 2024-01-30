import type { Meta, StoryObj } from '@storybook/react';

import MemoHeader from './index';

const meta = {
  title: 'components/pages/Memo/MemoHeader',
  component: MemoHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MemoHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMemoHeader: Story = {
  args: {}
};

export const MBTIMemoHeader: Story = {
  args: {}
};
