import styled from 'styled-components';

export const CartContainer = styled.main`
  background-color: ${(props) => props.theme.primary_light};
  flex: 1;
  padding: 4rem 0;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const CartProductContainer = styled.div`
  div {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    align-items: center;
    text-align: center;
    border-radius: 20px;
    background-color: ${(props) => props.theme.light};
    color: ${(props) => props.theme.primary_dark};
    padding: 20px;
    margin-bottom: 1rem;
  }

  p {
    padding: 4rem 0;
    text-align: center;
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    padding: 12px;
  }

  @media (max-width: 767px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const CartProduct = styled.div`
  img {
    height: 120px;
    margin: 0 auto;
  }

  h3 {
    font-size: 1.5rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }

  button {
    padding: 8px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    background: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.primary_dark};
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1024px) {
    img {
      height: 80px;
    }

    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }

    button {
      padding: 4px;
      font-size: 1rem;
    }
  }
`;

export const Summary = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  font-size: 1.5rem;
  margin-top: 40px;

  p {
    font-weight: 700;
  }
`;
