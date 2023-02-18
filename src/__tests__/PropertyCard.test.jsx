import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard element and its props", () => {
  it("renders the component within another component", () => {
    const { asFragment } = render(<PropertyCard />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the props correctly", () => {
    render(
      <PropertyCard
        type="flat"
        title="Resident Evil"
        bathrooms="2"
        bedrooms="2"
        email="hey@gmail.com"
        price="2000"
        city="Manchester"
      />
    );

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
});
