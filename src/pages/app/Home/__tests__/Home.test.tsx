import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

import Home from '..';

describe('Home Page', () => {
  render(<Home />, { wrapper: BrowserRouter });
  it('should render Home page', () => {
    expect(
      screen.getByText('Vai comemorar? conte com as melhores cervejas!'),
    ).toBeDefined();
  });

  it('should navigate to products page', async () => {
    const ourBrewsLink = screen.getByText('Nossas Cervejas');
    await userEvent.click(ourBrewsLink);

    const currentUrl = window.location.href.split('localhost:3000')[1];

    expect(currentUrl).toBe('/produtos');
  });
});
