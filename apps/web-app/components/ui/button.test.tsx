import { render, screen } from '@testing-library/react';
import {Button} from './button';
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('renders button', () => {
    render(<Button>Click me!!!</Button>);
    expect(screen.getByRole('button', { name: /Click me!!!/i })).toBeInTheDocument();
  });
});