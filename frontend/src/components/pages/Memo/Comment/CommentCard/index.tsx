import { CiMenuKebab } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Memo/Comment/CommentCard/index.styles';

const CommentCard = () => {
  return (
    <S.CommentCardContainer>
      <S.CommentCardUserInfo>
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
      </S.CommentCardUserInfo>
      <S.CommentCardContent>
        <div className="mb-1">
          comment comment commentcomment comment commentcomment comment
          commentcomment comment commentcomment comment comment{' '}
        </div>
        <div className="mb-1">2024-02-14 17:18</div>
        <S.CommentCardHistory>
          <Button classProp={'h-6 rounded-none'}>답글</Button>
          <div className="flex items-center">
            <IoHeartOutline
              className="cursor-pointer"
              onClick={() => alert('좋아요 클릭 or 취소')}
            />
            <span>13</span>
          </div>
        </S.CommentCardHistory>
      </S.CommentCardContent>
    </S.CommentCardContainer>
  );
};

export default CommentCard;
