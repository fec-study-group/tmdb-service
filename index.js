const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
require('dotenv').config();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('tmdb service');
});

app.get('/movie/:id', function(req, res) {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.TMDB_API_KEY}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

});

app.get('/logout', function(req, res) {
    res.send('logout page');
});

app.get('/login', function(req, res) {
    res.send('login page');
});
  


module.exports = app;

listen();

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}