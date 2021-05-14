import { render } from '@testing-library/react';
import Homepage from '../pages/Homepage';

it('renders the Homepage component without crashing', () => {
  render(<Homepage />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Homepage />);
  expect(asFragment()).toMatchSnapshot();
});
