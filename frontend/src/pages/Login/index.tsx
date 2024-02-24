import * as S from '@/pages/Login/index.styles';

import Google from '@/assets/google.png';
import MainLogoSvg from '@/assets/image/test.svg?react';
import Kakao from '@/assets/kakao.png';
import Naver from '@/assets/naver.png';

const Login = () => {
  return (
    <div className="flex flex-col">
      <div>
        Logo
        <MainLogoSvg />
      </div>
      <img
        width={60}
        height={60}
        src={Naver}
        alt="Naver Login"
        onClick={() => alert('naver')}
      />
      <img
        width={60}
        height={60}
        src={Kakao}
        alt="Kakao Login"
        onClick={() => alert('kakao')}
      />
      <div>
        <img
          width={60}
          height={60}
          src={Google}
          alt="google Login"
          onClick={() => alert('google')}
        />
      </div>
      <div>로그인 안해도 테스트 가능해요</div>
    </div>
  );
};

export default Login;
