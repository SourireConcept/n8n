#!/usr/bin/env node
const { spawn } = require('child_process');

const port = process.env.PORT || 5678;

const n8nProcess = spawn('pnpm', ['--filter', '@n8n/n8n', 'start', '--port', port], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

n8nProcess.on('close', (code) => {
  console.log(`n8n terminé avec le code ${code}`);
  process.exit(code);
});
