import Character from '@/components/common/Character';

import Google from '@/assets/image/google.svg?react';
import Kakao from '@/assets/image/kakao.svg?react';
import Logo from '@/assets/image/logo.svg?react';
import Naver from '@/assets/image/naver.svg?react';

const Login = () => {
  return (
    <div className="flex flex-col bg-[#0272F1] pt-16">
      <div>
        <Character bgcolor="#FF42B3" gcolor="#F9BAAC" />
        <div className="flex flex-col bg-[#FF42B3] items-center gap-2">
          <div className="flex items-center w-5/6 py-1 justify-center gap-4 bg-[#FEE501] rounded-full shadow-lg">
            <Kakao />
            <span className="text-md w-32 text-center">카카오로 함께 하기</span>
          </div>
          <div className="flex items-center w-5/6 py-1 justify-center gap-4 bg-[#03C75A] rounded-full shadow-lg text-white">
            <Naver />
            <span className="text-md w-32 text-center">네이버로 함께 하기</span>
          </div>
          <div className="flex items-center w-5/6 py-1 justify-center gap-4 bg-[#FFFFFF] rounded-full shadow-lg">
            <Google />
            <span className="text-md w-32 text-center">구글로 함께 하기</span>
          </div>
          <div className="flex items-center w-5/6 py-1 justify-center gap-4 bg-[#B2ACF9] rounded-full shadow-lg">
            <Logo />
            <span className="text-md w-32 text-center">그냥 함께 하기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
