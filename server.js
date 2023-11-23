var http = require('http');
const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

const baseDir = `${__dirname}/dist`
app.use(express.static(`${baseDir}`))

app.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }))

app.get('/search', async (req, res) => {
  await axios.get("https://api.edamam.com/api/recipes/v2", {
    params: {
      type: 'public',
      q: 'chicken',
      app_id: '',
      app_key: '',
      count: '3'
    }
  })
    .then((response) => {
      res.json(response.data.hits)
    }
    )
    .catch(function (error) {
      console.log(error);
    })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});