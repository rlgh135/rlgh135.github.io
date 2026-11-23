import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(projectRoot, "dist");
const generatedAssets = resolve(projectRoot, "assets");

await rename(resolve(distDir, "source.html"), resolve(distDir, "index.html"));
const indexHtml = `${(await readFile(resolve(distDir, "index.html"), "utf8")).trimEnd()}\n`;
await writeFile(resolve(distDir, "index.html"), indexHtml);
await rm(generatedAssets, { recursive: true, force: true });
await mkdir(generatedAssets, { recursive: true });
await cp(resolve(distDir, "assets"), generatedAssets, { recursive: true });
await writeFile(resolve(projectRoot, "index.html"), indexHtml);
await cp(resolve(distDir, "favicon.svg"), resolve(projectRoot, "favicon.svg"));
await writeFile(resolve(projectRoot, ".nojekyll"), "");

