
import React from 'react';
import { render } from '@testing-library/react';
import GButton from './index';
import { colors } from '@mui/material';

describe('GButton Component', () => {
    it('renders with primary buttonType', () => {
        const { getByRole } = render(<GButton buttonType="primary">Primary</GButton>);
        const button = getByRole('button');
        expect(button).toHaveStyle(`background-color: ${colors.blue[500]}`);
        expect(button).toHaveStyle(`color: ${colors.common.white}`);
    });

    it('renders with secondary buttonType', () => {
        const { getByRole } = render(<GButton buttonType="secondary">Secondary</GButton>);
        const button = getByRole('button');
        expect(button).toHaveStyle(`background-color: ${colors.grey[500]}`);
        expect(button).toHaveStyle(`color: ${colors.common.white}`);
    });

    it('renders with danger buttonType', () => {
        const { getByRole } = render(<GButton buttonType="danger">Danger</GButton>);
        const button = getByRole('button');
        expect(button).toHaveStyle(`background-color: ${colors.red[500]}`);
        expect(button).toHaveStyle(`color: ${colors.common.white}`);
    });

    it('renders with success buttonType', () => {
        const { getByRole } = render(<GButton buttonType="success">Success</GButton>);
        const button = getByRole('button');
        expect(button).toHaveStyle(`background-color: ${colors.green[500]}`);
        expect(button).toHaveStyle(`color: ${colors.common.white}`);
    });
});