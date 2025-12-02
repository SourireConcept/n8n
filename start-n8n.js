#!/usr/bin/env node
const { spawn } = require('child_process');

console.log('Démarrage de n8n...');

const n8nProcess = spawn('pnpm', ['--filter', '@n8n/n8n', 'start'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

n8nProcess.on('close', (code) => {
  console.log(`n8n terminé avec le code ${code}`);
  process.exit(code);
});
