'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res) {
    res.json({ greetings: 'Hello, API' });
});

app.listen(process.env.PORT || 5000, function() {
    console.log('Node.js listening ...');
});
