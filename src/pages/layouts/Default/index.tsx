import { Outlet } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { BrewProvider } from '../../../context/BrewContext';
import { CartProvider } from '../../../context/CartContext';

function DefaultLayout() {
  return (
    <>
      <CartProvider>
        <BrewProvider>
          <Header />

          <Outlet />

          <Footer />
        </BrewProvider>
      </CartProvider>
    </>
  );
}

export default DefaultLayout;
