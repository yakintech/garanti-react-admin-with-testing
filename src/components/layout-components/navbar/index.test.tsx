import { render } from "@testing-library/react";
import Navbar from ".";


test("renders without crashing Navbar", () => {
    const { container } = render(<Navbar />);
    expect(container).toBeInTheDocument();
}
);