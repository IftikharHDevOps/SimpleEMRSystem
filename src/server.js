// src/server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! This is the Simple EMR System backend.'));

app.listen(port, () => console.log(`Simple EMR System backend listening at http://localhost:${port}`));
