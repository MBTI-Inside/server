const Card = () => {
  return (
    <section className="card w-80 h-60 bg-green-300 shadow-xl">
      <section className="card-body p-6 justify-between">
        <article className="h-32">
          <h2 className="card-title line-clamp-1">
            따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음
          </h2>
          <div className="pt-2 line-clamp-4">
            차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데
            따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다.
            속을 잘 모르겠다. 이제는 알고 싶다.
          </div>
        </article>
        <section className="flex flex-col h-16 justify-between">
          <div className="ml-auto">3일 전</div>
          <hr />
          <div className="flex flex-row justify-between">
            <div className="font-bold">ESTJ</div>
            <div className="flex justify-between w-24">
              <div>O 20</div>
              <div>X 20</div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Card;
// 메모장의 한 게시글(메모)
