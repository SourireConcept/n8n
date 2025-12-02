#!/usr/bin/env node

const http = require('http');
const { spawn } = require('child_process');

// Start n8n process
const n8nProcess = spawn('pnpm', ['--filter', 'n8n', 'start'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

// Create HTTP server that proxies to n8n
const server = http.createServer((req, res) => {
  // Give n8n a moment to start
  const options = {
    hostname: 'localhost',
    port: 5678, // Default n8n port
    path: req.url,
    method: req.method,
    headers: req.headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', () => {
    res.statusCode = 503;
    res.end('Service Unavailable - n8n is starting...');
  });

  req.pipe(proxyReq);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`HTTP server listening on port ${PORT}`);
});

n8nProcess.on('close', (code) => {
  console.log(`n8n exited with code ${code}`);
  server.close();
  process.exit(code);
});

// Handle termination
process.on('SIGTERM', () => {
  n8nProcess.kill();
  server.close();
});

process.on('SIGINT', () => {
  n8nProcess.kill();
  server.close();
});
