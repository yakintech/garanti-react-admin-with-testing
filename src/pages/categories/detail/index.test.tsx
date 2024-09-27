import { render, screen } from "@testing-library/react";
import Detail from "./index";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

const mockData = {
  id: 1,
  name: "Test Category",
  description: "This is a test category",
};

(useParams as jest.Mock).mockReturnValue({ id: "1" });
(useQuery as jest.Mock).mockReturnValue({ data: mockData });

test("renders Detail component with correct data", () => {
  render(<Detail />);

//   // Verify the heading
   expect(screen.getByText("Detail Category")).toBeInTheDocument();

  // Verify the category name and description
  expect(screen.getByText(mockData.name)).toBeInTheDocument();
  expect(screen.getByText(mockData.description)).toBeInTheDocument();
});