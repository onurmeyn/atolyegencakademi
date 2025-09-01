import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/SIRADA SENİN BAŞARI HİKAYEN VAR/i);
  expect(linkElement).toBeInTheDocument();
});
