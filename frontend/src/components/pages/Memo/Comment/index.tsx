import CommentCard from '@/components/pages/Memo/Comment/CommentCard';
import CommentPost from '@/components/pages/Memo/Comment/CommentPost';
import * as S from '@/components/pages/Memo/Comment/index.styles';

const Comment = () => {
  return (
    <S.CommentContainer>
      <S.CommentHeader>
        <div className="text-xl">댓글</div>
        <div className="flex ">
          <div className="text-bold">등록순</div>
          <div className="ml-3">최신순</div>
        </div>
      </S.CommentHeader>
      <CommentCard />
      <CommentPost />
    </S.CommentContainer>
  );
};

export default Comment;
