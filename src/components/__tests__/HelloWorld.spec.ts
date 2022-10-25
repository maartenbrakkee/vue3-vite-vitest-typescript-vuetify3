import { describe, it } from "vitest";
import { render } from "@testing-library/vue";
import { globalPlugins } from "@/utils/testPlugins";

import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const options = {
    global: {
      // extendable array that includes the default plugins
      plugins: [...globalPlugins],
    },
    props: {
      message: "I am a Vuetify button",
    },
  };

  it("renders props.message", () => {
    const { getByText } = render(HelloWorld, options);

    getByText(options.props.message);
  });
});
