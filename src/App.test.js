import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test message', () => {
  render(<App />);
  const title = screen.getByText(/George Jopson/i);
  expect(title).toBeInTheDocument();
});
