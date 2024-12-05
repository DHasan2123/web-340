const http = require('http');
const url = require('url');

let character = null;
// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedUrl = url.parse(req.url, true);  // Parse the URL
  const pathname = parsedUrl.pathname;  // Get the pathname of the URL

  // POST /create-character: Create a new character
  if (pathname === '/create-character' && req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk;  // Collect data from the request
    });

    req.on('end', () => {
      // Parse the incoming data and create a character object
      const { class: charClass, gender, funFact } = JSON.parse(body);
      character = { class: charClass, gender, funFact };  // Store character data

      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character created successfully!', character }));
    });

  } 
  // POST /confirm-character: Confirm character creation
  else if (pathname === '/confirm-character' && req.method === 'POST') {
    if (!character) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'No character created yet' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Character creation confirmed' }));
    }

  } 
  // GET /character: Retrieve the created character
  else if (pathname === '/character' && req.method === 'GET') {
    if (!character) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'No character created yet' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    }
  } 
  // Route not found
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;