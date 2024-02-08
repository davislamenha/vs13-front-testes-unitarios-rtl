import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrewContext } from '../../../../context/BrewContext';
import Products from '..';

const mockBrewData = [
  {
    id: 1,
    name: 'Skol',
    volume: {
      value: 30,
    },
    image_url: '',
  },
  {
    id: 2,
    name: 'Heineken',
    volume: {
      value: 50,
    },
    image_url: '',
  },
];

const customWrapper = ({ children }: { children: React.ReactNode }) => {
  const getAllBrews = vi.fn();
  return (
    <BrewContext.Provider value={{ brewData: mockBrewData, getAllBrews }}>
      {children}
    </BrewContext.Provider>
  );
};

describe('Products Page', () => {
  render(<Products />, { wrapper: customWrapper });
  it('should render Products page title', () => {
    expect(screen.getByText('Nossas cervejas')).toBeDefined();
  });

  it('should render Products page brew cards', async () => {
    const skol = screen.getByText('Skol');
    const products = screen.getAllByTestId('products');

    expect(skol).toBeDefined();
    expect(products).toBeDefined();
  });
});
