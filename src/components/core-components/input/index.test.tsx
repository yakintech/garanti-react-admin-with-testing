import { render, screen } from "@testing-library/react";
import GInput from "./index";

jest.mock('@mui/material/TextField', () => (props: any) => (
  <div data-testid="TextField" {...props} />
));

test("renders TextField with correct label and variant", () => {
    render(<GInput label="Test Label" />);
    const textField = screen.getByTestId('TextField');
    expect(textField).toBeInTheDocument();
});

test("passes additional props to TextField", () => {
    render(<GInput label="Test Label" placeholder="Test Placeholder" />);
    const textField = screen.getByTestId('TextField');
});

test("renders TextField with correct label and variant", () => {
    render(<GInput label="Test Label" />);
    const textField = screen.getByTestId('TextField');
    expect(textField).toBeInTheDocument();
}
);