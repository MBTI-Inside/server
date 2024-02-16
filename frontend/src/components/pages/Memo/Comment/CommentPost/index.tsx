import Button from '@/components/common/Button';

const CommentPost = () => {
  return (
    <div className="flex">
      <textarea className="textarea textarea-bordered textarea-xs w-full max-w-xs" />
      <Button classProp={'ml-3'}>등록</Button>
    </div>
  );
};

export default CommentPost;
