import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let getByTestId;

beforeEach(() => {
  const view = render(<App />);

  getByTestClass = view.getByTestClass;
});

describe("UI Test", () => {
  test("header render with correct text", () => {
    const headerEl = screen.getByTestClass("btn-web");

    expect(headerEl.textContent).toBe("Mulai Sewa Mobil");
  });
});
