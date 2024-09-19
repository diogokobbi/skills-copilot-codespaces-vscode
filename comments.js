// Create web server
// 1. Import express
const express = require('express');

// 2. Create express server
const app = express();

// 3. Create a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// 5. Test the server
// Open Terminal, run: node comments.js
// Open Browser, go to: http://localhost:3000