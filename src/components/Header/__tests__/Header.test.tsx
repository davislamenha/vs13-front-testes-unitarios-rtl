import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

import Header from '..';

describe('Header Component', () => {
  render(<Header />, { wrapper: BrowserRouter });
  it('should render the logo and navigation links', () => {
    expect(screen.getByText('Cervejaria')).toBeDefined();

    expect(screen.getByText('Início')).toBeDefined();
    expect(screen.getByText('Produtos')).toBeDefined();
    expect(screen.getByLabelText('carrinho de compras')).toBeDefined();
  });

  it('should navigate to products page', async () => {
    const productsLink = screen.getByText('Produtos');
    await userEvent.click(productsLink);

    const currentUrl = window.location.href.split('localhost:3000')[1];

    expect(currentUrl).toBe('/produtos');
  });

  it('should navigate to cart page', async () => {
    const cartLink = screen.getByLabelText('carrinho de compras');
    await userEvent.click(cartLink);

    const currentUrl = window.location.href.split('localhost:3000')[1];

    expect(currentUrl).toBe('/carrinho');
  });
});
