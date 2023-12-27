import { create } from 'zustand';

// create 안에는 기본값을 갖는 state를 설정 , 함수명 형식으로 변경할 state에 대해 작성.

export const useCountStore = create((set) => ({
  count: 0,
  setCount: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  removeCount: () => set(() => ({ count: 0 }))
}));
