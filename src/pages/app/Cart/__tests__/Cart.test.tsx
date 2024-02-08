import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CartContext } from '../../../../context/CartContext';
import Cart from '..';

const mockCartProducts = [
  {
    id: 1,
    name: 'Skol',
    quantity: 2,
    volume: {
      value: 30,
    },
    image_url: '',
  },
  {
    id: 2,
    name: 'Heineken',
    quantity: 1,
    volume: {
      value: 50,
    },
    image_url: '',
  },
];

const customWrapper = ({ children }: { children: React.ReactNode }) => {
  const totalPrice = mockCartProducts.reduce((acc, curr) => {
    return acc + curr.quantity * curr.volume.value;
  }, 0);

  const removeProductCart = vi.fn();
  const addProductToCart = vi.fn();

  return (
    <CartContext.Provider
      value={{
        cartProducts: mockCartProducts,
        totalPrice,
        removeProductCart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

describe('Cart Page', () => {
  render(<Cart />, { wrapper: customWrapper });
  it('should render Cart page', () => {
    expect(screen.getByText('Carrinho')).toBeDefined();
  });

  it('should render cart products and total price', () => {
    expect(screen.getByText('Skol')).toBeDefined();
    expect(screen.getByText('Heineken')).toBeDefined();
    expect(screen.getByTestId('total-price')).toBeDefined();
  });
});
