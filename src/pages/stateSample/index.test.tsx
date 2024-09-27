import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StateSample from './index';

test('initial counter value is 0', () => {
    render(<StateSample />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
});

test('increments counter value', () => {
    render(<StateSample />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
});

test('decrements counter value', () => {
    render(<StateSample />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const counterElement = screen.getByText(/Counter: -1/i);
    expect(counterElement).toBeInTheDocument();
});