import { service as actualService } from "./service";

export const service = {
  ...actualService,
  apiOne: () => {
    console.log("mocked");
    return Promise.resolve("api one mock");
  },
};
