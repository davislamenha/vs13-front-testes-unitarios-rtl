import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.primary_dark};

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 2rem;
      color: ${(props) => props.theme.accent};

      span {
        color: ${(props) => props.theme.light};
        transition: all 0.3s;
      }

      &:hover span {
        color: ${(props) => props.theme.accent};
        letter-spacing: 2px;
      }
    }

    @media (max-width: 767px) {
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.25rem;

    a {
      color: ${(props) => props.theme.light};
      margin: 0 -0.25rem;
      padding: 0 0.25rem;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.accent};
      }
    }
  }
`;
