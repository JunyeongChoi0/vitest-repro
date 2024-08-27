import Component from "#components/Component";
import { service } from "#utils/service.mock";

export default {
  title: "test component",
  component: Component,
};

export const Default = {
  async beforeEach() {
    service.apiOne.mockReturnValue(Promise.resolve("api one mock"));
  },
};
