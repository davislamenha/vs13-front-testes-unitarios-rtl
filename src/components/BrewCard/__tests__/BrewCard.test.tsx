import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import BrewCard from '..';
import userEvent from '@testing-library/user-event';

const brew = {
  id: 1,
  name: 'Skol',
  volume: {
    value: 30,
  },
  image_url: '',
};

describe('BrewCard Component', () => {
  render(<BrewCard brew={brew} />, { wrapper: BrowserRouter });
  it('should render the brew', () => {
    expect(screen.getByText('Skol')).toBeDefined();
  });

  it('should render change quantity', async () => {
    const addQuantity = screen.getByText('+');
    await userEvent.click(addQuantity);
    const quantity = screen.getByLabelText('quantidade').value;

    expect(quantity).toBe('2');
  });
});
