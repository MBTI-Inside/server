import Button from '@/components/common/Button';

const CommentPost = () => {
  return (
    <div className="flex mb-3">
      <textarea className="h-10 textarea-bordered textarea-xs w-full max-w-xs rounded-full" />
      <Button classProp={'ml-2 h-10'}>등록</Button>
    </div>
  );
};

export default CommentPost;
