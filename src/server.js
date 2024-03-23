// src/server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'admin0', // Replace with your RDS username
    host: 'terraform-20240323120309448200000001.c3s0ea0mm9er.us-east-1.rds.amazonaws.com', // Replace with your RDS endpoint
    database: 'admin0', // Replace with your database name
    password: 'SimpleEMRSystemKey', // Replace with your RDS password
    port: 5432, // Default port for PostgreSQL
});

app.get('/db', async (req, res) => {
    try {
        const dbResponse = await pool.query('SELECT NOW()');
        res.send(`Database time: ${dbResponse.rows[0].now}`);
    } catch (error) {
        console.error(error);
        res.send("Error connecting to the database.");
    }
});


// Change the listen address to '0.0.0.0' from 'localhost'
app.listen(port, '0.0.0.0', () => console.log(`Simple EMR System backend listening at http://localhost:${port}`));
