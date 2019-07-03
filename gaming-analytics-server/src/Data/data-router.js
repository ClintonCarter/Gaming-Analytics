const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
fetch.Promise = global.Promise;

const url = "https://api.twitch.tv/helix/analytics/games";
const key = process.env.CLIENT_ID;

route.get('/api', (req,res) => {
  fetch(url, {
    headers: {
      "Oauth Token" : key
    }
  })
  .then(apiRes => apiRes.json())
  .then(apiRes => {
    res.json(apiRes)
  })
  .catch(err => {
    console.log('Error', err)
  })
});