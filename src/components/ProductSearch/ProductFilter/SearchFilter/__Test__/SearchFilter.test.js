import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchFilter from '../index';

describe('SearchFilter Component', () => {
  const mockOnSearchFilter = jest.fn();
  const mockOnFilter = jest.fn();
  const mockProducts = [
    { title: 'Product 1' },
    { title: 'Product 2' },
    { title: 'Another Product' }
  ];

  beforeEach(() => {
    render(
      <SearchFilter
        products={mockProducts}
        onSearchFilter={mockOnSearchFilter}
        onFilter={mockOnFilter}
      />
    );
  });

  it('should render input field and filter button', () => {
    expect(screen.getByLabelText('Search products')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onFilter when filter button is clicked', () => {
    userEvent.click(screen.getByRole('button'));
    expect(mockOnFilter).toHaveBeenCalled();
  });

  it('should clear input field on blur', () => {
    const input = screen.getByLabelText('Search products');
    userEvent.type(input, 'Product');
    fireEvent.blur(input);
    expect(input.value).toBe('');
  });
});
