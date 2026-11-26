// The Painfully Honest Out-of-Office — make.fun entry.
// Writes one brutally honest but still polite OOO auto-reply (<=200 chars,
// single sentence) to /output/entry.txt and verifies it against the gate.
//
// The reply admits, in one warm sentence, what an employee would only say
// privately: the inbox is 400 deep and the "already read it" pose is a bluff
// — then thanks the sender, so a manager can let it stand.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// Named parts of the single-sentence reply, assembled by buildEntry().
const PARTS = {
  absence: "I am out of the office until Monday",
  confession:
    "and honestly my inbox is 400 emails deep, so I will reply to yours the moment I stop pretending I have already read them",
  courtesy: "thank you for your patience",
} as const;

function buildEntry(): string {
  return `${PARTS.absence}, ${PARTS.confession} — ${PARTS.courtesy}.`;
}

interface GateReport {
  characters: number;
  sentences: number;
  valid: boolean;
}

function validateEntry(text: string): GateReport {
  const characters = [...text].length;
  const sentences = text
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0).length;
  const valid =
    characters >= 1 && characters <= 200 && text.trim().length > 0 && sentences === 1;
  return { characters, sentences, valid };
}

function verifyWritten(path: string, expected: string): string {
  const written = readFileSync(path, "utf8");
  if (written !== expected) throw new Error("verify: written entry differs");
  return createHash("sha256").update(written, "utf8").digest("hex");
}

const ENTRY = buildEntry();
const report = validateEntry(ENTRY);
if (!report.valid) {
  throw new Error(
    `gate: ${report.characters} chars, ${report.sentences} sentences — must be 1-200 chars, 1 sentence`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
const sha = verifyWritten(outPath, ENTRY);
console.log(
  `gate passes: ${report.characters} characters, ${report.sentences} sentence, sha256 ${sha}`,
);
console.log(`verified: ${JSON.stringify(ENTRY)}`);
