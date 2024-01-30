import { FaPlus } from 'react-icons/fa';

import { CommonButton } from '@/components/common/Button/index.styles';

import * as S from './index.styles';

const MemoHeader = () => {
  return (
    <>
      <S.MbtiTitle>
        <div>
          {/* TODO: 검색 데이터는 전역 상태 관리 */}
          <S.Title>MemoBTI</S.Title>
          {/* 
            TODO: 버튼 클릭 시 좌측으로 2개 버튼 표시 (슬라이드 애니메이션)
            메모 등록버튼 - 클릭시 등록 페이지 이동 - daisyUI Custom Button
            검색 버튼 - 클릭 시 검색 모달. 여기서 MBTI유형 선택 또는 메모 제목, 내용, 작성자 검색 가능 - daisyUI Custom Button, Modal
        */}
          <CommonButton>
            <FaPlus />
          </CommonButton>
        </div>
        <S.SearchBadges>
          <div className="badge badge-secondary">ESTJ</div>
          <div className="badge badge-secondary">ISTJ</div>
          <div className="badge badge-secondary">제목: 안녕</div>
          <div className="badge badge-secondary">내용: 진짜</div>
        </S.SearchBadges>
      </S.MbtiTitle>
    </>
  );
};

export default MemoHeader;
