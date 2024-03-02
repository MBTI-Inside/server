import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col my-5">
      <Character bgcolor="#00B26E" gcolor="#F9BAAC" />
      <h3
        className="font-bold
            text-6xl
            text-center
            pb-[60px]
            text-[#000]
            bg-[#00B26E]"
      >
        Not Found 😅
      </h3>
      <Button onClick={() => navigate('/')}>홈으로</Button>
    </div>
  );
}
