var http = require('http');
const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 5000;

const baseDir = `${__dirname}/app/superChefRecipes/dist/`
app.use(express.static(`${baseDir}`))

app.get('/', (req, res) => res.sendFile('index.html', { root: baseDir }))

app.get('/search', async (req, res) => {
  await axios.get("https://api.edamam.com/api/recipes/v2", {
    params: {
      type: 'public',
      q: 'chicken',
      app_id: 'ac06b95b',
      app_key: '3a09d97f9dd5987e757c4f903204dd4f',
      count: '3'
    }
  })
    .then((response) => {
      console.log(response.data)
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