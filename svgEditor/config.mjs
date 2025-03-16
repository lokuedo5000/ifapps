import path from "path";
import { fileURLToPath } from "url";

function getRootFolder(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = path.dirname(__filename);
  return path.basename(__dirname);
}

export default {
  name: getRootFolder(import.meta.url),
  version: "1.0",
  author: "NodeCreativo",
  description: "Un editor de imágenes SVG simple y fácil que usa (Fabric.js)",
  license: "MIT",
  start: {
    installer: false,
  },
  dependencies: [],
  devDependencies: [],
};
