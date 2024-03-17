import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import MemoViewHeader from '@/components/pages/Memo/MemoViewHeader';

const meta = {
  title: 'components/pages/Memo/MemoViewHeader',
  component: MemoViewHeader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MemoViewHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-96">
          <Story />
        </div>
      </MemoryRouter>
    )
  ]
};
