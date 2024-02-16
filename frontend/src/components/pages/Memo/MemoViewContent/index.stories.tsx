import type { Meta, StoryObj } from '@storybook/react';

import MemoViewContent from '@/components/pages/Memo/MemoViewContent';

const meta = {
  title: 'components/pages/Memo/MemoViewContent',
  component: MemoViewContent,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MemoViewContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMemoViewContent: Story = {
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

export const LongMemoViewContent: Story = {
  args: {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    date: '3일 전',
    mbti: 'ESTJ',
    like_count: 30,
    cmt_count: 2
  }
};
