const express = require('express');
const app = express();
const request = require('request');
const API_key = require('./config');

app.get('/results', (req, res) => {
  request(`http://www.omdbapi.com/?apikey=${API_key}&s=potter`, (error, response, body) => {
    if(!error && response.statusCode == 200) {
      res.send(body)
    }
  });
});

app.listen(3000, console.log('Movies app has started!'));