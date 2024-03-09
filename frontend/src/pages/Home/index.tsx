import { NavLink } from 'react-router-dom';

import Character from '@/components/pages/Home/Character';

import * as S from './index.styles';

const Home = () => {
  return (
    <S.Container>
      <Character />
      <S.ContentWrapper>
        <S.Title>ARE YOU T?</S.Title>
        {/* TODO: 버튼 daisyUI로 공통 컴포넌트로 만들기. */}
        <S.Button>
          <NavLink to="/test">테스트 하러가기</NavLink>
        </S.Button>
        <S.Button>
          <NavLink to="/stats">통계 보러가기</NavLink>
        </S.Button>
        <S.Button>
          <NavLink to="/board">담벼락 보러가기</NavLink>
        </S.Button>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Home;
