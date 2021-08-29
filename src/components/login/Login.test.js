import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

it('renders Login', () => {
  render(<Login />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});

it('has the correct href',()=>{
  render(<Login/>);
  expect(screen.getByText('Login').closest('a')).toHaveAttribute('href', '/api/login')
});