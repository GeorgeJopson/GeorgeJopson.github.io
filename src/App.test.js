import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test message', () => {
  render(<App />);
  const testMessage = screen.getByText(/This is a test/i);
  expect(testMessage).toBeInTheDocument();
});
