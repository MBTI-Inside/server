const Memo = () => {
  return (
    <>
      {/* TODO: MBTI유형 선택 버튼(클릭 시 모달) - daisyUI Custom Button, Modal */}
      {/* TODO: mbti 유형은 전역 상태 관리 */}
      {/* TODO: 게시물 등록버튼(클릭 시 페이지 이동) - daisyUI Custom Button */}
      <div>
        <span>MBTI 메모장</span>
        <button>MBTI선택</button>
        <button>등록버튼 (+)</button>
      </div>
      {/* TODO: 게시물 메모 - daisyUI Custom Card */}
      <div>
        <h2>제목</h2>
        <h3>내용</h3>
        <span>며칠 전</span>
        <hr />
        <div>
          <span>(MBTI유형)</span>
          <span>하트버튼, 숫자</span>
          <span>댓글버튼, 숫자</span>
        </div>
      </div>
    </>
  );
};

export default Memo;
// 메모 목록을 보여줌
