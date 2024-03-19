// Imports
import { render, screen, fireEvent } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");
  const codeCount = screen.queryByText(/count is/);

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe("count is 0");
  // Instead of:
  // expect(codeCount).toBeNull();
  expect(codeCount).not.toBeInTheDocument();

  // Init
  fireEvent.click(buttonCount);
  fireEvent.click(buttonCount);

  // Post Expectations
  expect(buttonCount.innerHTML).toBe("count is 2");
  expect(screen.getByText(/The count is now:/)).toBeInTheDocument();
});