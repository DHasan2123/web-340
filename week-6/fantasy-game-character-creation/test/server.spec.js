const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here
const request = (url, method = 'GET', data = null) => {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'localhost',
        port: 3000,
        path: url,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data ? Buffer.byteLength(data) : 0,
        }
      };
  
      const req = http.request(options, (res) => {
        let responseData = '';
        res.on('data', chunk => {
          responseData += chunk;
        });
  
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            body: responseData,
          });
        });
      });
  
      req.on('error', (e) => reject(e));
  
      if (data) {
        req.write(data);
      }
  
      req.end();
    });
  };
  
  describe('Server tests', () => {
    // Tests that run before all tests
    beforeAll((done) => {
      // Start the server
      server.listen(3000, () => {
        done();
      });
    });
  
    // Tests that run after all tests
    afterAll(() => {
      // Close the server after tests
      server.close();
    });
  
    // Test the POST /create-character route
    it('should create a character via POST /create-character', async () => {
      const characterData = JSON.stringify({
        class: 'Warrior',
        gender: 'Male',
        funFact: 'I love sword fighting!'
      });
  
      const response = await request('/create-character', 'POST', characterData);
  
      expect(response.statusCode).toBe(201);
      const responseBody = JSON.parse(response.body);
      expect(responseBody.message).toBe('Character created successfully!');
      expect(responseBody.character).toEqual({
        class: 'Warrior',
        gender: 'Male',
        funFact: 'I love sword fighting!'
      });
    });
  
    // Test the POST /confirm-character route
    it('should confirm character creation via POST /confirm-character', async () => {
      const response = await request('/confirm-character', 'POST');
  
      expect(response.statusCode).toBe(200);
      const responseBody = JSON.parse(response.body);
      expect(responseBody.message).toBe('Character creation confirmed');
    });
  
    // Test the GET /character route
    it('should retrieve the created character via GET /character', async () => {
      const response = await request('/character', 'GET');
  
      expect(response.statusCode).toBe(200);
      const character = JSON.parse(response.body);
      expect(character.class).toBe('Warrior');
      expect(character.gender).toBe('Male');
      expect(character.funFact).toBe('I love sword fighting!');
    });
  
    // Test GET /character when no character is created
    it('should return a 404 error if no character is created', async () => {
      // To simulate no character being created, we first stop the server
      server.close();
  
      const response = await request('/character', 'GET');
  
      expect(response.statusCode).toBe(404);
      const responseBody = JSON.parse(response.body);
      expect(responseBody.message).toBe('No character created yet');
    });
  });