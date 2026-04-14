import { rm } from "node:fs/promises";
import path from "node:path";

const targets = [".cache/vite", "node_modules/.vite", ".astro"];

let hadError = false;

for (const target of targets) {
  const fullPath = path.resolve(target);

  try {
    await rm(fullPath, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 200,
    });
    console.log(`[clean-dev-cache] cleaned ${target}`);
  } catch (error) {
    hadError = true;
    console.error(`[clean-dev-cache] failed ${target}: ${error.message}`);
  }
}

if (hadError) {
  console.error(
    "[clean-dev-cache] Some cache paths could not be removed. Close any running astro dev or Node processes, then run this command again.",
  );
  process.exitCode = 1;
}
