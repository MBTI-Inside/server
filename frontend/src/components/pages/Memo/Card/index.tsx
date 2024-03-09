import { AiOutlineComment } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';

import * as S from '@/components/pages/Memo/Card/index.styles';

const Card = (params: any) => {
  const { id, title, content, date, mbti, likeCount, cmtCount } = params;

  return (
    <S.CardWrapper>
      <S.CardBody>
        <S.CardContent>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </S.CardContent>
        <S.CardInfoContainer>
          <S.MemoDate>{date}</S.MemoDate>
          <hr />
          <S.CardInfo>
            <S.MBTI>{mbti}</S.MBTI>
            <S.HistoryContainer>
              <S.History>
                <IoHeartOutline
                  className="cursor-pointer"
                  onClick={() => alert('좋아요 클릭 or 취소')}
                />
                <span>{likeCount}</span>
              </S.History>
              <S.History>
                <AiOutlineComment />
                <span>{cmtCount}</span>
              </S.History>
            </S.HistoryContainer>
          </S.CardInfo>
        </S.CardInfoContainer>
      </S.CardBody>
    </S.CardWrapper>
  );
};

export default Card;
// 메모장의 한 게시글(메모)
