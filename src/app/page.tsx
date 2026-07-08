import { createPrototypeGalleryPage } from "proto-plugin/server";

import prototypeConfig from "../../prototype.config";

export default createPrototypeGalleryPage(prototypeConfig, {
  title: "Prototypes",
  description: "UI experiments and concept explorations. Select a prototype to open it.",
});
