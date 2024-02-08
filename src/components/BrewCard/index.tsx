import { useContext, useState } from 'react';

import * as S from './styles';
import { IBrew } from '../../context/BrewContext';
import { CartContext } from '../../context/CartContext';

interface BrewCardProps {
  brew: IBrew;
}

const BrewCard = ({ brew }: BrewCardProps) => {
  const { addProductToCart } = useContext(CartContext);
  const [brewQuantity, setBrewQuantity] = useState(1);

  const incrementQuantity = () => {
    setBrewQuantity(brewQuantity + 1);
  };

  const decrementQuantity = () => {
    if (brewQuantity > 1) setBrewQuantity(brewQuantity - 1);
  };

  return (
    <S.Product>
      <S.Image src={brew.image_url} alt={brew.name} />
      <S.Name>{brew.name}</S.Name>
      <S.Price>
        {brew.volume.value.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </S.Price>
      <S.ActionContainer>
        <S.QuantityContainer>
          <button type="button" onClick={decrementQuantity}>
            -
          </button>
          <input
            type="number"
            value={brewQuantity}
            onChange={(e) => setBrewQuantity(parseInt(e.target.value))}
            aria-label="quantidade"
          />
          <button type="button" onClick={incrementQuantity}>
            +
          </button>
        </S.QuantityContainer>

        <S.BuyButton
          type="button"
          onClick={() => addProductToCart({ ...brew, quantity: brewQuantity })}
        >
          Comprar
        </S.BuyButton>
      </S.ActionContainer>
    </S.Product>
  );
};

export default BrewCard;
