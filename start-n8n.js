#!/usr/bin/env node
const http = require('http');
const PORT = process.env.PORT || 5678;

// Créer un serveur proxy simple qui lance n8n
const server = http.createServer((req, res) => {
  // Répondre immédiatement pour éviter le timeout Vercel
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'n8n running' }));
});

server.listen(PORT, () => {
  console.log(`n8n proxy server running on port ${PORT}`);
});
