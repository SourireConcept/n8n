import { spawn } from 'child_process';
import path from 'path';

export default async (req, res) => {
  // Proxy requests to n8n running on localhost:5678
  const n8nUrl = 'http://localhost:5678';
  
  try {
    const response = await fetch(n8nUrl + req.url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' ? req.body : undefined,
    });
    
    const contentType = response.headers.get('content-type');
    res.setHeader('Content-Type', contentType || 'application/json');
    
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(503).json({
      error: 'Service unavailable',
      message: 'n8n is not accessible'
    });
  }
};
