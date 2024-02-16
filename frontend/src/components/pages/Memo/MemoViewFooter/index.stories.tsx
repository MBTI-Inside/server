import type { Meta, StoryObj } from '@storybook/react';

import MemoViewFooter from '@/components/pages/Memo/MemoViewFooter';

const meta = {
  title: 'components/pages/Memo/MemoViewFooter',
  component: MemoViewFooter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MemoViewFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMemoViewFooter: Story = {
  args: {
    title: '따뜻한 얼음 ❄️ ',
    content: '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다.',
    date: '3일 전',
    mbti: 'ESTJ',
    like_count: 30,
    cmt_count: 2
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-700">
        <Story />
      </div>
    )
  ]
};
