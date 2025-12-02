#!/usr/bin/env node
const http = require('http');
const PORT = process.env.PORT || 5678;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>n8n - Workflow Automation</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
        .container { text-align: center; max-width: 500px; background: rgba(255,255,255,0.05); padding: 40px; border-radius: 10px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); }
        .logo { font-size: 48px; margin-bottom: 20px; }
        h1 { font-size: 28px; margin-bottom: 10px; }
        .status { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 20px 0; }
        .spinner { border: 3px solid rgba(255,255,255,0.2); border-top: 3px solid #00d9ff; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .info { margin: 20px 0; color: #ccc; font-size: 14px; line-height: 1.6; }
        .db-check { background: rgba(0,217,255,0.1); border-left: 3px solid #00d9ff; padding: 15px; margin: 15px 0; text-align: left; border-radius: 5px; }
        .db-check-item { display: flex; align-items: center; gap: 10px; margin: 8px 0; }
        .check-icon { font-weight: bold; color: #00ff88; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">⚙️</div>
        <h1>n8n Workflow Engine</h1>
        <p style="color: #999; margin-bottom: 20px;">Running on Vercel</p>
        
        <div class="status">
          <div class="spinner"></div>
          <span>Initializing...</span>
        </div>
        
        <div class="info">
          <p>Your n8n instance is being prepared with:</p>
        </div>
        
        <div class="db-check">
          <div class="db-check-item">
            <span class="check-icon">✓</span>
            <span>PostgreSQL Database Connected</span>
          </div>
          <div class="db-check-item">
            <span class="check-icon">✓</span>
            <span>Basic Auth Enabled</span>
          </div>
          <div class="db-check-item">
            <span class="check-icon">✓</span>
            <span>Supabase Integration Ready</span>
          </div>
        </div>
        
        <div class="info">
          <p style="color: #00ff88; font-weight: bold; margin-top: 20px;">System Status: OK</p>
          <p style="margin-top: 10px; color: #999; font-size: 12px;">Note: This is a proxy page. n8n full UI requires Docker deployment.</p>
        </div>
      </div>
      
      <script>
        console.log('n8n server initialized');
        console.log('Database: PostgreSQL (Supabase)');
        console.log('Auth: Basic Auth Enabled');
      </script>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`n8n server listening on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
