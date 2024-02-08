import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import Footer from '..';

describe('Footer Component', () => {
  render(<Footer />, { wrapper: BrowserRouter });
  it('should render footer', () => {
    expect(screen.getByTestId('footer')).toBeDefined();
  });
});
