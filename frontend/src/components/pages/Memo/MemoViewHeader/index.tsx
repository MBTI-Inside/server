import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import * as S from '@/components/pages/Memo/MemoViewHeader/index.styles';

const MemoViewHeader = () => {
  const nav = useNavigate();

  return (
    <S.MemoViewHeaderContainer>
      <div className="pl-4 text-xl">
        <IoIosArrowBack onClick={() => nav(-1)} />
      </div>
      <div className="text-xl">ESTJ</div>
      <S.DropDowns>
        <S.DropDownButton tabIndex={0} role="button">
          <CiMenuKebab />
        </S.DropDownButton>
        <S.DropDownContents tabIndex={0}>
          <li className="items-center">
            <a>수정</a>
          </li>
          <li className="items-center">
            <a>삭제</a>
          </li>
        </S.DropDownContents>
      </S.DropDowns>
    </S.MemoViewHeaderContainer>
  );
};

export default MemoViewHeader;
