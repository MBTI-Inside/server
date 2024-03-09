import { FaExchangeAlt, FaPlus } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import { CommonButton } from '@/components/common/Button/index.styles';
import MBTITypes from '@/components/common/MBTITypes';

import * as S from './index.styles';

const MemoHeader = () => {
  const { openModal } = useModalContext();

  return (
    <>
      <S.MbtiTitleContainer>
        <S.MbtiTitle>
          {/* TODO: 검색 데이터는 전역 상태 관리 */}
          <S.Title>MemoBTI</S.Title>
          {/* 
            TODO: 버튼 클릭 시 좌측으로 2개 버튼 표시 (슬라이드 애니메이션)
            메모 등록버튼 - 클릭시 등록 페이지 이동 - daisyUI Custom Button
            검색 버튼 - 클릭 시 검색 모달. 여기서 MBTI유형 선택 또는 메모 제목, 내용, 작성자 검색 가능 - daisyUI Custom Button, Modal
        */}
          <div>
            {/* 임시 */}
            <Button onClick={() => openModal(<MBTITypes />, null, 'MBTI 선택')}>
              <FaExchangeAlt />
            </Button>
            <Button>
              <FaPlus />
            </Button>
          </div>
        </S.MbtiTitle>
        <section>
          <S.Badge>ESTJ</S.Badge>
          <S.Badge>ISTJ</S.Badge>
          <S.Badge>제목 : 안녕</S.Badge>
          <S.Badge>내용 : 진짜</S.Badge>
          <S.Badge>좋아요 : 진짜</S.Badge>
          <S.Badge>내용 : 진짜</S.Badge>
          <S.Badge>내용 : 진짜</S.Badge>
          <S.Badge>내용 : 진짜</S.Badge>
          <S.Badge>내용 : 진짜</S.Badge>
          <S.Badge>내용 : 진짜</S.Badge>
        </section>
      </S.MbtiTitleContainer>
    </>
  );
};

export default MemoHeader;
