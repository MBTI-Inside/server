import Button from '@/components/common/Button';
import ProgressBar from '@/components/pages/Test/ProgressBar';
import TestTitle from '@/components/pages/Test/Title';

import * as S from '@/pages/Test/styles';

const Test = () => {
  return (
    <S.TestContainer>
      <TestTitle />
      <S.TestContent>
        <Button
          classProp={
            'w-80 min-h-[120px] py-9 px-4 mb-5 cursor-pointer text-left rounded-2xl bg-white text-black hover:bg-violet-400 hover:border-transparent hover:translate-y-1 hover:text-white active:translate-y-1 active:bg-purple-400 active:text-white ease-in duration-200 select-none relative animate-testComponent'
          }
        >
          남은 얘기는 만나서 해야징
        </Button>
        <Button
          classProp={
            'w-80 min-h-[120px] py-9 px-4 mb-5 cursor-pointer text-left rounded-2xl bg-white text-black hover:bg-violet-400 hover:border-transparent hover:translate-y-1 hover:text-white active:translate-y-1 active:bg-purple-400 active:text-white ease-in duration-200 select-none relative animate-testComponent'
          }
        >
          통화가 끝났으니 이제 쉬어야지..
        </Button>
      </S.TestContent>
      <S.TestNavigation>
        <Button>이전</Button>
        <Button>다음</Button>
      </S.TestNavigation>
      <ProgressBar />
    </S.TestContainer>
  );
};

export default Test;
// 테스트 내용을 표시한다.
