import ModalProvider from '@/hooks/useModal';

import MBTITypes from './index';

export default {
  title: 'Components/Common/MBTITypes', // 스토리북에서 보여질 제목
  component: MBTITypes
};

// 기본 컴포넌트를 보여주는 스토리
export const Default = () => (
  <ModalProvider>
    <MBTITypes />
  </ModalProvider>
);

// import type { Meta, StoryObj } from '@storybook/react';

// import MBTITypes from './index';

// const meta = {
//   title: 'components/common/MBTITypes',
//   component: MBTITypes,
//   parameters: {
//     layout: 'centered'
//   },
//   tags: ['autodocs'],
//   argTypes: {}
// } satisfies Meta<typeof MBTITypes>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const DefaultMBTITypes: Story = {
//   args: {}
// };
