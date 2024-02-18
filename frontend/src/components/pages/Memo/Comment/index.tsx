import CommentCard from '@/components/pages/Memo/Comment/CommentCard';
import CommentPost from '@/components/pages/Memo/Comment/CommentPost';

const Comment = () => {
  return (
    <div className="px-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl">댓글</div>
        <div className="flex ">
          <div className="text-bold">등록순</div>
          <div className="ml-3">최신순</div>
        </div>
      </div>
      <CommentCard />
      <CommentPost />
    </div>
  );
};

export default Comment;
