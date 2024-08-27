import Component from "#components/Component";
import { render, screen } from "@testing-library/react";
import { vi, it, expect } from "vitest";
import React from "react";
import { service } from "#utils/service.mock";

const setup = () => {
  render(<Component />);
};

it("yes mock", async () => {
  service.apiOne.mockReturnValue(Promise.resolve("api one mock"));

  setup();
  expect(await screen.findByText(/api one mock/)).toBeInTheDocument();
});
