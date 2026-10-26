const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('IFT 458 Module 5 Lab 1 - Middleware Working!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});