const ProgressBar = () => {
  return (
    <div>
      <div>1/10</div>
      <progress className="progress w-56" value="10" max="100"></progress>
    </div>
  );
};

export default ProgressBar;
// 테스트 진행도 표시
