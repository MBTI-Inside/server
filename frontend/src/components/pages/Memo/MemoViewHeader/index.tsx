import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const MemoViewHeader = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-row w-full justify-between items-center h-12">
      <div className="pl-4 text-xl">
        <IoIosArrowBack onClick={() => nav(-1)} />
      </div>
      <div className="text-xl">ESTJ</div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-inherit border-none text-xl"
        >
          <CiMenuKebab />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24"
        >
          <li className="items-center">
            <a>수정</a>
          </li>
          <li className="items-center">
            <a>삭제</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MemoViewHeader;
