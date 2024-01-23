import { AiOutlineComment } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';

import * as S from '@/components/pages/Memo/Card/index.styles';

const Card = () => {
  return (
    <S.CardWrapper>
      <S.CardBody>
        <S.CardContent>
          <S.Title>따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음</S.Title>
          <S.Content>
            차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데
            따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다.
            속을 잘 모르겠다. 이제는 알고 싶다.
          </S.Content>
        </S.CardContent>
        <S.CardInfoContainer>
          <S.MemoDate>3일 전</S.MemoDate>
          <hr />
          <S.CardInfo>
            <S.MBTI>ESTJ</S.MBTI>
            <S.HistoryContainer>
              <S.History>
                <IoHeartOutline
                  className="cursor-pointer"
                  onClick={() => alert('좋아요 클릭 or 취소')}
                />
                <span>20</span>
              </S.History>
              <S.History>
                <AiOutlineComment />
                <span>20</span>
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
