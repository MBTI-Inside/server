import type { Meta, StoryObj } from '@storybook/react';

import Note from '@/components/pages/Memo/Note';

const meta = {
  title: 'components/pages/Memo/Note',
  component: Note,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNote: Story = {
  args: {}
};

export const MBTINote: Story = {
  args: {}
};
