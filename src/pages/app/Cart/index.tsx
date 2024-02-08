import { useContext } from 'react';
import { Delete } from '@mui/icons-material';

import { Container } from '../../../styles/global';
import * as S from './styles';
import { CartContext } from '../../../context/CartContext';

const Cart = () => {
  const { cartProducts, totalPrice, removeProductCart } =
    useContext(CartContext);

  return (
    <S.CartContainer>
      <Container>
        <h1>Carrinho</h1>
        <S.CartProductContainer>
          <div>
            <span>produto</span>
            <span>nome</span>
            <span>quantidade</span>
            <span>valor</span>
            <span>ações</span>
          </div>
          {cartProducts.length ? (
            cartProducts.map((product) => {
              return (
                <S.CartProduct key={product.id}>
                  <img src={product.image_url} alt={product.name} />
                  <h3>{product.name}</h3>
                  <span>{product.quantity}</span>
                  <span>
                    {product.volume.value.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeProductCart(product.id)}
                  >
                    <Delete sx={{ fontSize: '2rem' }} />
                    Remover
                  </button>
                </S.CartProduct>
              );
            })
          ) : (
            <p>
              Eiii!! Não esquece das cervejas, você ainda não adicionou nenhuma
              no carrinho!
            </p>
          )}
        </S.CartProductContainer>
        <S.Summary>
          <p>Total:</p>
          <span data-testid="total-price">
            {totalPrice.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </S.Summary>
      </Container>
    </S.CartContainer>
  );
};

export default Cart;
