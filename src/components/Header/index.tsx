import { NavLink } from 'react-router-dom';

import { Container } from '../../styles/global';
import { ShoppingCart, SportsBar } from '@mui/icons-material';

import * as S from './styles';

const Header = () => {
  const iconStyles = {
    fontSize: '2rem',
  };

  return (
    <S.HeaderContainer>
      <Container>
        <NavLink to="/" className="logo">
          <SportsBar sx={iconStyles} />
          <span>Cervejaria</span>
        </NavLink>
        <S.Navigation>
          <ul>
            <li>
              <NavLink to="/">Início</NavLink>
            </li>
            <li>
              <NavLink to="/produtos" data-testid="products-link">
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink to="/carrinho" aria-label="carrinho de compras">
                <ShoppingCart
                  sx={iconStyles}
                  aria-label="icone de carrinho de compras"
                />
              </NavLink>
            </li>
          </ul>
        </S.Navigation>
      </Container>
    </S.HeaderContainer>
  );
};

export default Header;
