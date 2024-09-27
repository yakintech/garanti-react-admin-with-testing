import { render } from "@testing-library/react";
import List from ".";
import { useQuery } from '@tanstack/react-query';
import { OrderModel } from './models/OrderModel';



jest.mock('@tanstack/react-query');
jest.mock('../../../components/core-components/data-grid', () => (props: any) => (
    <div data-testid="GDataGrid" {...props} />
));

const mockData: OrderModel[] = [
    { id: 1, customerId: "101", orderDate: '2023-01-01', shippedDate: '2023-01-02', requiredDate: '2023-01-03' },
    { id: 2, customerId: "102", orderDate: '2023-02-01', shippedDate: '2023-02-02', requiredDate: '2023-02-03' }
];

(useQuery as jest.Mock).mockImplementation(() => ({ data: mockData, isLoading: false }));

test("renders without crashing", () => {
    const { container } = render(<List />);
    expect(container).toBeInTheDocument();
});

// test("renders GDataGrid with correct data", () => {
//     const { getByTestId } = render(
    
//     <List />

// );
//     const grid = getByTestId('GDataGrid');
//     expect(grid).toBeInTheDocument();
//     expect(grid).toHaveProperty('rows', mockData);
// });
