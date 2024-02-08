import styled from 'styled-components';

export const Product = styled.div`
  padding: 1.25rem;
  border-radius: 1.25rem;
  background: ${(props) => props.theme.primary_light};
  color: ${(props) => props.theme.primary_dark};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Image = styled.img`
  height: 180px;
  object-fit: contain;
  margin: 0.75rem;
`;

export const Name = styled.h3`
  font-size: 1.25rem;
  margin: 0.5rem;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ActionContainer = styled.div`
  margin-top: auto;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;

  input {
    border: none;
    border-radius: 8px;
    margin: 0;
    width: 60px;
    font-size: 1.25rem;
    text-align: center;
    font-weight: 700;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.primary_dark};
    color: ${(props) => props.theme.primary_light};
    font-size: 1.25rem;
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const BuyButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  width: 100%;
  background: ${(props) => props.theme.primary_dark};
  color: ${(props) => props.theme.primary_light};
  font-size: 1.25rem;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
