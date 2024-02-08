import * as S from './styles';
import { Container } from '../../../styles/global';
import { useContext, useEffect } from 'react';

import { BrewContext } from '../../../context/BrewContext';
import BrewCard from '../../../components/BrewCard';

const Products = () => {
  const { brewData, getAllBrews } = useContext(BrewContext);

  useEffect(() => {
    getAllBrews();
  }, []);

  return (
    <S.ProductsSection>
      <Container>
        <S.Title>Nossas cervejas</S.Title>
        <S.Subtitle>pra saborear com moderação</S.Subtitle>
        {brewData ? (
          <S.ProductsContainer data-testid="products">
            {brewData.map((brew) => (
              <BrewCard key={brew.id} brew={brew} />
            ))}
          </S.ProductsContainer>
        ) : (
          <p>Pedimos desculpas! Já beberam todas nossas cervejas!</p>
        )}
      </Container>
    </S.ProductsSection>
  );
};

export default Products;
