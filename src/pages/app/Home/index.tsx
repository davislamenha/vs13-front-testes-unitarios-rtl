import { NavLink } from 'react-router-dom';

import * as S from './styles';

const Home = () => {
  return (
    <S.Main>
      <S.ContentContainer>
        <h1>Vai comemorar? conte com as melhores cervejas!</h1>
        <p>A cervejaria mais premiada de 2024, qualidade garantida!</p>
        <NavLink to="/produtos">Nossas Cervejas</NavLink>
      </S.ContentContainer>
    </S.Main>
  );
};

export default Home;
