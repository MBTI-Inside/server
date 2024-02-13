import { FaExchangeAlt } from 'react-icons/fa';

import Button from '@/components/common/Button';

const Note = () => {
  //   const { openModal } = useModalContext();
  // openModal(<MBTITypes />, null, 'MBTI 선택')
  return (
    <div className="w-full bg-black">
      <div className="flex mb-4 items-center justify-between px-4">
        <div className="text-4xl font-bold text-white">{'ESTJ'}</div>
        <Button onClick={() => {}}>
          <FaExchangeAlt />
        </Button>
      </div>
      <form className="flex-1">
        <input
          type="text"
          placeholder="제목"
          className="input input-bordered w-full outline-0 mb-6 p-3 bg-inherit text-white border-solid border-white"
        />
        <textarea
          className="textarea textarea-bordered w-full outline-0 h-80 resize-none mb-6 p-3 text-base bg-inherit text-white border-solid border-white"
          placeholder="내용"
        />
        <div>
          <Button classProp={'w-full h-14 text-lg text-white mb-6 bg-inherit'}>
            <span>배경 색상</span>
            <div
              className={`w-5 h-5 ml-3 ${'bg-[#FF9D42]'}`} // selected Color
            ></div>
          </Button>
        </div>
        <div>
          <Button classProp={'w-full h-14 text-lg text-white bg-inherit'}>
            작성 완료
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Note;
