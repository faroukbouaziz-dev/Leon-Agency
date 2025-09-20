import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgDir = path.join(__dirname, "../src/assets/svg");
const files = fs.readdirSync(svgDir).filter((f) => f.endsWith(".svg"));

const exports = files
  .map((file) => {
    const name = path.basename(file, ".svg");
    return `export { default as ${name} } from "./${file}";`;
  })
  .join("\n");

fs.writeFileSync(path.join(svgDir, "index.ts"), exports);
console.log("✅ index.ts generated with all SVG exports!");
