import MemoHeader from '@/components/pages/Memo/MemoHeader';

const Memo = () => {
  return (
    <>
      <MemoHeader />
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
