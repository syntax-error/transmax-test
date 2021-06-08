import {fireEvent, render} from '@testing-library/react';
import SidebarRoutes from "./SidebarRoutes";

test('initially renders as open', () => {
  const { getByTestId } = render(<SidebarRoutes />);
  expect(getByTestId('Sidebar-Routes')).toHaveClass('open');
  expect(getByTestId('Sidebar-Routes')).not.toHaveClass('close');
});

test('changes to closed on header click', () => {
  const { getByText, getByTestId } = render(<SidebarRoutes />);
  fireEvent.click(getByText('Delayed Routes'));
  expect(getByTestId('Sidebar-Routes')).toHaveClass('close');
  expect(getByTestId('Sidebar-Routes')).not.toHaveClass('open');
});
