// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from "../components/Counter";


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = parseInt(screen.getByTestId('count').innerHTML);

  userEvent.click(screen.getByText('+'));

  const newCount = parseInt(screen.getByTestId('count').innerHTML);

  expect(newCount - initialCount).toBe(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = parseInt(screen.getByTestId('count').innerHTML);

  userEvent.click(screen.getByText('-'));

  const newCount = parseInt(screen.getByTestId('count').innerHTML);

  expect(initialCount - newCount).toBe(1);
});
