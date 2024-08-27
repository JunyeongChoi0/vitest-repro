import Component from "#components/Component";
import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import React from "react";


const setup = () => {
  render(<Component />);
};

it("yes mock", async () => {
  setup();
  expect(await screen.findByText(/api one mock/)).toBeInTheDocument();
});
