import { AiOutlineComment } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';

import * as S from '@/components/pages/Memo/MemoViewFooter/index.styles';

const MemoViewFooter = (params: any) => {
  const { id, date, mbti, like_count, cmt_count } = params.data;

  return (
    <S.CardInfoContainer>
      <S.HistoryContainer>
        <S.History>
          <IoHeartOutline onClick={() => alert('좋아요 클릭 or 취소')} />
          <span>{like_count}</span>
        </S.History>
        <S.History>
          <AiOutlineComment />
          <span>{cmt_count}</span>
        </S.History>
      </S.HistoryContainer>
      <S.MemoDate>{date}</S.MemoDate>
    </S.CardInfoContainer>
  );
};

export default MemoViewFooter;
