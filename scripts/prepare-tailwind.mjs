// Hugo 0.162 does not recognize pnpm's ../.pnpm binary paths.
// Point the local CLI wrapper at the existing, installed package entry instead.
// Hugo still invokes Tailwind through its normal Node permission sandbox.
import { mkdir, writeFile, chmod, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
await access(new URL('node_modules/@tailwindcss/cli/dist/index.mjs', root));
const bin = new URL('node_modules/.bin/', root);
await mkdir(bin, { recursive: true });
const entry = new URL('tailwindcss', bin);
await writeFile(entry, '#!/usr/bin/env node\nimport("../@tailwindcss/cli/dist/index.mjs");\n');
await chmod(fileURLToPath(entry), 0o755);
if (process.platform === 'win32') {
  await writeFile(new URL('tailwindcss.cmd', bin), '@node "%~dp0\\..\\@tailwindcss\\cli\\dist\\index.mjs" %*\r\n');
}
