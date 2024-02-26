import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from 'components/ui/button/button';

describe('Button', () => {
  it('renders button', () => {
    render(<Button>Click me!!!</Button>);
    expect(
      screen.getByRole('button', { name: /Click me!!!/i })
    ).toBeInTheDocument();
  });
});
