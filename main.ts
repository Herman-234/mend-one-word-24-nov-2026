// One Word, One Username, One Reward — entry program.
// The competition's own judge brief says the entry is the entrant's
// make.fun username, sent as one word, and that a genuine handle beats
// any invented word (judge criterion 1, most important first).
// So the word written here is the entrant's own handle: herman-234.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "herman-234";
const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, WORD, "utf8");

// Self-check: the sealed gate wants UTF-8 text of 1-30 chars, not only
// whitespace. Read the file back and fail loudly if it is not valid.
const written = readFileSync(outPath, "utf8");
const bytes = Buffer.byteLength(written, "utf8");
if (written.length < 1 || written.length > 30 || written.trim().length === 0) {
  throw new Error(`invalid entry: ${JSON.stringify(written)}`);
}
console.log(`wrote ${written.length} chars (${bytes} bytes) to ${outPath}`);
