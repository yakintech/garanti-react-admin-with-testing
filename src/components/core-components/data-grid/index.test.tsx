import React from 'react';
import { render } from '@testing-library/react';
import GDataGrid from './index';

describe('GDataGrid Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<GDataGrid rows={[]} columns={[]} />);
        expect(container).toBeInTheDocument();
    });

    it('renders DataGrid with correct props', () => {
        const rows = [{ id: 1, name: 'Test' }];
        const columns = [{ field: 'name', headerName: 'Name', width: 150 }];
        const { getByRole } = render(<GDataGrid rows={rows} columns={columns} />);
        
        const dataGrid = getByRole('grid');
        expect(dataGrid).toBeInTheDocument();
    });
});