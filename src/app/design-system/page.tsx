import { createPrototypeDesignSystemPage } from "proto-plugin";
import { DesignSystemContent } from "./design-system-content";

export default createPrototypeDesignSystemPage({
  syncConfigPath: "prototype.sync.config.sh",
  designSystemPagePath: "src/app/design-system/design-system-content.tsx",
  children: <DesignSystemContent />,
});
