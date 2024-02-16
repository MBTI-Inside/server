import { CiMenuKebab } from 'react-icons/ci';

import * as S from '@/components/pages/Memo/Comment/CommentCard/index.styles';

const CommentCard = () => {
  return (
    <div className="flex flex-col shadow-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <S.UserIcon />
          <span>닉네임 (작성자)</span>
        </div>
        <div>
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
        </div>
      </div>
      <div className="flex flex-col">
        <div>comment comment comment </div>
        <div>2024-02-14 17:18</div>
        <div className="flex justify-between">
          <button>답글</button>
          <button>공감</button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
