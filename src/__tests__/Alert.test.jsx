import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert component", () => {
  it("displays an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);

    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  it("displays a success message", () => {
    const { getByText } = render(<Alert message="Success!" />);

    expect(getByText(/Success/).textContent).toBe("Success!");
  });

  it("doesn't render the alert when message is falsy", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });

  it("tests it renders when successful", () => {
    const { asFragment } = render(<Alert message="Success!" success />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });

  it("tests it renders when error", () => {
    const { asFragment } = render(<Alert message="Error!" success={false} />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
