const express = require('express');
const app = express();
const request = require('request');
const API_key = require('./config');

app.set('view engine', 'ejs')

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('search');
});

app.get('/results', (req, res) => {
  const query = req.query.search;
  request(`http://www.omdbapi.com/?apikey=${API_key}&s=${query}`, (error, response, body) => {
    if(!error && response.statusCode == 200) {
      const parsedData = JSON.parse(body);
      res.render('results', {movies: parsedData})
    }
  });
});

app.listen(3000, console.log('Movies app has started!'));