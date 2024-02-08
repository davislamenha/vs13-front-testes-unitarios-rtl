import styled from 'styled-components';

export const ProductsSection = styled.main`
  background-color: ${(props) => props.theme.accent_light};
  padding: 4rem 0;
  flex: 1;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Subtitle = styled.span`
  display: block;
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

export const ProductsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(260px, 300px));
  gap: 2.5rem;
`;
