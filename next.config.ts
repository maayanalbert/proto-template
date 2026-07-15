import type { NextConfig } from "next";
import { withPrototype } from "proto-plugin/with-prototype";

export default withPrototype({
  nextConfig: {
    transpilePackages: ["proto-plugin", "ui", "ui-patterns"],
  },
});
