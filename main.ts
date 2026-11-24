import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Imagine every library, post office, and market square in the world joined by one road, where any letter arrives in a blink and anyone may speak.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read the output and assert it is
// exactly the entry line (144 characters, one sentence, no trailing newline).
import { readFileSync } from "node:fs";

const EXPECTED =
  "Imagine every library, post office, and market square in the world joined by one road, where any letter arrives in a blink and anyone may speak.";
const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== EXPECTED) throw new Error("entry.txt does not match the expected entry line");
if (readBack.length !== 144) throw new Error(`entry length ${readBack.length}, expected 144`);
if (readBack.endsWith("\n")) throw new Error("entry.txt has a trailing newline");
if (readBack.trim().split(".").filter(Boolean).length !== 1) throw new Error("entry is not one sentence");
console.log("verify: entry.txt OK (144 chars, one sentence, no trailing newline)");
