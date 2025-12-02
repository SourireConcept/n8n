#!/usr/bin/env node

const { spawn } = require('child_process');

const n8nProcess = spawn('pnpm', ['--filter', 'n8n', 'start'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

n8nProcess.on('close', (code) => {
  console.log(`n8n exited with code ${code}`);
  process.exit(code);
});
