import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I deployed to production because the tests passed. All zero of them. I counted twice to be sure.";

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
}

writeEntry(EXCUSE);
