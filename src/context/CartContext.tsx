import { createContext, useState } from 'react';
import { IBrew } from './BrewContext';

interface CartProduct extends IBrew {
  quantity: number;
}

interface CartContext {
  cartProducts: CartProduct[] | [];
  addProductToCart: (product: CartProduct) => void;
  removeProductCart: (idProductToDelete: number) => void;
  totalPrice: number;
}

export const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const totalPrice = cartProducts
    .map((product) => product.volume.value * product.quantity)
    .reduce((acc, total) => acc + total, 0);

  function addProductToCart(product: CartProduct) {
    const alreadyInCart = cartProducts.find((brew) => brew.id === product.id);

    if (alreadyInCart) {
      setCartProducts((state) =>
        state.map((brew) =>
          brew.id === product.id
            ? { ...brew, quantity: brew.quantity + product.quantity }
            : brew,
        ),
      );
    } else {
      setCartProducts((state) => [...state, product]);
    }
  }

  function removeProductCart(id: number) {
    setCartProducts((state) => state.filter((brew) => id !== brew.id));
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
