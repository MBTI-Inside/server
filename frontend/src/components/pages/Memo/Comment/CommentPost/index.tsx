import Button from '@/components/common/Button';
import { CommentPostArea } from '@/components/pages/Memo/Comment/CommentPost/index.styles';

const CommentPost = () => {
  return (
    <div className="flex mb-3">
      <CommentPostArea />
      <Button classProp={'ml-2 h-10'}>등록</Button>
    </div>
  );
};

export default CommentPost;
