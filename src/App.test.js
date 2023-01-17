import { render, screen } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText('Looking forward to joining the pool.';
//  expect(linkElement).toBeInTheDocument();
//});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(getByText('Looking forward to joining the pool.')).toBeInTheDocument();

});