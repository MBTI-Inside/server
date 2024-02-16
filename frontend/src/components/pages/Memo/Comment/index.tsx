import CommentCard from '@/components/pages/Memo/Comment/CommentCard';

const Comment = () => {
  return (
    <div className="px-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl">댓글</div>
        <div className="flex ">
          <div className="text-bold">등록순</div>
          <div className="ml-3">최신순</div>
        </div>
      </div>
      <CommentCard />
      <div className="flex">
        <textarea />
        <div>등록</div>
      </div>
    </div>
  );
};

export default Comment;
