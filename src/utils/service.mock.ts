// import { vi } from "vitest";
import { fn } from "@storybook/test";
import { service as actualService } from "./service";

export const service = {
  ...actualService,
  apiOne: fn(actualService.apiOne).mockName("apiOne"),
};
