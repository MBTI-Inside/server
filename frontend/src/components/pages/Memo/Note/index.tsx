import { FaExchangeAlt } from 'react-icons/fa';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Memo/Note/index.styles';

const Note = () => {
  //   const { openModal } = useModalContext();
  // openModal(<MBTITypes />, null, 'MBTI 선택')
  return (
    <S.NoteContainer>
      <S.NoteHeader>
        <S.Title>{'ESTJ'}</S.Title>
        <Button onClick={() => {}}>
          <FaExchangeAlt />
        </Button>
      </S.NoteHeader>
      <form className="flex-1">
        <S.InputTitle type="text" placeholder="제목" />
        <S.InputContent placeholder="내용" />
        <Button classProp={'w-full h-14 text-lg text-white mb-6 bg-inherit'}>
          <span>배경 색상</span>
          <S.MemoColor bg="bg-[#FF9D42]"></S.MemoColor>
        </Button>
        <Button classProp={'w-full h-14 text-lg text-white bg-inherit'}>
          작성 완료
        </Button>
      </form>
    </S.NoteContainer>
  );
};

export default Note;
