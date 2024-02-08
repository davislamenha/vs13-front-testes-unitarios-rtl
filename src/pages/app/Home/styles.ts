import styled from 'styled-components';

import homeBg from '../../../assets/bg_home.webp';

export const Main = styled.main`
  position: relative;
  flex: 1;
  background: url(${homeBg}) no-repeat;
  background-size: cover;
  background-position: bottom center;

  &::after {
    content: '';
    background-color: black;
    opacity: 0.4;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1.5rem;
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.primary_light};
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.25rem;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  a {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.dark};
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.accent_ligth};
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
