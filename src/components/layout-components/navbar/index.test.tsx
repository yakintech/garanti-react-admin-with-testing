import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./index";

test("renders Navbar with correct links", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    const ordersLink = screen.getByText('Orders');
    const categoriesLink = screen.getByText('Categories');

    expect(ordersLink).toBeInTheDocument();
    expect(ordersLink.closest('a')).toHaveAttribute('href', '/orders');

    expect(categoriesLink).toBeInTheDocument();
    expect(categoriesLink.closest('a')).toHaveAttribute('href', '/categories');
});