import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByRole,
} from "@testing-library/react";
import App from "../App";

test("Adding a new participant should update the list", async () => {
  const { getByLabelText, getByRole } = render(<App />);
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addButton = getByRole("button", { name: /add participant/i });

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.click(addButton);

  await waitFor(() => {
    const johnDoe = getByRole("listitem", {
      name: /john doe/i,
    });
    expect(johnDoe).toBeInTheDocument();
  });
});
