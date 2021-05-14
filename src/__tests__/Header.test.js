import { render } from '@testing-library/react';
import Header from '../components/Header';

it('renders without crashing', () => {
  render(<Header />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
