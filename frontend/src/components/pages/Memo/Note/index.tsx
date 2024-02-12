import { FaExchangeAlt } from 'react-icons/fa';

import Button from '@/components/common/Button';

const Note = () => {
  //   const { openModal } = useModalContext();
  // openModal(<MBTITypes />, null, 'MBTI 선택')
  return (
    <div className="w-full">
      <div className="mb-4">
        {'ESTJ'}
        <Button onClick={() => {}}>
          <FaExchangeAlt />
        </Button>
      </div>
      <form className="flex-1">
        <input
          type="text"
          placeholder="제목"
          className="input input-bordered w-full outline-0 mb-6"
        />
        <textarea
          className="textarea textarea-bordered w-full outline-0 resize-none h-5/6 p-3"
          placeholder="내용"
        />
      </form>
      <div>
        <Button>
          <span>배경 색상</span>
          <div
            className={`w-5 h-5 ml-3 ${'bg-[#FF9D42]'}`} // selected Color
          ></div>
        </Button>
      </div>
      <div>
        <Button>작성 완료</Button>
      </div>
    </div>
  );
};

export default Note;
