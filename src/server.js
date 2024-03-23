// src/server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! This is the Simple EMR System backend.'));

// Change the listen address to '0.0.0.0' from 'localhost'
app.listen(port, '0.0.0.0', () => console.log(`Simple EMR System backend listening at http://localhost:${port}`));
